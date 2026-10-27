// Exercise the real shipped scene load order, including the approved model kit.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
const files=[...html.matchAll(/<script src="(scenes\/[^"]+)"/g)].map(m=>m[1]);
const ctx=vm.createContext({STORY_SCENES:{}});
for(const f of files)vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const checks={workshop_1:'croc',workshop_2:'croc',workshop_6:'croc',workshop_7:'croc',beach_0:'webby',library_0:'harrington',town_0:'laurel',hidden_end_5:'fredward',wreck_6:'fredward',wreck_3:'fredward'};
for(const[key,name]of Object.entries(checks))assert(ctx.STORY_SCENES[key]?.includes('data-approved-character="'+name+'"'),key+' must use '+name);
assert.equal(Object.keys(ctx.BC_APPROVED_CAST).length,5);
// Six approved poses each, plus Fredward's two held-object poses (cradle, hold; 2026-10-25).
for(const[k,c]of Object.entries(ctx.BC_APPROVED_CAST))assert.equal(Object.keys(c.poses).length,k==='fredward'?8:6,k+' pose count');
// Review fixes, 2026-10-25: every approved placement carries its own contact shadow,
// Croc's discover pose keeps the closed W smile, the dive scenes use the approved otter.
for(const key of ['workshop_1','workshop_2','workshop_6','workshop_7'])assert(ctx.STORY_SCENES[key].includes('data-contact-shadow'),key+' needs a contact shadow');
assert.equal((ctx.STORY_SCENES.workshop_7.match(/data-contact-shadow/g)||[]).length,1,'workshop_7 must not double its shadow');
assert(!ctx.BC_APPROVED_CAST.croc.poses.discover.includes('L-17 -40L-20 -35')&&ctx.BC_APPROVED_CAST.croc.poses.explain.includes('L-17 -40L-20 -35'),'Croc discover keeps the closed W smile');
for(const key of ['wreck_3','wreck_6'])assert(ctx.STORY_SCENES[key].includes('data-dive-helmet')&&ctx.STORY_SCENES[key].includes('data-approved-character="fredward"'),key+' must dress the approved Fredward in the dive helmet');
assert(ctx.STORY_SCENES.wreck_6.includes('data-approved-hands="fredward"'),'wreck_6 hands close over the cage');
assert(ctx.STORY_SCENES.hidden_end_5.includes('data-held="rope"')&&ctx.STORY_SCENES.hidden_end_5.includes('data-approved-hands'),'hidden_end_5 holds the rope and the pages');
const repeated=vm.runInContext("bcApprovedPlace('croc','ready',0,100,80)+bcApprovedPlace('croc','ready',100,100,80)",ctx);
const ids=[...repeated.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'repeated actors must not reuse clip IDs');
assert(repeated.includes('solid-tail'),'Croc must use the final approved tail');
const missions={docks_2:'dock-keeper',docks_6:'dock-keeper',cafe_1:'barista',library_1:'librarian',town_2:'wren',observatory_2:'star-watcher',observatory_4:'star-watcher'};
// Five approved mission characters plus three built for Joshua's sign-off (decision desk, 2026-10-25).
// A pending model loads and places like the others but must stay marked pending until he signs it off.
const approvedMission=['dock-keeper','barista','librarian','wren','star-watcher'],pendingMission=['simon','mark','canon'];
assert.deepEqual(Object.keys(ctx.BC_MISSION_CAST).sort(),[...approvedMission,...pendingMission].sort());
for(const[k,c]of Object.entries(ctx.BC_MISSION_CAST)){assert.equal(c.status,approvedMission.includes(k)?'approved':'pending-signoff',k+' status');assert.equal(Object.keys(c.poses).length,6,k+' pose count');assert.deepEqual(c.anchor,{x:100,y:294},k+' anchor');}
for(const k of pendingMission){const g=vm.runInContext("bcMissionPlace('"+k+"','work',250,240,120,true)",ctx);assert(g.includes('data-mission-character="'+k+'"')&&g.includes('data-contact-shadow'),k+' must place through bcMissionPlace');assert.equal((g.match(/data-digit-count="4"/g)||[]).length,2,k+' needs two four-digit hands');}
for(const[key,name]of Object.entries(missions))assert(ctx.STORY_SCENES[key].includes('data-mission-character="'+name+'"'),key+' must use its own mission character');
assert(!ctx.STORY_SCENES.cafe_1.includes('data-approved-character="fredward"'),'Barista must not borrow Fredward');
assert(!ctx.STORY_SCENES.town_2.includes('M273.5,52'),'Remove old detached bell');
assert(!ctx.STORY_SCENES.docks_2.includes('M283,64'),'Remove old detached lantern');
console.log('Approved mission cast OK: five characters, 30 poses, seven compositions, no legacy detached props.');
console.log('PENDING SIGN-OFF (not approved): '+pendingMission.join(', ')+'; 18 poses, all placeable via bcMissionPlace.');
console.log('Approved cast OK: all five models, 32 poses, ten scene placements, unique instance IDs, final Croc tail.');
