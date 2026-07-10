import React, { useState } from 'react';

const WordPlayIndicators = () => {
  const [revealedSpoilers, setRevealedSpoilers] = useState({});

  const toggleSpoiler = (category, index, type) => {
    setRevealedSpoilers(prev => ({
      ...prev,
      [`${category}-${index}-${type}`]: !prev[`${category}-${index}-${type}`]
    }));
  };

  const scrollToSection = (category) => {
    const element = document.getElementById(category.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const indicators = [
    {
      category: 'Anagrams',
      description: 'Words that suggest rearrangement or disorder',
      examples: [
        'confused', 'wild', 'strange', 'unusual', 'broken', 'damaged',
        'crazy', 'mixed up', 'wrong', 'bad', 'drunk', 'about',
        'arranged', 'sorted', 'working'
      ],
      exampleClues: [
        {
          clue: 'Hear silent broadcast (6)',
          answer: 'LISTEN',
          explanation: '"Broadcast" is the anagram indicator: rearrange the letters of "SILENT" to get "LISTEN", meaning to hear',
          highlight: 'SILENT → LISTEN',
          definition: 'Hear'
        },
        {
          clue: 'Strange care makes a contest (4)',
          answer: 'RACE',
          explanation: '"Strange" is the anagram indicator: rearrange the letters of "CARE" to get "RACE", a contest',
          highlight: 'CARE → RACE',
          definition: 'a contest'
        }
      ]
    },
    {
      category: 'Hidden Words',
      description: 'Words that suggest concealment or partial visibility',
      examples: [
        'in', 'within', 'hiding', 'some of', 'part of', 'buried in',
        'held by', 'embraced by', 'concealed in', 'among'
      ],
      exampleClues: [
        {
          clue: 'Some stole money for fruit? (5)',
          answer: 'LEMON',
          explanation: '"Some" is the hidden-word indicator: "LEMON" is hidden across "stoLE MONey". The question mark flags that "fruit" defines by example',
          highlight: 'sto[LE MON]ey',
          definition: 'fruit'
        },
        {
          clue: 'Refined portion of garden within hedge shearing (5)',
          answer: 'EDGES',
          explanation: '"Within" is the hidden-word indicator: "EDGES" is hidden across "hEDGE Shearing"',
          highlight: 'h[EDGE S]hearing',
          definition: 'Refined portion of garden'
        },
      ]
    },
    {
      category: 'Reversals',
      description: 'Words that suggest backwards movement or direction',
      examples: [
        'back', 'returning', 'returned', 'reversed', 'reflected', 'sent back',
        'brought back', 'overturned', 'turned', 'flipped', 'rejected'
      ],
      exampleClues: [
        {
          clue: 'Cooking vessel flipped for a quick sleep (3)',
          answer: 'NAP',
          explanation: '"Flipped" is the reversal indicator: "PAN" (a cooking vessel) reversed becomes "NAP", a quick sleep',
          highlight: 'PAN → NAP',
          definition: 'a quick sleep'
        },
        {
          clue: "Market's streetcar sent back (4)",
          answer: 'MART',
          explanation: '"Sent back" is the reversal indicator: "TRAM" (a streetcar) reversed becomes "MART", a market',
          highlight: 'TRAM → MART',
          definition: 'Market'
        }
      ]
    },
    {
      category: 'Deletions',
      description: 'Words that suggest removal or loss',
      examples: [
        'shortened', 'cut', 'reduced', 'trimmed', 'beheaded', 'endless',
        'bottomless', 'curtailed', 'lacking', 'missing'
      ],
      exampleClues: [
        {
          clue: 'Beheaded monarch is still bowed (4)',
          answer: 'ARCH',
          explanation: 'Monarch without its first three letters gives ARCH, a shape that is bowed',
          highlight: 'mon[ARCH] → arch',
          definition: 'bowed'
        },
        {
          clue: 'Part lycanthrope is still twisted (4)',
          answer: 'ROPE',
          explanation: '"Part" tells you to take part of "lycanthrope" — its tail end gives ROPE, which is twisted string',
          highlight: 'lycanth[ROPE]',
          definition: 'twisted'
        }
      ]
    },
    {
      category: 'Letter Index',
      description: 'Words that suggest selecting specific letters from words',
      examples: [
        'even', 'odd', 'prime', 'first', 'last', 'middle', 'every other',
        'alternate', 'initial', 'final', 'central', 'beginning', 'end'
      ],
      exampleClues: [
        {
          clue: 'Even stripes can be formal wear (3)',
          answer: 'TIE',
          explanation: 'Take the even-numbered letters from "STRIPES" (T, I, E) to get "TIE"',
          highlight: 's[T]r[I]p[E]s',
          definition: 'formal wear'
        },
        {
          clue: 'Ones of red, orange, yellow, and lilac can be crowned (5)',
          answer: 'ROYAL',
          explanation: '"Ones of" tells you to take the first ones — the initial letters: Red, Orange, Yellow, And, Lilac spell "ROYAL", which can be crowned',
          highlight: '[R]ed [O]range [Y]ellow [A]nd [L]ilac',
          definition: 'can be crowned'
        }
      ]
    },
    {
      category: 'Homophones',
      description: 'Words that suggest sound or hearing',
      examples: [
        'sounds like', 'heard', 'say', 'spoken', 'aloud', 'audibly',
        'by the sound of it', 'reportedly', 'broadcast'
      ],
      exampleClues: [
        {
          clue: 'The number sounded not against it (4)',
          answer: 'FOUR',
          explanation: 'Sounds like "FOR" which means not against it',
          highlight: 'FOUR (sounds like FOR)',
          definition: 'The number'
        },
        {
          clue: "Dog's extremity we hear makes a story (4)",
          answer: 'TALE',
          explanation: '"We hear" marks the homophone: a dog\'s extremity is its "TAIL", which sounds like "TALE", a story',
          highlight: 'TAIL (sounds like TALE)',
          definition: 'a story'
        }
      ]
    },
    {
      category: 'Double Definitions',
      description: 'Two definitions placed side by side, each independently defining the same answer. There is no indicator word — the trick is spotting that the clue splits into two separate meanings, often joined by a small link word.',
      examples: [
        'or', 'and', "'s", 'to', 'for', 'is', '(often no link word at all)'
      ],
      exampleClues: [
        {
          clue: 'New book (5)',
          answer: 'NOVEL',
          explanation: 'Double definition: "NOVEL" means new (a novel idea) AND a "NOVEL" is a book. Both halves define the answer independently',
          highlight: 'NEW = NOVEL | BOOK = NOVEL',
          definition: "both 'New' and 'book'"
        },
        {
          clue: 'Departs or pages (6)',
          answer: 'LEAVES',
          explanation: 'Double definition: "LEAVES" means departs AND "LEAVES" are the pages of a book. "Or" simply links the two definitions',
          highlight: 'DEPARTS = LEAVES | PAGES = LEAVES',
          definition: "both 'Departs' and 'pages'"
        }
      ]
    },
    {
      category: 'Charades & Containers',
      description: 'Charades build the answer from smaller parts placed one after another (like the parlour game). Containers put one word inside another. Charades often need no indicator — the parts are simply adjacent — while containers always have an indicator showing which word swallows which.',
      examples: [
        'holds', 'wearing', 'embraces', 'swallows', 'around', 'inside',
        'next to', 'before', 'after', 'on'
      ],
      exampleClues: [
        {
          clue: 'Company encountered celestial visitor (5)',
          answer: 'COMET',
          explanation: 'Charade: "CO" (company) followed by "MET" (encountered) builds "COMET", a celestial visitor. The parts are simply placed side by side',
          highlight: 'CO + MET = COMET',
          definition: 'celestial visitor'
        },
        {
          clue: 'Chat about energy to swindle (5)',
          answer: 'CHEAT',
          explanation: 'Container: "about" signals that "CHAT" wraps around "E" (energy), giving "CH-E-AT", meaning to swindle',
          highlight: 'CH(E)AT',
          definition: 'swindle'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Cryptic Crossword Word Play Indicators
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Index</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {indicators.map((category) => (
              <button
                key={category.category}
                onClick={() => scrollToSection(category.category)}
                className="text-blue-600 hover:text-blue-800 hover:underline text-left"
              >
                {category.category}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Understanding Cryptic Clues</h3>
            <p className="text-gray-600">
              Every cryptic crossword clue contains two parts: a definition and a word play element. The definition is usually at the start or end of the clue, while the word play uses various techniques (like anagrams, reversals, or hidden words) to arrive at the same answer. The word play indicators help you identify which technique is being used. The answer must satisfy both the definition and the word play.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {indicators.map((category) => (
            <div key={category.category} id={category.category.toLowerCase()} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-200 pb-2">
                {category.category}
              </h2>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Common Indicators:</h3>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Example Clues:</h3>
                <ul className="space-y-4">
                  {category.exampleClues.map((example, index) => (
                    <li key={index} className="text-gray-600">
                      <div className="mb-1 text-lg font-medium text-gray-800 ml-8">{example.clue}</div>
                      <div className="ml-12">
                        <button
                          onClick={() => toggleSpoiler(category.category, index, 'all')}
                          className={`w-full text-left transition-all duration-200 ${
                            revealedSpoilers[`${category.category}-${index}-all`]
                              ? 'text-gray-700'
                              : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          {revealedSpoilers[`${category.category}-${index}-all`] ? (
                            <>
                              <div className="text-orange-600 font-medium text-base">Definition: {example.definition}</div>
                              <div className="text-green-600 font-medium text-base">Answer: {example.answer}</div>
                              <div className="text-blue-600 text-base">Explanation: {example.explanation}</div>
                              <div className="text-purple-600 font-mono mt-1 text-base">{example.highlight}</div>
                            </>
                          ) : (
                            <span className="text-base">Click to reveal solution</span>
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordPlayIndicators; 