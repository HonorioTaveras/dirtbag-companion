const db = require('../index.js');
const RouteList = require('../models/routeList.js');

const routeListData = [
  {
    route_id: 1,
    route_name: 'The Yellow Spur',
    route_type: 'Trad',
    grade: '5.9+',
    rating: 4.8,
    pitches: 6,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower One',
    ],
    description: `This is one of the most popular routes in Eldo, and for a good reason. It is long, not too sustained, and a beautiful direct line. The climbing is all pretty straight forward. The 5.10 variation on the second to last pitch is kinda stiff for .10a, but is really well protected on bolts. The last pitch is runout but easy. The direct start is not too bad, more of a high boulder problem than anything, although I had a friend who sprained his ankle on it once.

    P1 direct. Scramble onto it and arrive shortly at some caked-on chalk and pin scars below a break in a long roof band. This was Kors original start; it is 5.10 and protects with tricky small stopper placements.

    P1 standard. A much easier start ascends a short dihedral 20 feet to the right. Cut back left, then climb further up huge holds over the exciting roof, and head right to a tree belay-5.9 (about 30 feet of elevation gain).

    P2. Go up left, then up a fantastic dihedral, with face moves at the end, to another tree, 5.8.

    P3. Head up cracks and corners to a rotten band; continue over a scary bulge and another crack to a beautiful, exposed ledge, also 5.8.

    P4. Fifteen feet right of the belay, ascend a large, moderate dihedral. Hand traverse right, avoiding a huge overhang, and climb another 5.8 corner up and then right to a small, exposed stance. You can also belay on a large ledge 10 feet lower with less exposure.

    P5. Climb straight up, make a delicate step right into a thin crack (with several pitons) and ascend that (the crux) to a scary detached flake [now gone]. Make a beautiful ascending 5.7 traverse up left to lower angle terrain and a belay on the arete, or climb straight up past bolts at 5.10 and reach the same belay.

    P6. Head up the spectacular 5.6 arete to the summit of Tower One.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1202925_large_1557526108.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/109086118_large_1494338363.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1205061_large_1557528211.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106076009_large_1558471700.jpg',
      },
    ],
  },
  {
    route_id: 2,
    route_name: 'Rewritten',
    route_type: 'Trad',
    grade: '5.7',
    rating: 4.7,
    pitches: 6,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Lumpe to the top',
    ],
    description: `This is another excellent classic on Redgarden. Six pitches takes you to the summit of the Middle Buttress via Rebuffat's Arete. Start at the base of the West Chimney below the Middle Buttress about 15 feet left of an alcove.

    P1 is a steep start but only 5.6 up a nice crack (~110 feet). There are two cracks starting here. The thinner crack on the right is The Great Zot (8+) and is one of my favorite 5.8s in Eldo. Take your pick.

    P2. Climb an easy pitch up to the Red Ledge arcing left. Look for a large eyebolt.

    P3. Continue up the left-facing dihedral to a belay stance on the right (6).

    P4. This is the crux and most exciting pitch. From the belay, traverse the hand crack left, pull around the arete, and continue up the steep and exposed hand crack. Belay on a ledge to the left of where previously existed a large, detached block or the right. Caution: this block fell down; this 6 foot high piece of rock used to rock back and forth if you pulled on it!

    P5. Follow the crack to the R (5) or straight (8) up Rebuffat's Arete. The arete is recommended as it more spectacular. Belay at a tree in the large V on the left.

    P6. Find a clean, 5.5 crack to the summit. This is a great short pitch also with a nice view and bomber gear.

    Descent: downclimb a notch to the North back to the West side of Redgarden Wall. The notch is beyond several towers to the NW. If it doesn't look like easy 4th Class, keep going.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113171856_large_1497744179.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105827722_large_1557860469.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113916178_large_1512840671.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107138402_large_1494168815.jpg',
      },
    ],
  },
  {
    route_id: 3,
    route_name: 'The Bastille Crack',
    route_type: 'Trad',
    grade: '5.7',
    rating: 4.5,
    pitches: 5,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Bastille',
      'The Bastille - N Face',
    ],
    description: `One of the most classic climbs in the country, it begins right off the road on the Bastille, a 350' cliff on the left as you enter the canyon. Often crowded, a weekday is probably the best time to attempt this climb.

    The climb is north facing and in the shade until mid-afternoon. As Jim Erickson said in his classic 1980 Rocky Heights guidebook, "avoid it like the plague if the weather is not warm, or you will shiver away much of its charm."

    Start at the center of the north face of the Bastille, below a hand crack that starts 20' up the wall, with a huge, serrated flake to its right.

    The first pitch has been the site of numerous accidents, so make sure you're solid on 5.7 crack climbing and placing pro before attempting to lead it.

    P1. 5.7, 60'. Climb up to the flake and step left to the crack. Jam or layback up the polished crack (crux), then follow the crack up and left to a small stance at a 2-bolt anchor with chains. You can belay here (if you want to watch/coach your second through the crux), or continue with the second pitch.

    P2. 5.6, 90'. Climb up to the chimney left of the bolts, and step left onto the face. Climb up to a finger crack, then traverse right above a little roof (crux). Continue up steep, enjoyable cracks and angle up left on easy ground to a sloping ledge by a steep wall. Belay at a crack with a fixed pin. If this belay is occupied, it's possible to belay about 20' lower at another stance.

    Variation: near the top of P2, take a right-angling wide crack up and back left, 5.8. Bring a big cam (#4 Camalot) to protect this line.

    P1 & P2 can be combined with a 50m rope.

    P3. 5.7, 50'. Climb up into a pod, then work up past a small roof (crux). Continue up the cracks to another sloping ledge. A #1 and #2 Camalot are useful for the belay anchor.

    P1-3 can be combined with a 70m rope.

    P4. 5.6, 100'. Traverse left to a short corner with a destroyed fixed pin. Continue traversing left on awkward, off-balance moves past another fixed pin (crux). Go all the way left to a hand crack and climb it to a corner. Don't start up too soon or you'll be off route on a harder variation. Climb the corner, then continue up and right on easy ramps to a belay stance below or just right of a chimney.

    P5. Several options here:

    a. Easy finish: 5.4, 60'. Climb the chimney to the top.

    b. Fun finish: 5.8, 80'. Climb up a ramp right of the chimney to a huge corner with a wide crack. Climb up the face left of the corner to a fixed pin. Continue up the steep headwall and surmount a little roof at the top (crux). If you have a #3 and #4 Camalot, you can belay just above the roof (and watch/coach your second at the crux roof), otherwise continue up an easy gully and belay from a spike of rock at the top.

    c. Grovel finish: 5.7, 80'. Climb the wide crack in the corner just right of the previous variation.

    To descend: follow deep grooves to the south until you reach a dirt trail. Go 30' right (west) and then follow the marked Bastille descent trail north and down to the road at the base of the cliff.

    (Ed. Note: beginner leaders--make sure you're solid on crack techique before trying this one. Placing gear is not trivial for the inexperienced.)`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1204790_large_1557527928.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108995841_large_1494302324.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113535469_large_1504359204.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/118681104_large_1584847971.jpg',
      },
    ],
  },
  {
    route_id: 4,
    route_name: 'Direct Route',
    route_type: 'Trad',
    grade: '5.6 R',
    rating: 4.5,
    pitches: 10,
    location: ['Colorado', 'Boulder', 'Flatirons', 'North', 'First Flatiron'],
    description: `This route climbs the entire 1000+ feet of the First Flatiron, and is pure joy the whole way up. The pitches are based upon using a 50m rope. It's 7 for a 60m rope.

    P1: Start at the base of the Flatiron, just across and left of the bridge. Follow a water gully up, passing two eye bolts on the left side, to belay on a ledge by the tree if you have a 60meter rope. Otherwise, you'll have to belay at a small shelf about 1/2 way there.

    P2: Continue straight up, belaying at another nice ledge a rope length up.

    P3: Scramble up easier terrain to a belay. (Yes it's vague. Just go a rope length, and find a good ledge).

    P4: Scamble again straight up and a little left. Belay on a ledge that could hold 20 people, on top of the headwall.

    P5: Head left and up, towards a slot at the left end of the roof.

    P6: Follow up the slot and start on the ridge traverse.

    P7-10: It's 2-4 pitches from here to the actual summit block.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/114521833_large_1529958880.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/119124974_large_1593390971.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/112504410_large_1494308990.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106470995_large_1494111936.jpg',
      },
    ],
  },
  {
    route_id: 5,
    route_name: 'Rosy Crucifixion',
    route_type: 'Trad',
    grade: '5.10a/b PG13',
    rating: 4.8,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower Two',
    ],
    description: `This is my favorite route in Eldo. It is not too long but is one of the most elegant lines possible. It begins with a long scramble up a ramp 5.0 (left of the Roof Routes), to some 5.2 soloing. It is hard to describe exactly how to get to the base of it, consult a guidebook.

    Per Carl Schaefer: a less-exposed alternative to the Lower Ramp is what Levin calls West Face of Lower Ramp, which starts below Suparete at a large right-facing dihedral and continues up and right (blocky 5.0) to the top of the Lower Ramp.

    The first pitch is a 50' horizontal traverse above a roof. The exposure consists of 150 feet of air straight to the ground, very exposed. The first half of the traverse is the crux, but the second half will still keep you pumped. Make the weaker climber in the party lead it as it is scarier to second it. The belay is semi-hanging off some fixed webbing (or wires) that can be backed up with nuts a little higher. If you haven't climbed in Eldo much, you might find the pitch a bit burly for the grade.

    The second pitch is 60' long and goes up a steep and beautiful 9+ finger crack to a ledge with two bolts. The crux is about 3/4 of the way up.

    The third pitch is .9- and about 110'. Start with delicate moves, go up to a bolt, then make a big stem to the right. Easier ground continues up the upper ramp, where you can belay off a large tree with [no] fixed gear.

    Descent: with one rope, you can rap off Vertigo (up the ramp from the finish) or the Naked Edge (down the same ramp, including a 5.4 move). With 2 ropes, you can rappel the route and end up halfway down the approach ramp. You may have to leave gear on top to get down to the P1 anchor.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108271333_large_1494273144.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/109158634_large_1494340253.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107351941_large_1494183443.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105891621_large_1557938317.jpg',
      },
    ],
  },
  {
    route_id: 6,
    route_name: "Rebuffat's Arete",
    route_type: 'Trad',
    grade: '5.7',
    rating: 4.7,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Lumpe to the top',
    ],
    description: `This is most popularly done as a variation to the fifth pitch of Rewritten. From the dead tree belay of Rewritten, avoid the chossy gully and head straight out right on to the edge of the arete. There is more protection than would first appear. Have fun peeking over the edge and head right up to the top. Then carefully downclimb 5-10 feet to the notch. It is 80'.

    It can also be done from lower on Rewritten, right after the hand traverse and finger crack on pitch 4. Instead of moving left, head straight up the arete. It is 190', PG-13.

    It can also be accessed from Tower Corner Exit. Reach the arete by moving left up a ramp system, then follow to the top as above. It is 130'.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/114295555_large_1524594243.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108967949_large_1494301724.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/119420810_large_1598030087.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/119420797_large_1598029901.jpg',
      },
    ],
  },
  {
    route_id: 7,
    route_name: 'Over the Hill',
    route_type: 'Trad',
    grade: '5.10b',
    rating: 4.7,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Rincon',
      'Rincon - L of Center Route',
    ],
    description: `An all-time classic with exquisite, technical stemming followed by a perfect finger crack. This climbs rewards good balance and precise footwork. Hike to the Rincon Wall, and head west (uphill) to the "left-facing dihedral area". The climb is identified as a long, acute, thin dihedral with a tree near the top and another just above the top. There is a semi-detached flake about twenty feet up which marks the start of the difficulties.

    P1. Climb the dihedral, with a full-body 5.10 stemming down low, and another awkward crux exiting the dihedral. There is an optional belay at the first tree, but the only reason to stop there is if the leader really wants the belayer nearby for moral support at the top crux. There are pins at both cruxes, and other micro-gear is available.

    P2. From the shelf above the dihedral, move left (moving the belay, if desired), and find a thin 5.9 crack up a beautiful steep slab. This is as good as any 5.9 pitch I've done.

    Belay on top, and descend down ledges and gullies to the west.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1201436_large_1557524924.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106097907_large_1558647562.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105944919_large_1557953101.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105936260_large_1557951728.jpg',
      },
    ],
  },
  {
    route_id: 8,
    route_name: 'Handcracker Direct',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.6,
    pitches: 5,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part C - Pony Express to Long John',
    ],
    description: `Rossiter calls this route "a near-classic," and for good reason. Consistent pitches, easy routefinding, and solid crack climbing is what this is all about. We had a smile after every pitch!

    P1: Scramble up to the chimney that is The Mail Ridge, and go slightly right. Start climbing here. Go up the short left facing dihedral created by a large triangular block. Gain the top of said block, and move right into another left-facing dihedral with a slight bulge. Move over and follow the crack up (crux of pitch) to the nice ledge. Try belaying a little to the left of where you end up on this ledge.

    P2: Attack the roof and follow the crack up the right-facing dihedral about 15 feet left of where the previous pitch left you. Follow up through a slot, and belay on an open face before you get to the large flake that continues on your path up the right side of the wall. 5.9.

    P3: Follow this flake up - and what fun! Super-positive, and nice and airy. Use your extra #3 here to protect, as it's a little blank. Rossiter suggests moving left halfway up this flake and continuing on the arete, but I think it's just as fun to follow the flake up and out. Belay anywhere you want on the great break ledge at the end of this flake. 5.7.

    P4: The crux pitch starts about 15 feet, 90 degrees to the left of the direction of travel you were maintaining as you finished the flake. It's a steep, slightly meandering hand crack that ends with a small roof, which you surmount by passing to the left and then stepping left once over to a great belay stance. Steep and sustained but with a number of good spots to place pro, this pitch is a blast! 5.10-.

    P5: Shoot up and slightly right, following the crack from the belay stance up to the summit and enjoy the view! Maybe 5.5.

    Pitches 2-3 and 4-5 are easily linked; many people find this better as a 3 pitch climb.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108599432_large_1494290177.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108599436_large_1494290178.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1200979_large_1557524638.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/112274401_large_1494329515.jpg',
      },
    ],
  },
  {
    route_id: 9,
    route_name: 'Gambit',
    route_type: 'Trad',
    grade: '5.8',
    rating: 4.5,
    pitches: 5,
    location: ['Colorado', 'Boulder', 'Eldorado Canyon SP', 'Shirt Tail Peak'],
    description: `Gambit shines like a rough, uncut diamond. Interesting climbing gets increasingly better with each pitch, as one gains the majestic Southwest Face, finishing on the highest summit in Eldorado Canyon State Park. This is a very fun climb.

    Due to the loose rocks on the belay ledges, it is NOT advisable to follow another party up Gambit - 120% vigilance is required at the belays, and most of the time you're lost in the views instead, but luckily, you should find Shirt Tail quiet; mostly due to the 45-minute hike. An early start is advisable in the summer as shade is provided all morning until the climber ventures out onto the southwest face. This face can be hot in the afternoon.

    The following description breaks the climb into 5 pitches. It can be done by condensing P2 & P3, but by breaking them into two sections, the leader avoids some rope drag approaching the 5.8 roof and also enjoys at least one "normal" belay (read: slightly uncomfortable Serta-lounger-with-a-view on a carpet of pigeon shit). After all, the other three belays are roomy, comfortable, and relatively safe on good ledges. Pitches 4 and 5 combine nicely with a 60m rope.

    Approach: follow the newly built (fall 2010) trail up Shirt Tail Peak until it ends at a nice, big, flat rock step.

    P1. Start just to the right of the base of the Tiger Balm Arete (the blunt arete that narrows and finishes on the West of the summit) from near a large tree growing curiously "around" a bulge in the slab, following a large crack that gets thin, passing a small tree and entering a right-facing dihedral. Once at another small tree, jog up and left entering another short, right-facing dihedral. Fun liebacks gain the first big ledge. Belay by a big tree on this ledge.

    P2. Follow the steep, tricky crack straight up from the ledge, mastering a slight overhang. Interesting climbing continues up steep terrain to a second overhang. Master this small roof, and set up a belay on the pigeon shelf, which actually provides a nice view of your second having fun in the crack below. If you plan to continue on (recommended), mind your rope drag with a long sling when protecting the traverse.

    P3. From the pigeon shelf, traverse right and stem out across the void with a stunning move into the left-facing dihedral above. A great hand/fist crack follows, splitting the aesthetic dihedral. The crack arcs up and slightly left, ever steepening until it meets an overhang. Jam out the fun roof, and pull onto a roomy ledge with lots of loose rock. [addendum: if you place a #3 in the last ~20 section, there is a good chance that you'll lose it. Place a #2 instead or use a very long sling.]

    P4. This pitch packs more punch than may be implied by the 5.7 rating it garners. This one is a classic. Improbably, you must first find a way up and right from the roomy belay, through a narrowing slot. A hanging slab with few holds and a half exposed pin forces climbers into the offwidth on the right. Clip the pin, go set up a nice #4 (I used a 3.8") in the back of the offwidth, reach back, and unclip the (mostly psychological) pin. I won't tell you the secret of the offwidth -- that's half the fun. Surmount the chockstone at the head of the slot, and you'll be standing on a ledge just below the Southwest Face. Now it's party time - step up right and out onto the face, following a right-angling, slightly overhanging hand crack over stupendous exposure with knockout jams...a real treat. Continue up the face until you see a made-to-order 2-foot ledge angling across the face. You get a choice of belays on the ledge, but the crown of the ledge, with two seats, made for airy position and a comfortable crib. You are belaying in space, the flat face dropping away below you. With a 60m rope, you can make it to the top if the drag isn't bad.

    P5. Continue up the face on good cracks past blocky, seemingly sketchy rock that ends (thankfully!) right on the summit. Stay left near the top to avoid the worst of the loose rock. Bring your second up, watching to the south the busy Eldorado antics, the fascinating Flatirons to the north, or the Indian Peaks to the west; reveling in the solitude of the upper canyon.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106602420_large_1494124248.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108078268_large_1494261567.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105864258_large_1557865207.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/116538190_large_1550339498.jpg',
      },
    ],
  },
  {
    route_id: 10,
    route_name: 'Cosmosis',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.6,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Boulder Canyon',
      'Bell Buttress Massif',
      'Bell Buttress - Main Crag',
    ],
    description: `This is one of Boulder Canyon's best moderate routes, although a new guidebook gives the route 5.10a--watch your definition of moderate. Most people do the first pitch and then rappel (one rope) from 2 new bolts.

    Bell Buttress is split by a large chimney. The left half offers several right-facing corners; Cosmosis is the large right-facing corner, about 70 feet high, which overhangs at the top. Shortly right of it, the wall bends inward to the large chimney. The second (or third) pitch finishes in a large, left-facing corner above. The route is further identified by the beautiful bolted arete just to its left - Verve - though there are a lot of bolts on this cliff.

    It should be easy to cross the river on a huge tree that lies across it. Cosmosis is directly above, but broken 5th class bars access to the start. Go left on a path, then back right when feasible up a ramp that leads to the ledge going under the base of the route.

    The crux is the thin bottom section (site of a small, chalked up flake), solved with interesting stemming. More excellent stemming lead to the beautiful hand crack finale. Belay from bolts just above the corner.

    Eds. Do not think of The Route That Dan Missed as a reasonable alternative finish. It does not have bolts!

    Rappel, or continue up a crack, up easy but unprotected face, and then back right into a large, left-facing corner to the top-- a very long pitch, rated 5.7-5.9 depending on where you go. Descend SW and then go down when feasible. Or look for rappel anchors east of the finish. Rappel from there, bypasses another set about 50' down and far left. Find a somewhat hidden intermediate station about 80' down. From there, rap to the trail.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/114266043_large_1523878109.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113137245_large_1497280459.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203471_large_1557526665.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/114319724_large_1525123666.jpg',
      },
    ],
  },
  {
    route_id: 11,
    route_name: "Darkness 'til Dawn",
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.6,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Lumpe to the top',
    ],
    description: `Had I not had to go uphill and out of site to use the bathroom before doing Vertigo last week, I would not have seen this beauty. D.t.D is just around the corner from Grandmother's Challenge in a shaded alcove. This climb stays shaded a long time. No one does the 2nd pitch and no one should want to do it.

    Basically, start on big holds and a crack on the right side of the dihedral. This climb throws it all at you. I had fist jams, hand jams, thin hands, finger locks, side pulls, jugs, a couple of crimps, stems, feet in the crack and feet on small edges (don't worry, if I forgot something, this pitch probably has it). The other really nice thing about this route is that it is fairly sustained and stays interesting. The climb is nice and steep, especially the first section, and it may even stay dry in the rain. If you can't tell by now, I enjoyed the heck out of this climb.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1202177_large_1557525480.jpg',
      },
      {
        url:
          'urlPhttps://cdn2.apstatic.com/photos/climb/115572068_large_1540504567.jpglaceholder',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1201808_large_1557525196.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1205762_large_1557848874.jpg',
      },
    ],
  },
  {
    route_id: 12,
    route_name: 'The Metamorphosis',
    route_type: 'Trad',
    grade: '5.10-',
    rating: 4.6,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Wind Tower',
      'Wind Tower - S Face',
    ],
    description: `This is a total classic. Do either The Yellow Traverse or Diffraction to lead into this climb.

    The climb begins in a right-facing dihedral halfway up the south face of the Wind Tower. Place pro, then pull left out of this dihedral onto a face with some left-trending jugs, crank onto these jugs (poorly protected .8) and up to two bolts. From the bolts, begin a rightward, rising traverse on flakes and jugs. The crux comes at a pull past a small, A-shaped flake with little in the way of feet. This move is well-protected with a good stopper. Here's the scary part. After pulling the crux, move up and thirty feet right on good holds to one last move onto a left-trending ramp. This move is solid and insecure 5.9 with your last piece thirty feet below you. You can get a small stopper in at this move, yet it would barely hold your body weight. This route is steep, exposed, spicy, and a hell of a lot of fun.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1205755_large_1557848867.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/112803161_large_1494315993.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1205753_large_1557848865.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/112803160_large_1494315992.jpg',
      },
    ],
  },
  {
    route_id: 13,
    route_name: 'The Green Spur',
    route_type: 'Trad',
    grade: '5.9+',
    rating: 4.5,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Lumpe to the top',
    ],
    description: `This is my favorite 5.9 route in Eldo. It is a great line up a cool dihedral and the moves are very fun and interesting. The crux is thin-fingers liebacking or stemming in an interesting corner. The route begins in a corner about 20 feet to the right of Grandmother's Challenge. It is also about 50 feet left of the West Chimney.

    P1. Start by climbing a short, 40-foot pitch up an easy corner to a belay ledge.

    P2. The next pitch is for real. Start by using two parallel cracks about three feet apart until the right crack becomes too thin to use. Climb the left crack through a wide section until it becomes a smooth dihedral with thin fingers in the back. Climb the dihedral until you are just under the roof and then step across the face to the right onto a blunt arete that leads to the top. After the lip at the top there is about 30 feet of easy runout to a large rappel bolt on the Red Ledge.

    From here, climb the top half of Rewritten to the top, or make one double-rope rappel to the ground. It doesn't get any better.

    Per tooTALLtim: If you continue above P2: from the P2 belay, move up and left along Red Ledge. Belay where Grandmother's Challenge ends, in the alcove next to the BIG boulder, by the tree.

    P3: Climb up a large block to a short hand crack, towards the blocky roof. The exposure here is great. Hand traverse under the roof, and pull over on bomber finger locks (5.8).

    P4: Continue up the beautiful corner to the top of Rebuffat's Arete. (5.8) You might see some people on the arete climbing Rewritten.

    P5: Now join with Rewritten's face climbing to the top. (5.5)"`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203187_large_1557526346.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203202_large_1557526373.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105942936_large_1557952733.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203200_large_1557526371.jpg',
      },
    ],
  },
  {
    route_id: 14,
    route_name: 'Alice in Bucketland',
    route_type: 'Trad',
    grade: '5.8+ R',
    rating: 4.6,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower One',
    ],
    description: `This exciting route presents a definite crux at the roof on the second pitch, but remains sustained the whole way. Both pitches are pretty spicey. Nearly all of the holds are huge, and the climbing is vertical or overhanging. Do any route that reaches the Upper Ramp to get to the base; the climb would make a fitting finale for Rosy Crucifixion. A huge cave/overhang sits near the upper part of the ramp, just left of the upper pitches of Ruper; above it is a pocketed wall and another prominent roof band. The route starts at the right side of the cave.

    Pitch one: Climb up an easy ramp to the right margin of the overhang, which at this point is a blind corner. Place protection overhead in the curving roof/dihedral and feel around the corner for the proper place to get established on the face (scary 5.8). An astute runout back to the left will be necessary to prevent horrendous rope drag. Follow a crack/seam steadily up left, with reasonable protection, and belay down and left from the apex of the upper roof (variable number of pins). Don't be fooled (as I was) by the line of huge holds just above the cave; they lead to some very dangerous climbing if one is to stay on route.

    Pitch two: Traverse up and right from the hanging belay, and turn the roof (crux, small gear at your feet) right of its apex, where it begins to bend down to the right. Work up and slightly left over a steep wall into an obtuse left-facing corner which provides an exciting finale; belay above. A considerably more mellow fifty feet finds the top (shared with Ruper). Go west to the rappel (described under Ruper, Yellow Spur, etc.) or east to the east slabs descent.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105939121_large_1557952187.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106416392_large_1494106826.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106426650_large_1494107604.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107952416_large_1494253020.jpg',
      },
    ],
  },
  {
    route_id: 15,
    route_name: 'Blind Faith',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.5,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Bastille',
      'The Bastille - W Face',
    ],
    description: `This exquisite crack can be found in the middle of the West Face of the Bastille. Considering that the first ascent was done free solo by Jim Erickson in 1972, the name seems to have some true meaning.

    The route is not hard to recognize, it is a hand-sized crack that runs diagonally up and right for about 100 feet. Start P1 by jamming up an easy crack to some more technical moves in the middle of the pitch. Eventually move past a short chimney and the crux becomes quite apparent. The crack splits into two options, the left crack is solid hand size and easily swallows pro as it ascends an overhanging bulge (5.10a). The right hand crack is a very thin crack that probably takes very small TCUs or nuts as it ascends the same bulge (5.10c). Belay on a ledge right after pulling the bulge. This entire pitch has some exquisite climbing that is never desperate and easily protectable. Good stuff.

    P2 starts out by ascending a blocky bulge that is more overhanging than it first appears (5.9). Make off balance move to pull over a bulge. The pro is good and the pitch gets easier as it scales a wide chimney to the summit (5.6). This is a short but really good quality route. I recommend climbing it once first before trying it in the original style, though.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106416404_large_1494106828.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107229064_large_1494174876.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/111744390_large_1494302459.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1202916_large_1557526101.jpg',
      },
    ],
  },
  {
    route_id: 16,
    route_name: 'Hair City',
    route_type: 'Trad',
    grade: '5.9+ R',
    rating: 4.6,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Bastille',
      'The Bastille - W Face',
    ],
    description: `I like this route even better than the adjacent and more popular West Buttress. It is steep, not too hard, and on positive holds the whole way. The first pitch has a reputation for being runout; this is only mildly true. The hard moves have good pro, and even the parts that look runout from down below have hidden stopper placements. There are multiple variations to the route above the 2nd bolt.

    The first pitch is long, has a couple 5.9 moves at the start, and several more .8+ moves. 130 feet.

    The second pitch climbs a steep .9+ crack over a bulge on positive holds. Heads up on this section though as it climbs loose unprotected rock up to the crux move which is well protected with a single stopper. Above the crux there is runout but cool .7 face climbing to the top. 180 feet. Great route.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203651_large_1557526857.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/109066287_large_1494337902.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106788309_large_1494140577.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107624948_large_1494201018.jpg',
      },
    ],
  },
  {
    route_id: 17,
    route_name: 'Perversion',
    route_type: 'Trad',
    grade: '5.9',
    rating: 4.6,
    pitches: 3,
    location: ['Colorado', 'Boulder', 'Eldorado Mountain', 'Mickey Mouse Wall'],
    description: `Possibly one of the all time classic routes of its grade, Perversion fires up the central tower in three pitches of glorious climbing on some of the best rock in the Front Range. Below the central tower is a large block - climb up left on talus around the block and then over to the right side for a cozy belay that looks up a system of left facing dihedrals all the way to the top.

    P1. Start off on the right side of the block in a rough finger and hand crack. This is largely 5.7/5.8 until just before the next ledge where the line kicks up a bit of 5.9 on very good gear. Get to the ledge and move right 15 feet to the base of the dihedral. 75 feet, 5.9.

    P2. At the ledge (with a tree), scramble right to a point below the shallow dihedral. Fire up the left dihedral with 2 fabulous cracks for 25 feet. Traverse to the right on large blocks about 10 feet to another dihedral with a good crack. Cruise up this crack and then continue over broken rock with good pro to a nice belay ledge. There are two large bolts about 10 feet right of the crack. 150 feet, 5.8.

    P3. Continue up fabulous climbing in the corner with solid 5.8 move separated by many excellent rests. Head for the monstrous roof and swing out right on jug-o-rama holds with bomb-proof gear in the corner at 5.6. 120 feet, 5.8.

    Descent: downclimb to the left (east & north towards trees) then back (west) to the large notch (skip the first, smaller notch). Make an 80 foot rap to slings, then a 60 foot rap to a large tree, then a final (third) rap 60 feet right to the base of the climb.

    Per Carl Schaefer: alternatively you can rappel hard right to reach another bolted anchor. From there, rappel down to the top of P1 and a tree with cord and a quicklink (check the cord!), and rappel once more down to the base of the route.

    The original descent info mentioned slings for the 2nd rap, which is now bolts, but they'll be an awkward traverse away if you rap straight down from the top, hence the suggestion to veer to the right.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105997383_large_1558388974.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106056443_large_1558468805.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1206405_large_1557849565.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106930928_large_1494151979.jpg',
      },
    ],
  },
  {
    route_id: 18,
    route_name: 'North Face',
    route_type: 'Trad',
    grade: '5.6 R',
    rating: 4.4,
    pitches: 5,
    location: ['Colorado', 'Boulder', 'Flatirons', 'South', 'The Maiden'],
    description: `Be warned: This is one of the weirdest routes you will ever do....

    From the low point of the Maiden, hike up along the base of the south face. Drop your packs below the obvious Crows Nest below the West Overhang, and pick your way through the huge boulders to the top (west end) of the crag.

    Climb the initial west-facing wall to a belay at the top about 40 feet up. There is little or no protection on this lead, and the difficulty is around 5.4. At this point, the summit of the Maiden will be due east, and actually right about the same height that you are at. From here, downclimb the slab to the Crow's Nest. This is essentially a typical Flatiron slab with sometimes minimal protection. The leader will be on toprope, but the second may appreciate some pro. From the first belay, the angles look very strange, and it is difficult to tell how steep things are. Belay from the bolt at the Crow's Nest.

    The next two pitches are tricky. I downclimbed the North Face a little bit and worked east. Once I was below the obvious tree, I climbed through bulging wall which is the crux. This was all done with basically no pro, but try to protect your second on the downclimb and traverse. Belay on the ledge near or at the tree. From here, climb up past the tree and a short corner to another ledge, and follow the wildly exposed ramp east and down until an obvious weakness allows you to hop up to a belay niche. Rope drag can be amazing on this pitch. From here, hop up onto the east face, and head for the surprisingly large summit area.

    Rap to the Crow's Nest (!!!) and then down the south face to your packs....`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107342922_large_1494182976.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1204088_large_1557527231.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113210148_large_1498357854.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106533196_large_1494117879.jpg',
      },
    ],
  },
  {
    route_id: 19,
    route_name: 'Long John Wall',
    route_type: 'Trad',
    grade: '5.8',
    rating: 4.4,
    pitches: 4,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part B - Long John to Verschneidung',
    ],
    description: `Start to the left of a large overhang and just right of a large, right-facing dihedral. Watch out for poison ivy near the start.

    P1. Start up the easy ramp, and grovel up left through an awkward slot. Climb a thin slab with marginal small pro, traverse back right, and continue up a crack to a decent ledge (7).

    P1 variation 1 (5.8). Start on Break on Through, 20' to the right. Climb the layback corner, go up a ramp, turn the overhanging corner on the left, and traverse left to the first belay on Long John Wall. Recommended.

    P1 variation 2 (5.7). Start on Ignominity, 20' to the left. Climb a right-facing corner, pass a bulge, and traverse right to the first belay on Long John Wall.

    P2. Ascend the great finger crack (8) to a small roof; continue up to a large ledge, traverse left 15', and belay below a wide slot.

    P3. Climb the slot, then continue up the brilliant dihedral to the crux--a finger/hand crack in a corner with excellent stemming. Belay on another large ledge by a tree.

    P4. Finish the short and easy (5) dihedral to the summit, or if you're in a hurry, rap off a tree 10' to the left.

    P4 variation (5.8). Traverse right about 20' and climb up a corner with some old pins. Then move right, and climb past a wide crack to the top.

    You can do both P4 variations if you have the time, since the descent takes you back to the starting ledge for this pitch.

    Descent: downclimb a gully to the north of the finish back to the same belay ledge for P3. Do 2 rappels from rings (the tree anchors have been removed) with a 60m rope down to a broken ledge, and then follow the ledge uphill to the trail. Angle the second rappel to the left and watch the ends of the rope. Be VERY careful if you only have a 50m rope, but you can make it with some downclimbing.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106796066_large_1494141152.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105953077_large_1558029292.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/108458238_large_1494284040.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107824232_large_1494213751.jpg',
      },
    ],
  },
  {
    route_id: 20,
    route_name: 'Xanadu',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.5,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part D - Xanadu to Pony Express',
    ],
    description: `A thin, one pitch corner which felt harder to me than other 5.10a pitches in the area because it is more sustained. Hike up the West Ridge trail to a point where it levels out, just past a prominent gully (and shortly before the routes Purple Haze and Chockstone). Identify 2 thin, opposing corners which start 40 ft. or so above the ground, lean to the right, and contain a couple of small trees. Xanadu takes the right of these two corners (the left facing one); moving into the left corner in the vicinity of a small tree is a similarly graded variation. Wander up nondescript, slightly runout rock and about 5.8 to gain the dihedral, and climb the beautiful thin crack in the back to a broken ledge and a 2-bolt anchor. You can rappel with a 60 meter rope to the right (uphill of the rope), but watch the ends. With a 70 you can rappel or lower more comfortably although there still won't be much rope to spare, if any.

    2019 edit: most of the chalk these days seems to be in the left corner up high.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106719449_large_1494134986.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106719448_large_1494134986.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1200943_large_1557524620.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106978835_large_1494155820.jpg',
      },
    ],
  },
  {
    route_id: 21,
    route_name: 'Werk Supp',
    route_type: 'Trad',
    grade: '5.9',
    rating: 4.4,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Bastille',
      'The Bastille - N Face',
    ],
    description: `The only reason I give this 3 stars is because the line is disjunct and it doesn't really go anywhere. However the climbing is excellent, certainly as good as many other 4 star routes. The route starts near the NE corner of the Bastille, right off the road and about 50 feet east of the Bastille Crack. Walk just past the first steep buttress (March of Dimes Buttress--about 50 feet high) that lies on the road, 100 yards or so west of the parking lot. The route starts just right of a 40 foot, large rotten dihedral formed by the west edge of March of Dimes Buttress.

    P1. Climb up flakes and blocks for 25 feet, then move up and right (tricky pro) to a lieback, right-facing flake that leads to a stance at 50'. Follow a beautiful thin crack that jogs gently back and forth, sometimes taking the appearance of a shallow dihedral. Belay from bolts on a sloping ledge about 110 feet up. I recommend stepping left to the ledge 5 feet or so before the crack ends (especially if your second isn't solid--the bolts are not on top of the crack), (5.8+).

    P2. Traverse 15 feet left across the ledge to an obvious, right leaning crack/slot (moving the belay if desired). Climb that for 50 feet (crux, with perfect hand-jamming and awkward feet). Belay on another large ledge. Above is the beautiful 5.10c finger crack of March of Dimes; climb that, or traverse off east. Be very careful on the descent; we got cliffed and ended up rappelling from a tree. Possibly go quite a ways east.

    Note: many people do just the fantastic first pitch. From the anchor at the top of P1, you can rap to the ground with a 70 meter rope. With a 60, you'll have to do a little downclimbing, which could be a little sketchy. With a 60 you can rap climber's left to the top of the first pitch of March of Dimes and then again from there to the ground. Be aware of parties climbing up, if you rap directly down the route--this is a very popular single pitch, and, if you rap left of the route, be aware of, and stay out of, the loose chimney/gully between Werk Supp and the March of Dimes buttress.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106100263_large_1558647857.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106237862_large_1494090597.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106968903_large_1494155001.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/114445748_large_1528132315.jpg',
      },
    ],
  },
  {
    route_id: 22,
    route_name: 'Grand Giraffe',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.4,
    pitches: 5,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower One',
    ],
    description: `P1. This route starts from the top of the lower ramp, the same place as Ruper. Climb the obvious crack up and gently trend right until you reach a crack with two pins that parallels the large, sloping Rover dihedral, 5.9+.

    P2. This is an easy pitch (5.4) which follows a ramp and wide crack leftward to the base of the dreaded, right-facing corner of the Grand Giraffe (which breaches the roof left of Art's Spar).

    P3. This is the crux, and the difficulties start immediately. The first moves are protected by an ancient piton. At the start, you can chimney the crack with your back against the left wall, but soon the footholds on the right disappear. If you are a weenie like me, place a big Camalot above you at this point, which gives you a toprope for the crux. Struggle up through the crux and place your other big piece.

    Although the upper part of this crack looks intimidating, I found the crux to be the first 15'. Near the top you have to climb the main part of the overhang, but there is good pro and holds here. Belay at the Upper Ramp.

    From here, the route continues above the Upper Ramp via two more fun pitches (5.7, but mildly runout). Cross the upper ramp to the upper end of a huge cave, 4th class (lower end is the start of upper Ruper and Alice in Bucketland). Downclimb the ramp towards the left corner of a large cave.

    P4. Climb up alongside the shallow, right-facing corner, then make your way to towards a pink alcove with a single bolt.

    P5. The final pitch angles up and left, crossing a roofline at its left edge then continues up and right to the saddle between T1 and T2.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105942898_large_1557952714.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/112051821_large_1494318657.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/105942821_large_1557952703.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/118052433_large_1573951640.jpg',
      },
    ],
  },
  {
    route_id: 23,
    route_name: 'Hand Crack (aka White Lightning)',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.4,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part D - Xanadu to Pony Express',
    ],
    description: `Imaginative name, but a fine pitch with clean, varied jamming and plentiful protection. The crux, in fact, is fingers - but the steep hand jamming above is quite good.

    The Hand Crack is located in an enclave of the upper West Ridge called the Cirque of the Cracks (a fittingly vague name since the West Ridge comprises 2000 feet of cirques and cracks). Fifty meters uphill from the Quartzite Ridge, locate an alcove with several obvious, chalked crack lines. Look for a steep hand crack (the Hand Crack, yes) about thirty feet right of a prominent, serrated, corner crack (the Duh Dihedral) and immediately right of a clean, left-facing dihedral (Terminal Velocity). Heavy chalkage marks the way, especially around an overhanging section of 2" crack forty feet up.

    The route appears unremarkable and discontinuous from below, but does provide some quality action and varied climbing - slabby fingerlocks, steep hand jams, an arete slap here and there. Jam the Crack through a tour of sizes and belay in a comfortable chimney below a loose ledge or traverse left to a slung tree atop Terminal Velocity (a few feet left/north). Either way, mind the abundant loose rock on these ledges. Rappel Terminal Velocity.

    Rossiter calls the FA Unknown; can any historians (or seniors) out there set the record straight? Important minutia.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113782187_large_1509730450.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/113439441_large_1502121225.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107854941_large_1494215697.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107854955_large_1494215700.jpg',
      },
    ],
  },
  {
    route_id: 24,
    route_name: "Friday's Folly",
    route_type: 'Trad',
    grade: '5.7',
    rating: 4.4,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Flatirons', 'North', 'Third Flatiron'],
    description: `This is a great single pitch route on the backside of the Third Flatiron. Be aware that it is very close to the rappel route and it may be an unwise idea to climb this route if people are descending from the summit.

    The most fun way to reach this route is to climb the East Face, and rap down the back of the Third. This will deposit you at the bottom of Friday's Folly. Climb up the obvious crack on the corner until it is possible to step around the corner to the right (after about 10 feet.) From here, follow the cracks and holds up the vertical face with great exposure. Belay at one of the two eyebolts 70 feet off the ground.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/111581603_large_1494295864.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106268150_large_1494092952.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1206787_large_1557849979.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1201840_large_1557525219.jpg',
      },
    ],
  },
  {
    route_id: 25,
    route_name: "Touch 'N' Go",
    route_type: 'Trad',
    grade: '5.9-',
    rating: 4.3,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower Two',
    ],
    description: `This is a great 1-pitch climb, often used as a start to the Naked Edge or Anthill Direct, and even more often done on its own. The climb begins just down below the prominent, chalked-up "roof routes", right where the roof begins. If taking the trail that passes C'est La Vie and Genesis, you'll discover the start after rounding a corner and coming out of some trees.

    Begin by hand traversing under a small roof and go around it on the left (first crux, #2 Friend). You can also thread a runner or large wired nut through a hole to protect this crux. Turn the roof, and continue up thin opposing flakes to a ledge/groove. You can set up an optional belay here from good gear. This is a good idea if you expect your second may have trouble at the crux roof.

    Follow the groove up left to a thin, obtuse dihedral and climb than with perfect fingerlocks to a bolted belay. The second crux comes at a bulge near the top of the dihedral. You can protect this with a small cam in a pod in the corner.

    Descent options:

    * A double-rope rappel from the top anchor.

    * A single rappel with a 70m rope from the top anchor will just barely make it to the ground.

    * A single-rope rappel from the top anchor down to the anchor below the dihedral (top of Scratch and Sniff), and a second single-rope rappel from there. The stance at the Scratch and Sniff anchor is a little awkward and a bit to the left of the top anchor.

    * Traverse over to the top of the second pitch of Redguard, and do two single-rope rappels from bolts/chains down Redguard.

    Variations: all three dihedrals just to the right of the start are climbable at similar grades with less-than-ideal pro; a great variation, called Bolting for Glory, is to climb the first half of the route to the groove, and then continue straight up past 4 bolts on 5.10a face climbing. Traverse left at the top to reach the belay.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203220_large_1557526391.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203243_large_1557526418.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203245_large_1557526421.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203244_large_1557526419.jpg',
      },
    ],
  },
  {
    route_id: 26,
    route_name: 'Bitty Buttress',
    route_type: 'Trad',
    grade: '5.8+',
    rating: 4.3,
    pitches: 3,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'Bitty Buttress'],
    description: `This is a great line up the exposed and interesting buttress.

    P1. Start at the low point by a fallen tree, and head straight up the crack systems. The exact route is probably the line of least resistance, but many variations are possible. This is the longest pitch and the best of the three. Belay on a big ledge.

    P2. Take the corner to the right, and crank up the large dihedral.

    P3. Continue up the right-facing dihedral. The technical crux occurs after #2 Friend placement. This is your last placement for the next 15 feet. Move up through the thin, balancy crux, and finish left on a large ramp.

    It is another Ament classic.`,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1202155_large_1557525457.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107211314_large_1494173586.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203304_large_1557526491.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/119156255_large_1593889989.jpg',
      },
    ],
  },
  {
    route_id: 27,
    route_name: 'Wind Ridge',
    route_type: 'Trad',
    grade: '5.7',
    rating: 4.1,
    pitches: 4,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Wind Tower',
      'Wind Tower - SW Face',
    ],
    description: `Original start (5.6):
    Start at the left end of the tower and next to a tree at the base of the obvious arete. Go left up the obvious, wide gully, and traverse right onto the face. Once you top onto the flake go around the corner onto the west face. From this point on, the climbing eases and follows a crack with good holds to a large ledge where a belay can be set up.

    Alternative start (5.8):
    Pitch 1: start out around left corner of the tower (northwest), and go up awkward an awkward flake with good pro. This is the 5.8 start. Head right onto west face and follow this crack and nice holds straight up the face to big ledge and belay. Alternate start: go up left of flake for 20 feet and traverse onto face.

    Pitch 2: go right on small ledge to larger crack with a powerful crank to get into the crack, and follow it as it zig-zags and gets thinner then much wider...then to offwidth section ... and up to big ledge with small cave for belay (pro in small cave for belay). You can traverse off here leftward on 4th class terrain.

    Pitch 3: surmount an amazing roof with various contortions to get situated on a flake. Aliens are helpful here. Proceed up on slightly loose rock to a tree above another bulge. Belay here. Caution: there are lots of loose rocks here.

    Pitch 4: traverse leftward on an amazing but easy walkway. Angle down to a notch, 80 feet. Long slings are useful. Find a 2 bolt rappel station and rappel. Scramble back to the base.
    `,
    photos: [
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/107242874_large_1494175777.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1202154_large_1557525456.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/106033333_large_1558463027.jpg',
      },
      {
        url:
          'https://cdn2.apstatic.com/photos/climb/1203700_large_1557526898.jpg',
      },
    ],
  },
  {
    route_id: 28,
    route_name: 'West Buttress',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.3,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Bastille',
      'The Bastille - W Face',
    ],
    description: `One of the best 5.9 routes in the canyon, with varied and funky climbing. Scramble up below the west wall of the Bastille a little ways to a level section below a large block. The bolts on Hair City should be directly above.

    P1-place pro and traverse 10 feet straight left above a bulging wall (this bulging wall is the direct 5.9+ start, protected by a bolt, not to be confused with the direct variation above) to a thin crack with a couple of pitons. Climb it for about 10 feet (crux, sandbag), and make a confusing traverse left to a stance and then continue up easier but steep and runout rock to the belay anchor.

    Instead of traversing you can continue "straight up the crack at 5.10", but this is hard to initiate unless you step left first and then back right to the crack, and done that way it's easier than the move by the pitons. (120 feet).

    P2-head up and right to the crack formed by a large detached flake/pillar. Climb that (5.9 at a bolt) as it widens to a chimney and belay on top at more bolts.

    P3-head up and left to a shallow chimney that offers a 5.7 passage through a roof band. Belay on the next ledge or continue easily to the top of the Bastille. The preferred alternative is to tackle the overhang directly by continuing on Hair City.
    `,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/111990759_large_1494315325.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105999534_large_1558389288.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/115420051_large_1539540978.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105874695_large_1557936158.jpg',
      },
    ],
  },
  {
    route_id: 29,
    route_name: 'Anthill Direct',
    route_type: 'Trad',
    grade: '5.9- R',
    rating: 4.3,
    pitches: 5,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - S Buttress',
    ],
    description: `This is an often-overlooked, long route with very good climbing. The run-out is only "5.6", though it feels a bit harder--the rest is well-protected.

    P1. We started on Touch 'N' Go, which apparently is more common, as we had heard that the original first pitch was mediocre. [Edit: many commentators below are saying that it's worthwhile, as well as easier than Touch 'N' Go.]

    P2. Surmount a small roof (5.8-) to get off the rotten band and off the belay ledge (or bypass the roof 15' up and left). Then follow a crack up and right to an obvious roof. Crank through the roof at 5.8 (great pro) and belay 10' higher. 130'.

    P3. Head up and left on pocketed rock in the vicinity of a black water streak. Pay attention to find the easiest climbing; this is the runout 5.6. Your second should be solid for this section. Belay on a small ledge.

    P4. Climb around to the right, passing several fixed pitons, and head for the arette. The turn back to the left, now heading for the bottom of the large roof. Belay just beneath the roof.

    P5. From the belay, move right and up through the roof where it turns more into a dihedral. Several layback moves get you through it at 5.9- with great pro. Climb easy slabs to the top.

    In either case, descend the vast 4th-class slab to the NE, aiming for a cairn on an outcrop. Go left below it into a 4th-class gully, and hike around to the trail from the bottom of it.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106295800_large_1494095334.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1203222_large_1557526393.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1206779_large_1557849971.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106391329_large_1494104380.jpg',
      },
    ],
  },
  {
    route_id: 30,
    route_name: "Horse d'Oeuvre (aka Pony Express P1 to Zip Code)",
    route_type: 'Trad',
    grade: '5.9',
    rating: 4.3,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part C - Pony Express to Long John',
    ],
    description: `This is a great combination of Pony Express and Zip Code that keeps the grade to 5.9. It includes a wild traverse to link the two pitches. One of the better and longer 5.9 pitches on the West Ridge.

    Climb the first pitch of Pony Express up to the small, right-facing corner near the top of the pitch. Instead of traversing right to the anchors make a wild hand traverse to the LEFT along a big flake. The flake is solid. This will take you into Zip Code just above its crux move. Now finish on the great upper part of Zip Code. There is a fixed anchor at the top of the pitch. If you have a 60m rope, you can rappel down the upper pitch of Pony Express to the bolted anchor above Mesca-Line. One more rap from here to the ground. Or, with a 70m rope you can barely make it back to the base of Zip Code. Watch your ends!`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116566460_large_1551280936.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/119405984_large_1597760746.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116566455_large_1551280769.jpg',
      },
    ],
  },
  {
    route_id: 31,
    route_name: 'Dementia',
    route_type: 'Trad, TR',
    grade: '5.10a',
    rating: 4.3,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'Happy Hour Crag'],
    description: `Begin beneath the obvious left leaning V- slot roof near the middle of the crag. An awkward mantle brings you into the short but technical crux - the narrow V-slot with a thin fingers crack. Good smears and bomber fingerlocks through the crux. Solid 10a.
    Small nuts and cams up to #1 Camalot. Small cams for the business. A traverse out the top leads to chain anchors. Long runners to avoid rope drag if toproping.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/113597874_large_1505706120.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/107329742_large_1494181979.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/107975175_large_1494254632.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1206529_large_1557849707.jpg',
      },
    ],
  },
  {
    route_id: 32,
    route_name: 'North Face Center',
    route_type: 'Trad',
    grade: '5.7+',
    rating: 4.2,
    pitches: 2,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'Cob Rock'],
    description: `This is 2 pitches.

    P1. Start at base of North face between 2 huge boulders, go up crack and after 50 feet continue in crack system to the right....keep going until you reach a small pillar just over the right edge of a huge right facing corner...belay here. (Eds. beware of a huge, loose block.)

    P2. Head up hand crack that curves right (tricky crux, flared jams), then head straight up to summit. You can avoid this crux finish, and from the belay, go left up huge V-slot (5.0) to summit, but why?`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106244636_large_1494091084.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204483_large_1557527605.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105800482_large_1557857303.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106223145_large_1494089486.jpg',
      },
    ],
  },
  {
    route_id: 33,
    route_name: 'Deviant',
    route_type: 'Trad',
    grade: '5.10a',
    rating: 4.2,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Eldorado Canyon SP', 'Cadillac Crag'],
    description: `This route is to the left of the crack on P2 of Gonzo. There are 2 ways to do this route. One way is to start the 2nd pitch of Gonzo and move left where this crack starts. Otherwise, walk left around the corner and uphill from Gonzo and begin on a crack that is just to the left of a wider crack/slot, leading to a tree. Move right before reaching the tree and access the crack via the obvious traverse.

    I usually don't get this pumped on a 9, and I suppose that's where it gets the "+". Once you start into this left-leaning crack, plug and chug. This crack is nice and sustained. I couldn't resist the many stopper placements and drained some energy placing them even though they were within a couple feet of good cams. I love bomber stoppers. If this route were longer, I would give it another star.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204156_large_1557527301.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1202291_large_1557525575.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1203463_large_1557526658.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106252147_large_1494091649.jpg',
      },
    ],
  },
  {
    route_id: 34,
    route_name: 'Calypso',
    route_type: 'Trad',
    grade: '5.6',
    rating: 4,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Wind Tower',
      'Wind Tower - SW Face',
    ],
    description: `Classic route. Start just left of the huge boulder. Move up and right, then cruise up the obvious crack until you get to the roof. Move right around the roof and carefully protect this for you and your second, or up and left (Calypso Direct - 5.8). Belay from two bolts at the nice ledge.

    You can rappel down 100' or continue up the crack just left of the belay station to another ledge. There used to be 3 old pins above the P1 anchor. These have apparently fallen out over the years. Exit from the top carefully via the sloping ledge running up and left.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105935643_large_1557951647.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106287952_large_1494094655.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116805804_large_1556568644.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108164008_large_1494266828.jpg',
      },
    ],
  },
  {
    route_id: 35,
    route_name: 'Icarus',
    route_type: 'Trad',
    grade: '5.6 R',
    rating: 4.2,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Redgarden Wall',
      'Redgarden - Tower One',
    ],
    description: `This is a great beginner lead, but it is a little runout on the last pitch of 6. The final pitch (same as last pitch of Yellow Spur) is spectacular, however. Start with Swanson Arete start up the West Chimney, but continue to traverse right along the Red Ledge to a right-facing dihedral. Follow the dihedral until it ends, then traverse right on an exposed and thin face. Continue up a good crack. The last pitch ascends a uniquely textured arete with a great view.
    `,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/107929370_large_1494251324.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1202649_large_1557525886.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204096_large_1557527248.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1201184_large_1557524756.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/111931770_large_1494312198.jpg',
      },
    ],
  },
  {
    route_id: 36,
    route_name: 'Animation',
    route_type: 'Sport',
    grade: '5.8',
    rating: 4.1,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Boulder Canyon',
      'Animal World',
      'Lower Animal World',
    ],
    description: `This description & its comments are combined. Since this was the earlier contribution, Jon Cannon's was merged into this one.

    This is a great warm-up or a good lead for 5.8 climbers (it's "Turbo Bitchin'," according to a friend of mine). Jugs are plentiful on this vertical face. The route is on the Lower Animal World cliff and ascends an obvious line of bolts in the middle of a tall vertical face. The route lies just right of 'Joint Venture.'

    This route is located on the wall facing west in the West Buttress area. Good holds are plentiful for the first 60 feet or so of this route, and then start to thin out somewhat. Balance and footwork are paramount for the final series of moves, where the wall bulges out slightly. It is a very fun route, with thoughtfully-placed bolts.

    Eds. Per Richard Rossiter: this should not have the name Jaycene's Dance listed as an AKA.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106242753_large_1494090958.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106008344_large_1558390537.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106658484_large_1494129547.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/109496626_large_1494351950.jpg',
      },
    ],
  },
  {
    route_id: 37,
    route_name: 'Wrinkles in Time',
    route_type: 'Trad',
    grade: '5.9-',
    rating: 4.2,
    pitches: 2,
    location: ['Colorado', 'Boulder', 'Upper Dream Canyon', 'Dream Dome'],
    description: `Wrinkles in Time is one of the best (and most moderate) routes that Dream Canyon has to offer. Granite reminiscent of Yosemite, thoughtfully placed bolts, and cool exposure combine to make this a true classic. The route tackles the nose of the Dream Dome buttress in 2 pitches.

    The first, beginning at the low point of the formation, climbs a large flake, a short fingercrack (crux), and a long section of juggy face climbing. After ~100 feet, the leader reaches a comfortable stance with a 2-bolt belay.

    The second pitch, shorter and easier at ~50 feet and 5.7, climbs straight up from the belay and bypasses a short overhang on the way to another 2 bolt anchor.

    Those with a 60 meter rope can make 2 rappels to the ground from here. Otherwise, top out and descend the gully.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1205678_large_1557848788.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204765_large_1557527903.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/111882992_large_1494309423.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1205675_large_1557848785.jpg',
      },
    ],
  },
  {
    route_id: 38,
    route_name: 'East Slab',
    route_type: 'Trad',
    grade: '5.6',
    rating: 4.1,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'The Dome'],
    description: `This can be done in 1 or 2 pitches.

    Start up a small dihedral (5.6) or take an easier start to the right (5.5). Follow the crack over a bulge, then onto the large face. Keep following the right crack to the roof. Either turn the roof at a dihedral to the left (red), which is the same finish to East of the Sun or take a crack straight up from the route.

    Descent: walk off to the right side of the Dome.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106229277_large_1494089937.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106033316_large_1558463025.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1202213_large_1557525508.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105796596_large_1557856763.jpg',
      },
    ],
  },
  {
    route_id: 39,
    route_name: 'North Face',
    route_type: 'Trad',
    grade: '5.6',
    rating: 4.1,
    pitches: 3,
    location: ['Colorado', 'Boulder', 'Flatirons', 'South', 'The Matron'],
    description: `This route is listed in Gerry Roach's book as one of the top ten routes in the Flatirons. It has been a popular route for a long time and is quite historic. To reach the bottom of the climb, hike around to the North side of the Matron and follow a climber's trail up until you reach a large block. Chimney up between this block and the Matron and start on the bench immediately afterwards. The climb is roughly four pitches long - about 1.5 pitches of steep 5.6 on the North Face, and then easy scrambling to the summit on the East Ridge.

    P1: follow a left-leaning crack on the face past a few old rusty pins to a ledge with a small tree (5.6).

    P2: climb the short crack out onto the East Face, and belay on a ledge wherever convenient (5.6).

    From here, the climb is much like scrambling on the East Faces of any Flatiron and is easy, well-featured, and offers little pro. Scramble for a couple hundred feet of 5.2-5.4 to the summit.
    `,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108150295_large_1494265923.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106544641_large_1494118997.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112118419_large_1494322169.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112245024_large_1494328353.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112118424_large_1494322171.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1201899_large_1557525271.jpg',
      },
    ],
  },
  {
    route_id: 40,
    route_name: 'The Young and the Rackless',
    route_type: 'Sport',
    grade: '5.9',
    rating: 3.9,
    pitches: 4,
    location: [
      'Colorado',
      'Boulder',
      'Boulder Canyon',
      'Blob Rock Area',
      'East Blob',
      'Upper East Face',
    ],
    description: `Note: this route is subject to the YEARLY closure for raptor nesting in Boulder Canyon.

    This is a pleasant, multi-pitch sport climb with several very short crux sections and moderate slab climbing in between. Good belay stances and good anchors for belaying and rappelling make this an excellent first multi-pitch climb. The FA party rated this 10b, but for someone of my height (6'2", -1 ape factor), it's 5.9. There are a couple of spots where reach might make a difference.

    Approach: This route is on the left edge of the Upper East Face of East Blob Rock. See the beta photo for Blob Rock. East Blob is the formation on the right of the photo with the pointed top. The route starts a short ways up the gully that runs up and right along the base of East Blob. Walk up the trail to the base of the gully that separates Blob Rock from East Blob. Walk down and right along the base of Blob Slab and up to the base of the Upper East Face of East Blob. The route starts left of a dead tree with no branches, just left of where the wall starts to overhang right off the ground. The tree is just left of a large boulder near the wall. The climb angles left and then back right below a prominent large orange buttress at the top of the cliff.

    The route: Bolt counts and pitch lengths are approximate. Pitches 1 and 2 can be combined. Pitches 3 and 4 might be combined, but there may be rope drag.

    P1: Starting at a thin crack that angles slightly right, climb a steep face and then move left to an easy slab and the belay. 5.9, 7 bolts, 80'.

    P2: Angle left on easy ground to a short steep wall which is climbed at 5.9 if you can reach the hold. The FA party calls this 10b, and it may be that hard if you are short. 5 bolts. 60'.

    P3: There are two variations to pitch 3. Since I was self-belaying, I climbed the left variation on the lead and the right variation when I cleaned the pitch. The left variation is better and goes over a bulge at 5.9 to a slab. The right variation climbs a dirty, right-facing corner and is harder (and is missing the top bolt of the variation (per Áine Huntington). The start, which looks hard, is easy. The top, which looks easy, is hard and involves flared hand jams. Where the variations join, make an interesting 5.9 move into a right facing right leaning corner and up to a ledge. 9 bolts, 90'.

    P4: Angle right on a fun 5.8 slab and up easier rock to the top anchors. 8 bolts, 70'. (Stay right on P4, as the obvious route up the overhung face is not remotely a 5.8)`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/110754661_large_1494353140.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/110754666_large_1494353144.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106298492_large_1494095501.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/113897501_large_1512327840.jpg',
      },
    ],
  },
  {
    route_id: 41,
    route_name: 'College Drop Out aka East Face North Side',
    route_type: 'Trad',
    grade: '5.6',
    rating: 4.1,
    pitches: 6,
    location: ['Colorado', 'Boulder', 'Flatirons', 'North', 'Third Flatiron'],
    description: `If you're like me, the rating scale for slab climbs is different than vertical crack climbs. In other words, a 5.7s Flatiron and Eldo climb are very different in nature. You won't notice a 80ft. runout on the Third like you would on a climb like Icarus (5.6s) in Eldo. With that said, be wary, but not scared off by the serious fall potential rating.

    Start from the East Bench and move straight up. You may also move to the L and belay at a small tree on the edge of the channel. After three pitches, you can either move R of the "U", (7s) or through the middle (6s). After this fork, two more pitches will gain the summit.

    DESCENT: There are three rappels from fixed eye-bolts. A single 50m rope is sufficient; on the last rappel, you may either use a double-rope for the 140ft. mostly free-rappel or traverse [left] on a ledge and rap 72ft. on a single rope to the West Bench.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106994045_large_1494157075.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106051819_large_1558467990.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/115205833_large_1536788337.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/115206437_large_1536788404.jpg',
      },
    ],
  },
  {
    route_id: 42,
    route_name: 'Reggae',
    route_type: 'Trad',
    grade: '5.8',
    rating: 4.1,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The Wind Tower',
      'Wind Tower - SW Face',
    ],
    description: `This is commonly rated 5.8, but the crux is short and it is not really any harder than The Bastille Crack.

    Start from the belay above the first pitch of Calypso. Step right a few feet, then head up the obvious dihedral. Finish over a tricky rock into a ledge with a large rock resting over it.

    You can continue to the summit or traverse the strata to the left to the walkoff of Wind Ridge. The easiest exit is to downclimb (exposed & mostly unprotectable) the ledge to the right, to two bolts on P2 of The Bomb to rappel.

    If you have a 60 or 70m rope, you can rap 90' from The Bomb's P2 anchor, rap from The Bomb's P1 anchor.

    If you rap with a 50m rope, there are a few choices: 1) you can downclimb 15 feet to a tree with slings & another 80 feet to the ground from here; 2) you can traverse to the Calypso anchor with a 30m rap to the ground or 25m rap to the top of the boulder, from which you can downclimb; or 3) you can downlead Boulder Direct or Recon.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1202006_large_1557525358.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106545398_large_1494119067.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1203407_large_1557526585.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108321320_large_1494276020.jpg',
      },
    ],
  },
  {
    route_id: 43,
    route_name: 'Emerald City',
    route_type: 'Trad',
    grade: '5.9',
    rating: 4.1,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Rincon',
      'Rincon - L of Center Route',
    ],
    description: `Get ready for some stemming! This route is on the left-facing dihedral area of Rincon (uphill, and around the corner from the right-facing dihedral area). It follows a nice dihedral for about 90 feet. The crux(es) are stemming moves with not much for hands. At the top, you can walk off, or finish with the last pitch of Over the Hill (recommended), which is a beautiful finger crack that goes right through a pink streak on the wall. The summit is also a walk off to the left.

    Bring your stoppers, RPs, some small TCUs, a #1 cam, and some slings.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106612294_large_1494125364.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106522235_large_1494116811.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106612298_large_1494125366.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106612297_large_1494125365.jpg',
      },
    ],
  },
  {
    route_id: 44,
    route_name: 'V3',
    route_type: 'Trad',
    grade: '5.8',
    rating: 4.1,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Eldorado Canyon SP', 'Cadillac Crag'],
    description: `V3 is a fun and long (~140 feet) pitch that is great for a trad leader trying to get comfortable moving above gear. This climb ascends the dihedral between fin 3 and 4. Scramble up to the top of the large block, and then continue up the clean V dihedral. About halfway up, a 5.9 finger crack moves left out onto the face for 20 feet before returning to the route. Also, at about the beginning of this variation lies a large loose block on this left face - be careful not to dislodge it! The route is long, so make sure to bring enough quick draws and gear to properly protect it.

    Per T G: the historical, large block that used to be 2/3 of the way up the climb was trundled on June 10, 2019 by Steve Levin, Mike McHugh from the park, and members of ACE.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112237501_large_1494328054.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1203182_large_1557526340.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/119326375_large_1596503440.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1202598_large_1557525844.jpg',
      },
    ],
  },
  {
    route_id: 45,
    route_name: 'Empor',
    route_type: 'Trad',
    grade: '5.7+',
    rating: 4,
    pitches: 3,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'Cob Rock'],
    description: `3 short pitches:

    P1. Scramble 10 feet up from a inset face on the lower right hand side of the face, to a flat area with a large boulder to the right (you can also access by slipping underneath the large boulder from farther to the west). Head up the right-facing dihedral to above the boulder, then follow the flake up and right. Belay at the nice ledge to your left.

    P2: Climb another right-facing dihedral with a cold, deep crack. Reach a slot that runs up and left, and belay on a small ledge ~5 feet into the slot.

    P3: You can exit up the slot to the left (5.0), or take the crack running up and right (5.7+ and fun).`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106188858_large_1494086572.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105972967_large_1558385443.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106188851_large_1494086570.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1201522_large_1557524992.jpg',
      },
    ],
  },
  {
    route_id: 46,
    route_name: 'West Crack (aka Star Wars)',
    route_type: 'Trad',
    grade: '5.8',
    rating: 4,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'Peanuts Walls',
      'Lower Peanuts',
    ],
    description: `This is an EXCELLENT 2 pitch or one long pitch up the beautiful Lower Peanuts Wall. Scramble to the far right and up onto the first ledge (lots of loose talus...be careful). Find a large, obtuse corner just below a perfect handcrack in a steep left-facing dihedral (many obtuse corners so make sure you see the obvious handcrack above, some of these other corners have scary pro and are much harder).

    P1. Climb the corner with variable crack and fingers at top to large loose ledge under beautiful hand crack (obvious), 5.7.

    P2. Jam the hand crack for 40 feet and mantle (crux) onto small ledge, continue up V-slot with thin hands another 25 feet to small ledge....turn small roof into short V-slot that takes you to the summit. Belay on summit ridge and descend west until you can scramble down into gully between Lower and Upper Peanuts.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/107697626_large_1494205626.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116839731_large_1557201425.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/113825553_large_1510634697.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108777139_large_1494295887.jpg',
      },
    ],
  },
  {
    route_id: 47,
    route_name: 'Kate Moss',
    route_type: 'Sport',
    grade: '5.10b',
    rating: 4.1,
    pitches: 1,
    location: ['Colorado', 'Boulder', 'Boulder Canyon', 'Black Widow Slab'],
    description: `This route lies on the left-side of the rock, just left of "Consilence". This is a long pitch and a 60 meter rope will not get you to the ground...Eds. a 70 doesn't get you to the ground either. Tie a knot in the end of the rope and have your belayer walk up and left so you can reach the ground. Or trail a rope and rappel off. Nice face and slab climbing is the highlight of this route. There is a fair amount of moss on the route, so those who don't like a little dirt might want to stay away. The route has a alpine feel and with more ascents will get cleaner. A nice warm-up for the the harder routes on this wall.

    Fifteen bolts will get you to a two-bolt anchor with Mussy hooks. A 60 meter rope will not get you to the ground. Be careful!!! A 70m rope MAY reach the ground if your belayer gets to the base of the climb.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108080887_large_1494261676.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105973700_large_1558385546.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105840013_large_1557862136.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1205957_large_1557849064.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204516_large_1557527632.jpg',
      },
    ],
  },
  {
    route_id: 48,
    route_name: 'West Face',
    route_type: 'Trad',
    grade: '5.9+',
    rating: 4.1,
    pitches: 1,
    location: [
      'Colorado',
      'Boulder',
      'Boulder Canyon',
      'Bell Buttress Massif',
      'Bell Buttress - Main Crag',
    ],
    description: `Looking for a well-protected, challenging 5.9 crack to climb? Eldo feeling a bit too greasy in this heat? If so, the shady "West Face" (a misnomer- this is a crack climb for the most part) route on Bell Buttress is for you. Locate this little beauty as the right-most of three crack systems right of Cosmosis. Climb the crack in the shallow right-facing corner, over a roof at a big flake, to a 2-bolt belay.

    Rappel (watch you don't miss the ledge!) or continue up the system to the top of the rock (a bit of wandering around). Solid 5.9!`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/105948957_large_1558028631.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112005032_large_1494315949.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/112005026_large_1494315948.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/108184816_large_1494267933.jpg',
      },
    ],
  },
  {
    route_id: 49,
    route_name: 'Bihedral Arete',
    route_type: 'Trad, Sport',
    grade: '5.10a',
    rating: 4,
    pitches: 2,
    location: [
      'Colorado',
      'Boulder',
      'Boulder Canyon',
      'The Bihedral Area',
      'The Bihedral (Upper Tier)',
    ],
    description: `A spectacular route that climbs the beautiful arete just right of the Bihedral Route.

    Pitch 1: Gain the arete and climb up past three bolts on good holds. Reach a thin crack (small gear) climb the crack angling to the left and climb up past four more bolts to a two-bolt anchor.

    Pitch 2: Angle left up to small tree (with gear), clip a bolt and make cool moves on the exposed arete climbing the cool face/arete past several bolts to a two-bolt belay.

    Rap the route with 2 ropes from pitch 2 or do two rappels with a single 60m rope. This route is going to be a classic.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/114263959_large_1523835121.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116500181_large_1548963172.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/114310281_large_1524971747.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/106243822_large_1494091036.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/116500183_large_1548963242.jpg',
      },
    ],
  },
  {
    route_id: 50,
    route_name: 'Allosaur',
    route_type: 'Trad',
    grade: '5.9 R',
    rating: 4,
    pitches: 3,
    location: [
      'Colorado',
      'Boulder',
      'Eldorado Canyon SP',
      'The West Ridge',
      'West Ridge - part A - Verschneidung to base',
    ],
    description: `Allosaur is located near the bottom of the West Ridge in an area called The Amphitheater. To reach the start of the climb, hike a short ways up the West Ridge trail just pass the bouldering traverse. From there, scramble (4th/lower 5th class) up and right across some slabs to reach an area above the trail. Allosaur starts at a juniper tree at the base of a south-facing wall.

    P1: move up and gradually left toward a fixed pin at 25 feet or so. From there, continue up and left across the face. The pro is runout and small (offset Aliens/RPs). The topo in the Eldo book calls this section .7s, but it may deserve .8s. The first 30 feet are fairly steep and continous. It ends at the band of purple broken rock, 80 feet.

    P2: go up and right into an obvious, left-leaning corner protecting with small to mid-size cams. The 5.8 crux comes at end of corner. This pitch ends at ramp above the corner and below the next corner. The belay takes medium cams, 40 feet.

    P3: go up and right again into left-leaning corner/roof protecting with small cams. The 5.9 crux comes near the end of the corner and is well-protected. This pitch is only about 40 feet and ends at the top of the ridge.

    Rap rings are located about 30' to the west of the top of the route. Rap about 50 feet to a ledge and another set of rings then 100 feet (60m rope highly recommended) to end up about 20 feet left of the start of the climb.

    Allosaur is fantastic. Just beware of the runout first pitch, although the rock is mostly solid and of good quality.`,
    photos: [
      {
        url: 'https://cdn2.apstatic.com/photos/climb/107306975_large_1494180311.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204878_large_1557528027.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1205083_large_1557528228.jpg',
      },
      {
        url: 'https://cdn2.apstatic.com/photos/climb/1204910_large_1557528056.jpg',
      },
    ],
  },
];

const insertRouteList = () => {
  RouteList.create(routeListData).then(() => db.disconnect());
};

insertRouteList();
