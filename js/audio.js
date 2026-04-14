// ═══════════════════════════════════
//  AUDIO SYSTEM - Bit Cryptic World
//  Ambient music, SFX for puzzles, unlock sounds
//  Uses Web Audio API with graceful degradation
// ═══════════════════════════════════

const BCWAudio = (() => {
  let audioCtx = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let ambientGain = null;

  let currentMusic = null;
  let ambientNodes = [];
  let enabled = true;
  let musicVolume = 0.3;
  let sfxVolume = 0.5;
  let textSfxEnabled = true;
  let textSoundFrequency = 3; // play sound every N characters (higher = slower, range 2-8)

  const STORAGE_KEY = 'bcw_audio_settings';

  function init() {
    // Load saved settings
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        enabled = saved.enabled !== false;
        musicVolume = saved.musicVolume ?? 0.3;
        sfxVolume = saved.sfxVolume ?? 0.5;
        textSfxEnabled = saved.textSfxEnabled !== false;
        if (saved.textSoundStyle) textSoundStyle = saved.textSoundStyle;
        if (saved.textSoundFrequency) textSoundFrequency = saved.textSoundFrequency;
      }
    } catch {}

    // Create audio context on first user interaction
    const resumeAudio = () => {
      if (!audioCtx) {
        try {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          masterGain = audioCtx.createGain();
          musicGain = audioCtx.createGain();
          sfxGain = audioCtx.createGain();
          ambientGain = audioCtx.createGain();

          musicGain.connect(masterGain);
          sfxGain.connect(masterGain);
          ambientGain.connect(masterGain);
          masterGain.connect(audioCtx.destination);

          masterGain.gain.value = enabled ? 1 : 0;
          musicGain.gain.value = musicVolume;
          sfxGain.gain.value = sfxVolume;
          ambientGain.gain.value = 0.2;
        } catch {
          // Web Audio not supported
          return;
        }
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    };

    // Remove listeners once AudioContext is successfully created and running
    const onInteraction = () => {
      resumeAudio();
      if (audioCtx && audioCtx.state === 'running') {
        document.removeEventListener('click', onInteraction);
        document.removeEventListener('keydown', onInteraction);
      }
    };
    document.addEventListener('click', onInteraction);
    document.addEventListener('keydown', onInteraction);
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        enabled, musicVolume, sfxVolume, textSfxEnabled, textSoundStyle, textSoundFrequency
      }));
    } catch {}
  }

  // Synthesized tones using Web Audio API (no external files needed)
  function playTone(freq, duration, type = 'sine', gain = 0.3, destination = null) {
    if (!audioCtx || !enabled) return;
    const dest = destination || sfxGain;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(gain, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(g);
    g.connect(dest);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }

  function playChord(frequencies, duration, type = 'sine', gain = 0.15) {
    frequencies.forEach(f => playTone(f, duration, type, gain));
  }

  // ─── Sound Effects ───

  function playClick() {
    playTone(800, 0.05, 'square', 0.1);
  }

  function playSuccess() {
    if (!audioCtx || !enabled) return;
    // Rising arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.3, 'sine', 0.2), i * 100);
    });
  }

  function playWrong() {
    if (!audioCtx || !enabled) return;
    playTone(200, 0.3, 'sawtooth', 0.15);
    setTimeout(() => playTone(150, 0.4, 'sawtooth', 0.1), 100);
  }

  function playUnlock() {
    if (!audioCtx || !enabled) return;
    // Magical unlock sound
    const notes = [392, 523.25, 659.25, 783.99, 1046.5]; // G4, C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => {
        playTone(freq, 0.5 - i * 0.05, 'sine', 0.2);
        playTone(freq * 1.5, 0.3, 'sine', 0.05); // harmonic
      }, i * 120);
    });
  }

  // ── Text sound options (change textSoundStyle to 'A', 'B', or 'C') ──
  // A = Soft bubble pop (gentle sine blip, airy)
  // B = Warm pluck (triangle wave with quick decay, cozy)
  // C = Gentle chime (high sine with harmonic, sparkly)
  let textSoundStyle = 'A';

  function playTypewriter() {
    if (!audioCtx || !enabled || !textSfxEnabled) return;

    if (textSoundStyle === 'A') {
      // Soft bubble pop — gentle sine blip
      const freq = 400 + Math.random() * 150;
      playTone(freq, 0.06, 'sine', 0.04);
    } else if (textSoundStyle === 'B') {
      // Warm pluck — triangle wave, short decay
      const freq = 350 + Math.random() * 120;
      playTone(freq, 0.04, 'triangle', 0.05);
    } else if (textSoundStyle === 'C') {
      // Gentle chime — higher sine with a faint harmonic
      const freq = 700 + Math.random() * 200;
      playTone(freq, 0.05, 'sine', 0.025);
      playTone(freq * 1.5, 0.04, 'sine', 0.01);
    }
  }

  function playStoryAdvance() {
    playTone(440, 0.15, 'sine', 0.1);
    setTimeout(() => playTone(554.37, 0.2, 'sine', 0.08), 80);
  }

  function playMenuOpen() {
    playTone(330, 0.1, 'sine', 0.1);
    setTimeout(() => playTone(440, 0.15, 'sine', 0.08), 50);
  }

  function playMenuClose() {
    playTone(440, 0.1, 'sine', 0.08);
    setTimeout(() => playTone(330, 0.15, 'sine', 0.06), 50);
  }

  function playCast() {
    if (!audioCtx || !enabled) return;
    // Whoosh sound
    const noise = audioCtx.createBufferSource();
    const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.5, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.1));
    }
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000;
    filter.Q.value = 0.5;
    noise.connect(filter);
    const g = audioCtx.createGain();
    g.gain.value = 0.15;
    filter.connect(g);
    g.connect(sfxGain);
    noise.start();
  }

  function playFishCatch() {
    if (!audioCtx || !enabled) return;
    // Splash + jingle
    playTone(300, 0.1, 'triangle', 0.15);
    setTimeout(() => playSuccess(), 200);
  }

  function playSplash() {
    if (!audioCtx || !enabled) return;
    const noise = audioCtx.createBufferSource();
    const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.3, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.05));
    }
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    noise.connect(filter);
    const g = audioCtx.createGain();
    g.gain.value = 0.1;
    filter.connect(g);
    g.connect(sfxGain);
    noise.start();
  }

  // ─── Ambient Music (synthesized) ───

  function startAmbientMusic(location) {
    stopMusic();
    if (!audioCtx || !enabled) return;

    const themes = {
      default: { notes: [261.63, 329.63, 392, 329.63], tempo: 2000, type: 'sine' },
      forest: { notes: [220, 261.63, 329.63, 293.66], tempo: 2500, type: 'sine' },
      ocean: { notes: [196, 233.08, 261.63, 233.08], tempo: 3000, type: 'sine' },
      town: { notes: [293.66, 349.23, 392, 440], tempo: 1800, type: 'triangle' },
      cave: { notes: [146.83, 174.61, 196, 174.61], tempo: 3500, type: 'sine' },
      sky: { notes: [392, 493.88, 587.33, 493.88], tempo: 2200, type: 'sine' }
    };

    const theme = themes[location] || themes.default;
    let noteIndex = 0;

    function playNote() {
      if (!enabled || !audioCtx) return;
      const freq = theme.notes[noteIndex % theme.notes.length];
      playTone(freq, theme.tempo / 1000 * 0.8, theme.type, 0.06, musicGain);
      // Add gentle harmony
      playTone(freq * 1.5, theme.tempo / 1000 * 0.5, theme.type, 0.02, musicGain);
      noteIndex++;
    }

    playNote();
    currentMusic = setInterval(playNote, theme.tempo);
  }

  function stopMusic() {
    if (currentMusic) {
      clearInterval(currentMusic);
      currentMusic = null;
    }
  }

  // ─── Controls ───

  function setEnabled(val) {
    enabled = val;
    if (masterGain) {
      masterGain.gain.setValueAtTime(val ? 1 : 0, audioCtx.currentTime);
    }
    if (!val) stopMusic();
    saveSettings();
  }

  function setMusicVolume(val) {
    musicVolume = Math.max(0, Math.min(1, val));
    if (musicGain) musicGain.gain.value = musicVolume;
    saveSettings();
  }

  function setSfxVolume(val) {
    sfxVolume = Math.max(0, Math.min(1, val));
    if (sfxGain) sfxGain.gain.value = sfxVolume;
    saveSettings();
  }

  function setTextSfxEnabled(val) {
    textSfxEnabled = val;
    saveSettings();
  }

  function setTextSoundStyle(val) {
    textSoundStyle = val;
    saveSettings();
  }

  function getTextSoundStyle() { return textSoundStyle; }

  function setTextSoundFrequency(val) {
    textSoundFrequency = Math.max(2, Math.min(8, Math.round(val)));
    saveSettings();
  }

  function getTextSoundFrequency() { return textSoundFrequency; }

  function previewTextSound() {
    // Play a quick burst at the current frequency so the user can hear the pacing
    if (!audioCtx || !enabled) return;
    let i = 0;
    let charCount = 0;
    const id = setInterval(() => {
      charCount++;
      if (charCount % textSoundFrequency === 0) {
        playTypewriter();
        i++;
      }
      if (i >= 6) clearInterval(id);
    }, 25);
  }

  function isEnabled() { return enabled; }
  function getMusicVolume() { return musicVolume; }
  function getSfxVolume() { return sfxVolume; }
  function isTextSfxEnabled() { return textSfxEnabled; }

  return {
    init,
    playClick,
    playSuccess,
    playWrong,
    playUnlock,
    playTypewriter,
    playStoryAdvance,
    playMenuOpen,
    playMenuClose,
    playCast,
    playFishCatch,
    playSplash,
    startAmbientMusic,
    stopMusic,
    setEnabled,
    setMusicVolume,
    setSfxVolume,
    isEnabled,
    getMusicVolume,
    getSfxVolume,
    isTextSfxEnabled,
    setTextSfxEnabled,
    getTextSoundStyle,
    setTextSoundStyle,
    getTextSoundFrequency,
    setTextSoundFrequency,
    previewTextSound
  };
})();
