// Simplified North American species profiles. Audio adaptations retain their source licenses.
const BIRDS = [
  {
    "id": "cardinal",
    "name": "Northern Cardinal",
    "latin": "Cardinalis cardinalis",
    "family": "Cardinals",
    "cm": 22,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "audio": "01",
    "sound": "Short, sharp chip calls, spaced out in a repeated pattern.",
    "diet": "Seeds, fruit, and insects. A strong bill helps crack seeds.",
    "look": "Males are red; females are warm brown with red accents. Both have a crest.",
    "fact": "Both male and female Northern Cardinals sing.",
    "guide": "Northern_Cardinal",
    "file": "Cardinalis cardinalis - Northern Cardinal XC112830.mp3",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "recording": "Source excerpt 1–13 seconds",
    "audioSeconds": 12,
    "clipLengths": [
      2,
      3.2,
      5.0,
      7.0,
      9.5,
      12
    ],
    "audioVersion": "2f931b4375",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cardinalis_cardinalis_-_Northern_Cardinal_XC112830.mp3",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "robin",
    "name": "American Robin",
    "latin": "Turdus migratorius",
    "family": "Thrushes",
    "cm": 25,
    "habitats": [
      "Woodland",
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "audio": "02",
    "sound": "A flowing string of rounded, musical phrases with little pauses.",
    "diet": "Earthworms and other invertebrates, plus plenty of fruit.",
    "look": "A rusty orange breast, gray-brown back, and darker head.",
    "fact": "Robins often search lawns for earthworms and switch heavily to fruit in fall and winter.",
    "guide": "American_Robin",
    "file": "Turdus migratorius - American Robin XC128490.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "recording": "Source excerpt 46–70 seconds",
    "audioSeconds": 24,
    "clipLengths": [
      2,
      4.6,
      8.6,
      13.0,
      18.5,
      24
    ],
    "audioVersion": "f85c85a9a1",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Turdus_migratorius_-_American_Robin_XC128490.ogg",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "jay",
    "name": "Blue Jay",
    "latin": "Cyanocitta cristata",
    "family": "Crows & jays",
    "cm": 28,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "audio": "03",
    "sound": "A nasal, sliding, squeaky call with a rounded queedle-like shape.",
    "diet": "Nuts, seeds, fruit, and insects. Acorns are a favorite.",
    "look": "Blue, white, and black plumage with a tall crest.",
    "fact": "Blue Jays can imitate hawk calls and carry acorns away to cache them.",
    "guide": "Blue_Jay",
    "file": "Cyanocitta cristata - Blue Jay - XC86756.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "recording": "Source excerpt 0–6 seconds",
    "audioSeconds": 6,
    "clipLengths": [
      1,
      1.6,
      2.5,
      3.5,
      4.8,
      6
    ],
    "audioVersion": "f9315818a3",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cyanocitta_cristata_-_Blue_Jay_-_XC86756.ogg",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "dove",
    "name": "Mourning Dove",
    "latin": "Zenaida macroura",
    "family": "Doves",
    "cm": 30,
    "habitats": [
      "Open country",
      "Gardens"
    ],
    "regions": [
      "East",
      "West"
    ],
    "audio": "04",
    "sound": "Soft, low coos with a gentle, repeating rhythm. Easy to mistake for an owl.",
    "diet": "Almost entirely seeds, usually gathered on the ground.",
    "look": "Soft brown-gray plumage, black wing spots, and a long pointed tail.",
    "fact": "The soft coo belongs to a dove; its wings can also make a whistling sound in flight.",
    "guide": "Mourning_Dove",
    "file": "Zenaida macroura - Mourning Dove XC128006.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "recording": "Source excerpt 20–29 seconds",
    "audioSeconds": 9,
    "clipLengths": [
      1,
      2.0,
      3.4,
      5.0,
      7.0,
      9
    ],
    "audioVersion": "d802fe1e14",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Zenaida_macroura_-_Mourning_Dove_XC128006.ogg",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "chickadee",
    "name": "Black-capped Chickadee",
    "latin": "Poecile atricapillus",
    "family": "Chickadees & tits",
    "cm": 13,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Black-capped_Chickadee",
    "sound": "Scratchy, buzzy calls with repeated dee-like notes.",
    "diet": "Insects, spiders, and seeds, including food cached for later.",
    "look": "A black cap and throat, white cheeks, and a small gray body.",
    "fact": "Chickadees hide food in many separate places and can return to those caches.",
    "audio": "05",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "488e29e7e5",
    "file": "Poecile atricapillus - Black-capped Chickadee - XC114086.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Poecile_atricapillus_-_Black-capped_Chickadee_-_XC114086.ogg",
    "recording": "Source excerpt 71–74 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "titmouse",
    "name": "Tufted Titmouse",
    "latin": "Baeolophus bicolor",
    "family": "Chickadees & tits",
    "cm": 16,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "guide": "Tufted_Titmouse",
    "sound": "Clear, whistled notes, often repeated in short phrases.",
    "diet": "Insects, seeds, nuts, and berries.",
    "look": "A small gray bird with a crest, pale belly, and rusty flanks.",
    "fact": "Titmice often take one seed at a time from a feeder to open elsewhere.",
    "audio": "06",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "d2467e8174",
    "file": "Tufted Titmouse.ogg",
    "author": "G. McGrane",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Tufted_Titmouse.ogg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tufted_Titmouse.ogg",
    "recording": "Source excerpt 82–85 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "wren",
    "name": "Carolina Wren",
    "latin": "Thryothorus ludovicianus",
    "family": "Wrens",
    "cm": 13,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "guide": "Carolina_Wren",
    "sound": "Loud, bright, rolling phrases repeated several times.",
    "diet": "Mostly insects and spiders, with some fruit and seeds.",
    "look": "Rich brown plumage, a bold pale eyebrow, and an often upright tail.",
    "fact": "Carolina Wrens often stay in the same territory throughout the year.",
    "audio": "07",
    "audioSeconds": 15,
    "clipLengths": [
      2,
      3.6,
      5.9,
      8.5,
      11.8,
      15
    ],
    "audioVersion": "063ceb91c2",
    "file": "Carolina Wren, Forsyth, Georgia.ogg",
    "author": "Bollweevil3",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Carolina_Wren,_Forsyth,_Georgia.ogg",
    "recording": "Source excerpt 8–23 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "crow",
    "name": "American Crow",
    "latin": "Corvus brachyrhynchos",
    "family": "Crows & jays",
    "cm": 46,
    "habitats": [
      "Woodland",
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "American_Crow",
    "sound": "A familiar rough caw, repeated with pauses.",
    "diet": "Insects, seeds, fruit, carrion, and other small animals.",
    "look": "Black plumage, a sturdy bill, and a broad fan-shaped tail.",
    "fact": "American Crows are social birds that often gather in large winter roosts.",
    "audio": "08",
    "audioSeconds": 9,
    "clipLengths": [
      1,
      2.0,
      3.4,
      5.0,
      7.0,
      9
    ],
    "audioVersion": "04a3bc48d4",
    "file": "American Crow.ogg",
    "author": "G McGrane",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:American_Crow.ogg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:American_Crow.ogg",
    "recording": "Source excerpt 0–9 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "woodpecker",
    "name": "Downy Woodpecker",
    "latin": "Dryobates pubescens",
    "family": "Woodpeckers",
    "cm": 16,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Downy_Woodpecker",
    "sound": "Short, sharp, high-pitched calls with a slightly squeaky edge.",
    "diet": "Insects and larvae, plus seeds and fruit.",
    "look": "A small black-and-white woodpecker with a short bill; males have a red patch behind the head.",
    "fact": "Its small size lets it forage on thin branches that larger woodpeckers cannot easily use.",
    "audio": "09",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "631b162b99",
    "file": "Picoides pubescens - Downy Woodpecker XC118417.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Picoides_pubescens_-_Downy_Woodpecker_XC118417.ogg",
    "recording": "Source excerpt 15–18 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "finch",
    "name": "House Finch",
    "latin": "Haemorhous mexicanus",
    "family": "Finches",
    "cm": 14,
    "habitats": [
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "House_Finch",
    "sound": "A musical jumble of short notes, with a lively, rising-and-falling rhythm.",
    "diet": "Mostly seeds, buds, and fruit.",
    "look": "A small streaky finch; males usually have red on the head and chest.",
    "fact": "The red in a male House Finch comes from pigments in its food.",
    "audio": "10",
    "audioSeconds": 9,
    "clipLengths": [
      1,
      2.0,
      3.4,
      5.0,
      7.0,
      9
    ],
    "audioVersion": "5186ee3d8b",
    "file": "Haemorhous mexicanus - House Finch XC124078.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Haemorhous_mexicanus_-_House_Finch_XC124078.ogg",
    "recording": "Source excerpt 55–64 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "grosbeak",
    "name": "Rose-breasted Grosbeak",
    "latin": "Pheucticus ludovicianus",
    "family": "Cardinals",
    "cm": 20,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "guide": "Rose-breasted_Grosbeak",
    "sound": "Rich, rounded whistles flowing in musical phrases.",
    "diet": "Insects, seeds, and fruit.",
    "look": "Males have a rosy chest patch with black-and-white plumage; females are brown and streaked.",
    "fact": "Both male and female Rose-breasted Grosbeaks sing.",
    "audio": "11",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "0a75538acd",
    "file": "Pheucticus ludovicianus - Rose-breasted Grosbeak XC134880.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pheucticus_ludovicianus_-_Rose-breasted_Grosbeak_XC134880.ogg",
    "recording": "Source excerpt 54–57 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "bunting",
    "name": "Indigo Bunting",
    "latin": "Passerina cyanea",
    "family": "Cardinals",
    "cm": 13,
    "habitats": [
      "Woodland",
      "Open country"
    ],
    "regions": [
      "East"
    ],
    "guide": "Indigo_Bunting",
    "sound": "Bright, high-pitched notes, often repeated in pairs.",
    "diet": "Insects, seeds, and berries.",
    "look": "Breeding males are vivid blue; females are mostly brown.",
    "fact": "Indigo Buntings migrate at night and can use the stars for orientation.",
    "audio": "12",
    "audioSeconds": 6,
    "clipLengths": [
      1,
      1.6,
      2.5,
      3.5,
      4.8,
      6
    ],
    "audioVersion": "827a395543",
    "file": "Passerina cyanea - Indigo Bunting XC134747.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Passerina_cyanea_-_Indigo_Bunting_XC134747.ogg",
    "recording": "Source excerpt 81–87 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "goldfinch",
    "name": "American Goldfinch",
    "latin": "Spinus tristis",
    "family": "Finches",
    "cm": 13,
    "habitats": [
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "American_Goldfinch",
    "sound": "Bright, bouncy notes, often rising and falling in short groups.",
    "diet": "Mostly seeds, especially from plants such as thistles and sunflowers.",
    "look": "Breeding males are yellow with black wings; females and winter birds are more muted.",
    "fact": "Goldfinches feed their young a diet made mostly of seeds.",
    "audio": "13",
    "audioSeconds": 9,
    "clipLengths": [
      1,
      2.0,
      3.4,
      5.0,
      7.0,
      9
    ],
    "audioVersion": "e7caf9c3ce",
    "file": "Spinus tristis - American Goldfinch XC124312.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Spinus_tristis_-_American_Goldfinch_XC124312.ogg",
    "recording": "Source excerpt 22–31 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "bluebird",
    "name": "Eastern Bluebird",
    "latin": "Sialia sialis",
    "family": "Thrushes",
    "cm": 18,
    "habitats": [
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East"
    ],
    "guide": "Eastern_Bluebird",
    "sound": "Soft, wavering whistles and short musical calls.",
    "diet": "Insects and other small invertebrates, plus fruit and berries.",
    "look": "Males have a blue back and rusty breast; females are grayer with blue in the wings and tail.",
    "fact": "Bluebirds often hunt by dropping from a perch onto insects on the ground.",
    "audio": "14",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "7aa6169f65",
    "file": "Sialia sialis - Eastern Bluebird XC179669.mp3",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sialia_sialis_-_Eastern_Bluebird_XC179669.mp3",
    "recording": "Source excerpt 12–15 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "song-sparrow",
    "name": "Song Sparrow",
    "latin": "Melospiza melodia",
    "family": "Sparrows",
    "cm": 16,
    "habitats": [
      "Gardens",
      "Wetlands",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Song_Sparrow",
    "sound": "A few clear opening notes followed by a more varied mix of trills and buzzes.",
    "diet": "Seeds and insects, usually found while foraging low down.",
    "look": "Brown streaks across a pale breast, often gathering into a central spot.",
    "fact": "The same species can look quite different in different parts of North America.",
    "audio": "15",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "75bce98a3a",
    "file": "Melospiza melodia - Song Sparrow - XC75500.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Melospiza_melodia_-_Song_Sparrow_-_XC75500.ogg",
    "recording": "Source excerpt 1–4 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "white-throated-sparrow",
    "name": "White-throated Sparrow",
    "latin": "Zonotrichia albicollis",
    "family": "Sparrows",
    "cm": 17,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "guide": "White-throated_Sparrow",
    "sound": "Clear, thin whistles with a measured rhythm and repeated ending notes.",
    "diet": "Seeds and fruit, with insects especially during the breeding season.",
    "look": "A white throat, striped head, and yellow patches between the eyes and bill.",
    "fact": "These sparrows often scratch through leaf litter to uncover food.",
    "audio": "16",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "f43d5daa5b",
    "file": "Zonotrichia albicollis - White-throated Sparrow XC139570.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Zonotrichia_albicollis_-_White-throated_Sparrow_XC139570.ogg",
    "recording": "Source excerpt 0–3 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "redbelly",
    "name": "Red-bellied Woodpecker",
    "latin": "Melanerpes carolinus",
    "family": "Woodpeckers",
    "cm": 24,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East"
    ],
    "guide": "Red-bellied_Woodpecker",
    "sound": "Rolling, churring calls with a rough or rattling quality.",
    "diet": "Insects, fruit, nuts, and seeds.",
    "look": "A boldly barred black-and-white back, pale underside, and red on the head.",
    "fact": "The pale red belly can be much harder to see than the bright red on the head.",
    "audio": "17",
    "audioSeconds": 7,
    "clipLengths": [
      1,
      1.7,
      2.8,
      4.0,
      5.5,
      7
    ],
    "audioVersion": "4edad4dde7",
    "file": "Melanerpes carolinus - Red-bellied Woodpecker - XC71728.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Melanerpes_carolinus_-_Red-bellied_Woodpecker_-_XC71728.ogg",
    "recording": "Source excerpt 0–7 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "flicker",
    "name": "Northern Flicker",
    "latin": "Colaptes auratus",
    "family": "Woodpeckers",
    "cm": 31,
    "habitats": [
      "Woodland",
      "Gardens",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Northern_Flicker",
    "sound": "Loud, ringing calls with a sharp edge; some phrases repeat steadily.",
    "diet": "Many ants and beetles, often gathered from the ground.",
    "look": "A brown woodpecker with a spotted belly and a black crescent across the chest.",
    "fact": "Unlike many woodpeckers, flickers often feed on the ground.",
    "audio": "18",
    "audioSeconds": 3,
    "clipLengths": [
      0.5,
      0.8,
      1.2,
      1.8,
      2.4,
      3.0
    ],
    "audioVersion": "299439e45f",
    "file": "Colaptes auratus - Northern Flicker - XC104536.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Colaptes_auratus_-_Northern_Flicker_-_XC104536.ogg",
    "recording": "Source excerpt 9–12 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "barred",
    "name": "Barred Owl",
    "latin": "Strix varia",
    "family": "Owls",
    "cm": 50,
    "habitats": [
      "Woodland",
      "Wetlands"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Barred_Owl",
    "sound": "Deep hoots arranged in a clear, rhythmic phrase.",
    "diet": "Small mammals and a variety of other small animals.",
    "look": "A rounded head without ear tufts, dark eyes, and brown bars and streaks.",
    "fact": "Its familiar hooting phrase is often remembered as Who cooks for you?",
    "audio": "19",
    "audioSeconds": 9,
    "clipLengths": [
      1,
      2.0,
      3.4,
      5.0,
      7.0,
      9
    ],
    "audioVersion": "6576ee9749",
    "file": "Barred Owl (Strix varia) (W1CDR0000351 BD27).ogg",
    "author": "Tom Cosburn; The British Library Board",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Barred_Owl_(Strix_varia)_(W1CDR0000351_BD27).ogg",
    "recording": "Source excerpt 25–34 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "nuthatch",
    "name": "White-breasted Nuthatch",
    "latin": "Sitta carolinensis",
    "family": "Nuthatches",
    "cm": 15,
    "habitats": [
      "Woodland",
      "Gardens"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "White-breasted_Nuthatch",
    "sound": "Short, nasal notes that may sound like a repeated yank.",
    "diet": "Insects, nuts, and seeds, including food tucked into bark for later.",
    "look": "A white face and breast, blue-gray back, dark cap, and pointed bill.",
    "fact": "Nuthatches can travel headfirst down tree trunks while searching for food.",
    "audio": "20",
    "audioSeconds": 12,
    "clipLengths": [
      2,
      3.2,
      5.0,
      7.0,
      9.5,
      12
    ],
    "audioVersion": "69a9cf2598",
    "file": "Sitta carolinensis - White-breasted Nuthatch XC121069.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sitta_carolinensis_-_White-breasted_Nuthatch_XC121069.ogg",
    "recording": "Source excerpt 31–43 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "kingfisher",
    "name": "Belted Kingfisher",
    "latin": "Megaceryle alcyon",
    "family": "Kingfishers",
    "cm": 32,
    "habitats": [
      "Wetlands"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Belted_Kingfisher",
    "sound": "A rapid, dry, rattling call with a hard mechanical edge.",
    "diet": "Mostly small fish, plus other small aquatic animals.",
    "look": "A large head with a shaggy crest, blue-gray upperparts, and white underneath.",
    "fact": "Kingfishers often watch from a waterside perch before diving for prey.",
    "audio": "21",
    "audioSeconds": 12,
    "clipLengths": [
      2,
      3.2,
      5.0,
      7.0,
      9.5,
      12
    ],
    "audioVersion": "dbbf9d8743",
    "file": "Megaceryle alcyon - Belted Kingfisher XC132870.ogg",
    "author": "Jonathon Jongsma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Megaceryle_alcyon_-_Belted_Kingfisher_XC132870.ogg",
    "recording": "Source excerpt 74–86 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "raven",
    "name": "Common Raven",
    "latin": "Corvus corax",
    "family": "Crows & jays",
    "cm": 61,
    "habitats": [
      "Woodland",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Common_Raven",
    "sound": "Deep, resonant croaks with a rough, throaty sound.",
    "diet": "A wide variety of foods, including carrion, insects, fruit, and small animals.",
    "look": "An all-black bird with a heavy bill, shaggy throat feathers, and a wedge-shaped tail.",
    "fact": "Ravens can use a wide variety of calls and are often seen soaring.",
    "audio": "22",
    "audioSeconds": 5.6,
    "clipLengths": [
      0.5,
      1.1,
      2.0,
      3.0,
      4.3,
      5.6
    ],
    "audioVersion": "7192cd0160",
    "file": "nps-raven.mp3",
    "author": "National Park Service",
    "license": "Public domain (US federal government)",
    "licenseUrl": "https://www.nps.gov/aboutus/disclaimer.htm",
    "sourceUrl": "https://www.nps.gov/subjects/sound/sounds-common-raven.htm",
    "recording": "Source excerpt 0–5.6 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "killdeer",
    "name": "Killdeer",
    "latin": "Charadrius vociferus",
    "family": "Plovers",
    "cm": 27,
    "habitats": [
      "Wetlands",
      "Open country"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Killdeer",
    "sound": "High, clear, insistent calls, often repeated in quick groups.",
    "diet": "Mostly insects and other small invertebrates picked from the ground.",
    "look": "A brown-and-white shorebird with two dark bands across the breast.",
    "fact": "Killdeer may feign an injured wing to draw intruders away from their nest.",
    "audio": "23",
    "audioSeconds": 3.4,
    "clipLengths": [
      0.5,
      0.8,
      1.4,
      1.9,
      2.7,
      3.4
    ],
    "audioVersion": "e960c3149c",
    "file": "nps-killdeer.mp3",
    "author": "National Park Service",
    "license": "Public domain (US federal government)",
    "licenseUrl": "https://www.nps.gov/aboutus/disclaimer.htm",
    "sourceUrl": "https://www.nps.gov/subjects/sound/sounds-killdeer.htm",
    "recording": "Source excerpt 0–3.4 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  },
  {
    "id": "rednuthatch",
    "name": "Red-breasted Nuthatch",
    "latin": "Sitta canadensis",
    "family": "Nuthatches",
    "cm": 11,
    "habitats": [
      "Woodland"
    ],
    "regions": [
      "East",
      "West"
    ],
    "guide": "Red-breasted_Nuthatch",
    "sound": "Small, nasal, horn-like notes repeated in a steady series.",
    "diet": "Insects, spiders, and conifer seeds.",
    "look": "A blue-gray back, rusty underside, dark eye stripe, and white eyebrow.",
    "fact": "Red-breasted Nuthatches often move down tree trunks headfirst.",
    "audio": "24",
    "audioSeconds": 4.1,
    "clipLengths": [
      0.5,
      0.9,
      1.6,
      2.3,
      3.2,
      4.1
    ],
    "audioVersion": "2cd831ab06",
    "file": "nps-rednuthatch.mp3",
    "author": "National Park Service",
    "license": "Public domain (US federal government)",
    "licenseUrl": "https://www.nps.gov/aboutus/disclaimer.htm",
    "sourceUrl": "https://www.nps.gov/subjects/sound/sounds-nuthatch.htm",
    "recording": "Source excerpt 0–4.1 seconds",
    "adaptation": "Excerpted at the interval stated below, converted to mono MP3, loudness normalized, with brief edge fades. No layering, repetition, synthesis, or separation."
  }
];
const RECORDINGS=BIRDS.filter(b=>b.audio);
