import React, { Component } from 'react';

const d3 = require('d3');
const tubeMap = require('d3-tube-map');

 const data = {
    "stations": {
      "Alex": {
        "name": "Alex",
        "label": "Alex",
        "place_id": "ChIJaVrou4hw2EcROetQMMOP12M",
        "address": "22 Gwydir St, Cambridge CB1 2LL",
        "website": "http://www.thealexcambridge.com/",
        "phone": "01223 324441",
        "position": {
          "lat": 52.20386,
          "lon": 0.139356
        }
      },
      "Alma": {
        "name": "Alma",
        "label": "Alma",
        "place_id": "ChIJF5v8q55w2EcRWbfRNUQNPmE",
        "address": "26 Russel Court, Cambridge, CB2 1HW",
        "website": "http://www.thealmacambridge.co.uk/",
        "phone": "01223 316722",
        "position": {
          "lat": 52.195982,
          "lon": 0.125493
        }
      },
      "Anchor": {
        "name": "Anchor",
        "label": "Anchor",
        "place_id": "hIJocwdyrxw2EcRnogp-KBkY_o",
        "address": "Silver Street, Cambridge, CB3 9EL",
        "website": "http://www.anchorcambridge.com",
        "phone": "01223 353554",
        "position": {
          "lat": 52.201999,
          "lon": 0.115758
        }
      },
      "AncientShepherds": {
        "name": "Ancient Shepherds",
        "label": "Ancient Shepherds",
        "place_id": "ChIJI5agpzlw2EcR55ZT5vZy_ok",
        "address": "5 High St, Fen Ditton, Cambridge, CB5 8ST",
        "website": "http://www.theancientshepherds.co.uk/",
        "phone": "01223 293280",
        "position": {
          "lat": 52.220375,
          "lon": 0.172721
        }
      },
      "Architect": {
        "name": "Architect",
        "label": "Architect",
        "place_id": "ChIJX3Dbo7hw2EcR4iVxgX74BlU",
        "address": "43 Castle St, Cambridge, CB3 0AH",
        "website": "http://www.thearchitectcambridge.co.uk/",
        "phone": "01223 563779",
        "position": {
          "lat": 52.212078,
          "lon": 0.113155
        }
      },
      "BaronOfBeef": {
        "name": "Baron of Beef",
        "label": "Baron\nof Beef",
        "place_id": "ChIJVeAxW75w2EcRkM91IuEN_oU",
        "address": "19 Bridge St, Cambridge CB2 1UF",
        "website": "http://www.baronofbeef-cambridge.co.uk/",
        "phone": "01223 505022",
        "position": {
          "lat": 52.208893,
          "lon": 0.118118
        }
      },
      "BathHouse": {
        "name": "Bath House",
        "label": "Bath House",
        "address": "3 Benet Street, Cambridge, CB2 3QN",
        "website": "http://www.bathhouse-cambridge.co.uk/",
        "phone": "01223 350969",
        "position": {
          "lat": 52.204073,
          "lon": 0.118459
        }
      },
      "BlueBallInn": {
        "name": "Blue Ball Inn",
        "label": "Blue Ball Inn",
        "address": "57 Broadway, Grantchester, Cambridge CB3 9NQ",
        "website": "http://www.blueballgrantchester.co.uk/",
        "phone": "01223 846004",
        "position": {
          "lat": 52.183303,
          "lon": 0.09408
        }
      },
      "BlueMoon": {
        "name": "Blue Moon",
        "label": "Blue\nMoon",
        "address": "2 Norfolk St, Cambridge CB1 2LF",
        "website": "https://www.facebook.com/bluemooncambridge/",
        "phone": "01223 500238",
        "position": {
          "lat": 52.204781,
          "lon": 0.136648
        }
      },
      "Boathouse": {
        "name": "Boathouse",
        "label": "Boathouse",
        "address": "14 Chesterton Rd, Cambridge CB4 3AX",
        "website": "http://www.boathouse-cambridge.co.uk/",
        "phone": "01223 460905",
        "position": {
          "lat": 52.213719,
          "lon": 0.123523
        }
      },
      "BrewHouse": {
        "name": "Brew House",
        "label": "Brew\nHouse",
        "address": "1 King St, Cambridge CB1 1LH",
        "website": "http://www.thecambridgebrewhouse.com/",
        "phone": "01223 855185",
        "position": {
          "lat": 52.207412,
          "lon": 0.122225
        }
      },
      "Brook": {
        "name": "Brook",
        "label": "Brook",
        "address": "25 Brookfields, Cambridge CB1 3NW",
        "website": "http://www.thebrookpub.co.uk/",
        "phone": "01223 566929",
        "position": {
          "lat": 52.196072,
          "lon": 0.155429
        }
      },
      "BurleighArms": {
        "name": "Burleigh Arms",
        "label": "Burleigh Arms",
        "address": "9-11 Newmarket Rd, Cambridge CB5 8EG",
        "website": "http://www.burleigharmscambridge.co.uk/",
        "phone": "01223 301547",
        "position": {
          "lat": 52.208184,
          "lon": 0.132854
        }
      },
      "CambridgeBlue": {
        "name": "Cambridge Blue",
        "label": "Cambridge Blue",
        "address": "85-87 Gwydir St, Cambridge CB1 2LG",
        "website": "http://www.the-cambridgeblue.co.uk/",
        "phone": "01223 471680",
        "position": {
          "lat": 52.202328,
          "lon": 0.139173
        }
      },
      "CarltonArms": {
        "name": "Carlton Arms",
        "label": "Carlton Arms",
        "address": "Carlton Way, Cambridge CB4 2DF",
        "website": "http://thecarltonarmscambridge.co.uk/",
        "phone": "01223 367422",
        "position": {
          "lat": 52.222048,
          "lon": 0.114374
        }
      },
      "CarpentersArms": {
        "name": "Carpenter's Arms",
        "label": "Carpenter's Arms",
        "address": "184-186 Victoria Rd, Cambridge, CB4 3DZ",
        "website": "http://www.carpentersarmscambridge.co.uk/",
        "phone": "01223 367050",
        "position": {
          "lat": 52.21576,
          "lon": 0.114374
        }
      },
      "CastleInn": {
        "name": "Castle Inn",
        "label": "Castle\nInn",
        "place_id": "ChIJoccoXsdw2EcROG63agLdFi4",
        "address": "38 Castle St, City Centre, Cambridge CB3 0AJ",
        "website": "http://thecastleinncambridge.com/",
        "phone": "01223 353194",
        "position": {
          "lat": 52.211945,
          "lon": 0.113552
        }
      },
      "ChampionOfTheThames": {
        "name": "Champion of the Thames",
        "label": "Champion\nof the\nThames",
        "address": "68 King St, Cambridge CB1 1LN",
        "website": "https://thechampionofthethames.com/",
        "position": {
          "lat": 52.207328,
          "lon": 0.124451
        }
      },
      "ClarendonArms": {
        "name": "Clarendon Arms",
        "label": "Clarendon\nArms",
        "address": "35-36 Clarendon St, Cambridge CB1 1JX",
        "phone": "01223 778272",
        "website": "https://theclarendonarms.com/",
        "position": {
          "lat": 52.20465,
          "lon": 0.127679
        }
      },
      "CornerHouse": {
        "name": "Corner House",
        "label": "Corner House",
        "address": "231 Newmarket Rd, Cambridge CB5 8JE",
        "phone": "01223 352047",
        "website": "https://www.cornerhousepubcambridge.com/",
        "position": {
          "lat": 52.209485,
          "lon": 0.143369
        }
      },
      "Cricketers": {
        "name": "Cricketers",
        "label": "Cricketers",
        "address": "18 Melbourne Pl, Cambridge CB1 1EQ",
        "website": "http://lukthai.com/",
        "phone": "01223 778871",
        "position": {
          "lat": 52.204954,
          "lon": 0.129559
        }
      },
      "DevonshireArms": {
        "name": "Devonshire Arms",
        "label": "Devonshire\nArms",
        "address": "1B Devonshire Rd, Cambridge, CB1 2BH",
        "website": "https://www.individualpubs.co.uk/devonshire/",
        "phone": "01223 316610",
        "position": {
          "lat": 52.198924,
          "lon": 0.139079
        }
      },
      "Dobblers": {
        "name": "Dobblers",
        "label": "Dobblers",
        "address": "184 Sturton St, Cambridge, CB1 2QF",
        "website": "http://www.thedobblers.com/",
        "phone": "01223 576092",
        "position": {
          "lat": 52.205422,
          "lon": 0.140016
        }
      },
      "DukeOfCambridge": {
        "name": "Duke of Cambridge",
        "label": "Duke\nof Cambridge",
        "address": "176 East Rd, Cambridge CB1 1BG",
        "website": "http://www.dukeofcambridge-cambridge.co.uk/",
        "phone": "01223 304121",
        "position": {
          "lat": 52.204871,
          "lon": 0.133633
        }
      },
      "Eagle": {
        "name": "Eagle",
        "label": "Eagle",
        "address": "8 Benet Street, Cambridge, CB2 3QN",
        "website": "http://www.eagle-cambridge.co.uk/",
        "phone": "01223 505020",
        "position": {
          "lat": 52.203974,
          "lon": 0.118044
        }
      },
      "EarlOfBeaconsfield": {
        "name": "Earl of Beaconsfield",
        "label": "Earl of Beaconsfield",
        "address": "133 Mill Rd, Cambridge CB1 3AA",
        "website": "http://www.earlofbeaconsfield.co.uk/",
        "phone": "01223 410703",
        "position": {
          "lat": 52.198414,
          "lon": 0.142186
        }
      },
      "EarlOfDerby": {
        "name": "Earl of Derby",
        "label": "Earl of Derby",
        "address": "129 Hills Rd, Cambridge CB2 1PG",
        "website": "http://www.theearlofderby.com/",
        "phone": "01223 352785",
        "position": {
          "lat": 52.192092,
          "lon": 0.134079
        }
      },
      "ElmTree": {
        "name": "Elm Tree",
        "label": "Elm Tree",
        "address": "16A Orchard St, Cambridge CB1 1JT",
        "website": "http://www.theelmtreecambridge.co.uk/",
        "phone": "01223 502632",
        "position": {
          "lat": 52.205124,
          "lon": 0.129503
        }
      },
      "Empress": {
        "name": "Empress",
        "label": "Empress",
        "address": "72 Thoday St, Cambridge, CB1 3AX",
        "phone": "01223 247236",
        "position": {
          "lat": 52.199158,
          "lon": 0.147212
        }
      },
      "FlyingPig": {
        "name": "Flying Pig",
        "label": "Flying Pig",
        "address": "106 Hills Rd, Cambridge, CB2 1LQ",
        "phone": "01223 354623",
        "position": {
          "lat": 52.194474,
          "lon": 0.131747
        }
      },
      "FortStGeorge": {
        "name": "Fort St George",
        "label": "Fort St George",
        "address": "Cambridge CB4 1HA",
        "website": "http://www.fortstgeorge-cambridge.co.uk/",
        "phone": "01223 305523",
        "position": {
          "lat": 52.212511,
          "lon": 0.127802
        }
      },
      "FreePress": {
        "name": "Free Press",
        "label": "Free\nPress",
        "address": "7 Prospect Row, Cambridge, CB1 1DU",
        "website": "http://www.freepresspub.com/",
        "phone": "01223 368337",
        "position": {
          "lat": 52.20474,
          "lon": 0.130385
        }
      },
      "Geldart": {
        "name": "Geldart",
        "label": "Geldart",
        "address": "1 Ainsworth St, Cambridge, CB1 2PF",
        "website": "http://www.the-geldart.co.uk/",
        "phone": "01223 314264",
        "position": {
          "lat": 52.203696,
          "lon": 0.142231
        }
      },
      "GoldenHind": {
        "name": "Golden Hind",
        "label": "Golden Hind",
        "address": "355 Milton Rd, Cambridge, CB4 1SP",
        "website": "http://www.golden-hind-pub-cambridge.co.uk/",
        "phone": "01223 420816",
        "position": {
          "lat": 52.227922,
          "lon": 0.145524
        }
      },
      "GrainStore": {
        "name": "Grain Store",
        "label": "Grain Store",
        "address": "69-76 Regent St, Cambridge CB2 1AA",
        "website": "http://www.grainandhopstore-cambridge.co.uk/",
        "phone": "01223 323405",
        "position": {
          "lat": 52.200689,
          "lon": 0.126622
        }
      },
      "Granta": {
        "name": "Granta",
        "label": "Granta",
        "address": "14 Newnham Rd, Cambridge, CB3 9EX",
        "website": "http://www.granta-cambridge.co.uk/",
        "phone": "01223 505016",
        "position": {
          "lat": 52.1997,
          "lon": 0.11373
        }
      },
      "Grapes": {
        "name": "Grapes",
        "label": "Grapes",
        "address": "19 Histon Rd, Cambridge CB4 3JB",
        "website": "http://www.thegrapescambridge.co.uk/",
        "phone": "01223 511974",
        "position": {
          "lat": 52.214963,
          "lon": 0.110773
        }
      },
      "GreenDragon": {
        "name": "Green Dragon",
        "label": "Green Dragon",
        "address": "5 Water St, Cambridge CB4 1NZ",
        "website": "http://www.greendragon-cambridge.co.uk/",
        "phone": "01223 505035",
        "position": {
          "lat": 52.217958,
          "lon": 0.145433
        }
      },
      "GreenManGrantchester": {
        "name": "Green Man",
        "label": "Green Man",
        "address": "59 High St, Grantchester, Cambridge CB3 9NF",
        "website": "http://www.thegreenmangrantchester.co.uk/",
        "phone": "01223 844669",
        "position": {
          "lat": 52.18004,
          "lon": 0.095174
        }
      },
      "GreenManTrumpington": {
        "name": "Green Man",
        "label": "Green Man",
        "address": "55 High St, Cambridge, Trumpington CB2 9HZ",
        "website": "http://www.thegreenmantrumpington.com/",
        "phone": "01223 844903",
        "position": {
          "lat": 52.176564,
          "lon": 0.113054
        }
      },
      "Haymakers": {
        "name": "Haymakers",
        "label": "Haymakers",
        "address": "54 High St, Cambridge CB4 1NG",
        "website": "https://www.individualpubs.co.uk/haymakers/",
        "phone": "01223 311077",
        "position": {
          "lat": 52.217339,
          "lon": 0.139439
        }
      },
      "Hopbine": {
        "name": "Hopbine",
        "label": "Hopbine",
        "address": "11-12 Fair St, Cambridge, CB1 1HA",
        "website": "http://www.thehopbine.co.uk/",
        "phone": "01223 367204",
        "position": {
          "lat": 52.207365,
          "lon": 0.12938
        },
        "closed": true
      },
      "HudsonsAleHouse": {
        "name": "Hudson's Ale House",
        "label": "Hudson's Ale House",
        "address": "77 High St, Trumpington CB2 9HZ",
        "website": "http://www.hudsonalehouse.co.uk/",
        "phone": "01223 570042",
        "position": {
          "lat": 52.175125,
          "lon": 0.112693
        }
      },
      "KingsHead": {
        "name": "King's Head",
        "label": "King's Head",
        "address": "50 High St, Fen Ditton, Cambridge CB5 8ST",
        "phone": "01223 293861",
        "position": {
          "lat": 52.2214166,
          "lon": 0.169868
        }
      },
      "KingstonArms": {
        "name": "Kingston Arms",
        "label": "Kingston Arms",
        "address": "33 Kingston St, Cambridge CB1 2NU",
        "website": "http://www.kingston-arms.co.uk/",
        "phone": "01223 319414",
        "position": {
          "lat": 52.200351,
          "lon": 0.139764
        }
      },
      "KingStreetRun": {
        "name": "King Street Run",
        "label": "King Street\nRun",
        "address": "86 King St, Cambridge CB1 1LN",
        "phone": "01223 328900",
        "position": {
          "lat": 52.20724,
          "lon": 0.125199
        }
      },
      "LiveAndLetLive": {
        "name": "Live and Let Live",
        "label": "Live and Let Live",
        "address": "40 Mawson Rd, Cambridge, CB1 2EA",
        "phone": "01223 460261",
        "position": {
          "lat": 52.199411,
          "lon": 0.135038
        }
      },
      "LordByronInn": {
        "name": "Lord Byron Inn",
        "label": "Lord Byron Inn",
        "address": "22 Church Ln, Trumpington, Cambridge CB2 9LA",
        "website": "http://www.lordbyroninn.co.uk/",
        "phone": "01223 845102",
        "position": {
          "lat": 52.174461,
          "lon": 0.110456
        }
      },
      "Maypole": {
        "name": "Maypole",
        "label": "Maypole",
        "address": "20A Portugal Pl, Cambridge CB5 8AF",
        "website": "http://www.maypolefreehouse.co.uk/",
        "phone": "01223 352999",
        "position": {
          "lat": 52.209671,
          "lon": 0.119232
        }
      },
      "Med": {
        "name": "Med",
        "label": "Med",
        "address": "Perne Rd, Cambridge, CB1 3RX",
        "phone": "01223 240808",
        "position": {
          "lat": 52.18913,
          "lon": 0.153427
        },
        "closed": true
      },
      "Mill": {
        "name": "Mill",
        "label": "Mill",
        "address": "14 Mill Ln, Cambridge CB2 1RX",
        "website": "http://www.themillpubcambridge.com/",
        "phone": "01223 311829",
        "position": {
          "lat": 52.201552,
          "lon": 0.116128
        }
      },
      "MiltonArms": {
        "name": "Milton Arms",
        "label": "Milton Arms",
        "address": "205 Milton Rd, Cambridge, CB4 1XG",
        "website": "http://www.hungryhorse.co.uk/locations/milton-arms",
        "phone": "01223 505012",
        "position": {
          "lat": 52.22268,
          "lon": 0.136693
        }
      },
      "Mitre": {
        "name": "Mitre",
        "label": "Mitre",
        "address": "17 Bridge St, Cambridge CB2 1UF",
        "website": "http://www.nicholsonspubs.co.uk/restaurants/eastofengland/themitrecambridge",
        "phone": "01223 358403",
        "position": {
          "lat": 52.208852,
          "lon": 0.118185
        }
      },
      "OldSpring": {
        "name": "Old Spring",
        "label": "Old Spring",
        "address": "1 Ferry Path, Cambridge CB4 1HB",
        "website": "http://www.theoldspring.co.uk/",
        "phone": "01223 357228",
        "position": {
          "lat": 52.214393,
          "lon": 0.127719
        }
      },
      "OldTicketOffice": {
        "name": "Old Ticket Office",
        "label": "Old Ticket Office",
        "address": "Unit 1, Cambridge Railway Station, Cambridge CB1 2JW",
        "website": "https://www.oldticketoffice.com/",
        "phone": "01223 859017",
        "position": {
          "lat": 52.194681,
          "lon": 0.1366827
        }
      },
      "PantonArms": {
        "name": "Panton Arms",
        "label": "Panton Arms",
        "address": "43 Panton St, Cambridge CB2 1HL",
        "phone": "01223 464351",
        "position": {
          "lat": 52.196491,
          "lon": 0.124987
        }
      },
      "Petersfield": {
        "name": "Petersfield",
        "label": "Petersfield",
        "address": "2 Sturton Street, Cambridge CB1 2QA",
        "phone": "01223 306306",
        "position": {
          "lat": 52.201332,
          "lon": 0.140671
        }
      },
      "Pickerel": {
        "name": "Pickerel",
        "label": "Pickerel",
        "address": "30 Magdalene St, Cambridge CB3 0AF",
        "website": "http://www.taylor-walker.co.uk/pub/pickerel-cambridge",
        "phone": "01223 355068",
        "position": {
          "lat": 52.209955,
          "lon": 0.116209
        }
      },
      "PintShop": {
        "name": "Pint Shop",
        "label": "Pint Shop",
        "address": "10 Peas Hill, Cambridge CB2 3PN",
        "website": "http://pintshop.co.uk/",
        "phone": "01223 352293",
        "position": {
          "lat": 52.204194,
          "lon": 0.119142
        }
      },
      "Plough": {
        "name": "Plough",
        "label": "Plough",
        "address": "Green End, Cambridge, Cambridgshire CB5 8SX",
        "website": "http://www.theploughfenditton.co.uk/",
        "phone": "01223 293264",
        "position": {
          "lat": 52.224075,
          "lon": 0.16823
        }
      },
      "PortlandArms": {
        "name": "Portland Arms",
        "label": "Portland Arms",
        "address": "129 Chesterton Rd, Cambridge CB4 3BA",
        "website": "http://www.theportlandarms.co.uk/",
        "phone": "01223 357268",
        "position": {
          "lat": 52.214426,
          "lon": 0.124525
        }
      },
      "PrinceRegent": {
        "name": "Prince Regent",
        "label": "Prince Regent",
        "address": "91 Regent St, Cambridge, CB2 1AW",
        "website": "http://www.princeregent-cambridge.co.uk/",
        "phone": "01223 505030",
        "position": {
          "lat": 52.199934,
          "lon": 0.126909
        }
      },
      "Punter": {
        "name": "Punter",
        "label": "Punter",
        "place_id": "ChIJIwqxlbhw2EcRQYT52kWYXhQ",
        "address": "3 Pound Hill, Cambridge CB3 0AE",
        "website": "http://www.thepuntercambridge.com/",
        "phone": "01223 363322",
        "position": {
          "lat": 52.210552,
          "lon": 0.113281
        }
      },
      "QueenEdith": {
        "name": "Queen Edith",
        "label": "Queen Edith",
        "address": "Wulfstan Way, Cambridge, CB1 8QN",
        "website": "https://www.individualpubs.co.uk/queenedith/",
        "phone": "01223 244536",
        "position": {
          "lat": 52.180264,
          "lon": 0.152927
        }
      },
      "RedBull": {
        "name": "Red Bull",
        "label": "Red Bull",
        "address": "11 Barton Rd, Newnham, Cambridge CB3 9JZ",
        "phone": "01223 300943",
        "website": "http://the-red-bull.weebly.com/",
        "position": {
          "lat": 52.196487,
          "lon": 0.108657
        }
      },
      "RedLion": {
        "name": "Red Lion",
        "label": "Red Lion",
        "address": "33 High St, Grantchester, Cambridge CB3 9NF",
        "website": "http://www.redliongrantchester.co.uk/",
        "phone": "01223 840121",
        "position": {
          "lat": 52.180343,
          "lon": 0.095603
        }
      },
      "Regal": {
        "name": "Regal",
        "label": "Regal",
        "address": "38-39 St Andrew's St, Cambridge, Cambridgeshire CB2 3AR",
        "website": "https://www.jdwetherspoon.com/pubs/all-pubs/england/cambridgeshire/the-regal-cambridge",
        "phone": "01223 366459",
        "position": {
          "lat": 52.202947,
          "lon": 0.123806
        }
      },
      "Rock": {
        "name": "Rock",
        "label": "Rock",
        "address": "200 Cherry Hinton Rd, Cambridge CB1 7AW",
        "website": "http://www.rock-cambridge.co.uk/",
        "phone": "01223 505005",
        "position": {
          "lat": 52.187503,
          "lon": 0.146716
        }
      },
      "RoyalStandard": {
        "name": "Royal Standard",
        "label": "Royal Standard",
        "address": "292 Mill Rd, Cambridge CB1 3NL",
        "website": "http://royalstandardcambridge.com/",
        "phone": "01223 569065",
        "position": {
          "lat": 52.197,
          "lon": 0.149764
        }
      },
      "RupertBrook": {
        "name": "Rupert Brooke",
        "label": "Rupert Brooke",
        "address": "2 Broadway, Grantchester CB3 9NQ",
        "website": "http://www.therupertbrooke.com/",
        "phone": "01223 841875",
        "position": {
          "lat": 52.181132,
          "lon": 0.093629
        }
      },
      "SalisburyArms": {
        "name": "Salisbury Arms",
        "label": "Salisbury Arms",
        "address": "76 Tenison Rd, Cambridge, CB1 2DW",
        "website": "http://www.salisburyarmscambridge.co.uk/",
        "phone": "01223 576363",
        "position": {
          "lat": 52.198305,
          "lon": 0.135435
        }
      },
      "Ship": {
        "name": "Ship",
        "label": "Ship 5000",
        "address": "Northfields Ave, Cambridge CB4 2LG",
        "phone": "01223 314445",
        "website": "http://www.charleswellspubs.co.uk/pub-view/ship-cambs/",
        "position": {
          "lat": 52.231224,
          "lon": 0.128837
        }
      },
      "SirIsaacNewton": {
        "name": "Sir Isaac Newton",
        "label": "Sir Isaac Newton",
        "address": "84 Castle St, Cambridge CB3 0AJ",
        "website": "http://www.sirisaacnewton-cambridge.co.uk/",
        "phone": "01223 305555",
        "position": {
          "lat": 52.213338,
          "lon": 0.112072
        }
      },
      "SixBells": {
        "name": "Six Bells",
        "label": "Six Bells",
        "address": "11 Covent Garden, Cambridge CB1 2HS",
        "website": "http://sixbellspub.co.uk/",
        "phone": "01223 355559",
        "position": {
          "lat": 52.200395,
          "lon": 0.134442
        }
      },
      "StRadegund": {
        "name": "St Radegund",
        "label": "St Radegund",
        "address": "129 King St, Cambridge, CB1 1LD",
        "phone": "01223 311794",
        "website": "http://st-radegund.co.uk/",
        "position": {
          "lat": 52.207616,
          "lon": 0.126733
        }
      },
      "TramDepot": {
        "name": "Tram Depot",
        "label": "Tram\nDepot",
        "address": "3-5 Dover St, Cambridge CB1 1DY",
        "website": "https://sites.google.com/site/tramdepotcambs/",
        "phone": "01223 324553",
        "position": {
          "lat": 52.204638,
          "lon": 0.132827
        }
      },
      "Waterman": {
        "name": "Waterman",
        "label": "Waterman",
        "address": "32 Chesterton Rd, Cambridge CB4 3AX",
        "website": "http://www.thewaterman-cambridge.co.uk/",
        "phone": "01223 323813",
        "position": {
          "lat": 52.214166,
          "lon": 0.125526
        }
      },
      "WhiteSwan": {
        "name": "White Swan",
        "label": "White Swan",
        "address": "109 Mill Rd, City Centre, Cambridge CB1 2AZ",
        "website": "http://www.whiteswancambridge.co.uk/",
        "position": {
          "lat": 52.199318,
          "lon": 0.139278
        }
      },
      "Wrestlers": {
        "name": "Wrestlers",
        "label": "Wrestlers",
        "address": "Newmarket Rd, Cambridge CB5 8JE",
        "website": "http://www.thewrestlerscambridge.co.uk/",
        "phone": "01223 566554",
        "position": {
          "lat": 52.210964,
          "lon": 0.146358
        }
      }
    },
    "lines": [
      {
        "name": "Town",
        "label": "Town",
        "color": "#FFD600",
        "shiftCoords": [0, 0],
        "nodes": [
          {
            "coords": [14, -4],
            "name": "Mill",
            "labelPos": "S"
          },
          {
            "coords": [27, -4],
            "marker": "interchange",
            "name": "Regal",
            "labelPos": "NW",
            "shiftCoords": [0, 0],
            "hide": true
          },
          {
            "coords": [36, -4]
          },
          {
            "coords": [37, -3]
          },
          {
            "coords": [37, 2],
            "marker": "interchange",
            "name": "ClarendonArms",
            "labelPos": "E",
            "hide": true
          },
          {
            "coords": [37, 6],
            "name": "StRadegund",
            "labelPos": "E"
          },
          {
            "coords": [37, 9]
          },
          {
            "coords": [36, 10]
          },
          {
            "coords": [34, 10],
            "name": "KingStreetRun",
            "labelPos": "N"
          },
          {
            "coords": [32, 10],
            "name": "ChampionOfTheThames",
            "labelPos": "S"
          },
          {
            "coords": [27, 10],
            "marker": "interchange",
            "name": "BrewHouse",
            "labelPos": "SW",
            "shiftCoords": [0, 0.5],
            "labelShiftCoords": [0, 0],
            "canonical": true
          },
          {
            "coords": [15, 10],
            "name": "Mitre",
            "labelPos": "N"
          },
          {
            "coords": [13, 10],
            "name": "BaronOfBeef",
            "labelPos": "S",
            "canonical": true
          },
          {
            "coords": [10, 10]
          },
          {
            "coords": [9, 9]
          },
          {
            "coords": [9, 2],
            "marker": "interchange",
            "name": "Eagle",
            "labelPos": "NW",
            "hide": true
          },
          {
            "coords": [9, -2],
            "name": "Anchor",
            "labelPos": "E"
          },
          {
            "coords": [9, -3]
          },
          {
            "coords": [10, -4]
          },
          {
            "coords": [14, -4]
          }
        ]
      },
      {
        "name": "Castle",
        "label": "Castle",
        "color": "#AB4800",
        "shiftCoords": [0, 1],
        "nodes": [
          {
            "coords": [10, 34],
            "name": "CarltonArms",
            "labelPos": "N"
          },
          {
            "coords": [1, 34]
          },
          {
            "coords": [-1, 33]
          },
          {
            "coords": [-3, 31],
            "name": "CarpentersArms",
            "labelPos": "NW"
          },
          {
            "coords": [-5, 29],
            "name": "Grapes",
            "labelPos": "NW"
          },
          {
            "coords": [-8, 26]
          },
          {
            "coords": [-9, 24]
          },
          {
            "coords": [-9, 23]
          },
          {
            "coords": [-9, 22]
          },
          {
            "coords": [-8, 20],
            "name": "SirIsaacNewton",
            "labelPos": "SW"
          },
          {
            "coords": [-6, 18],
            "name": "Architect",
            "labelPos": "SW"
          },
          {
            "coords": [-4, 16],
            "name": "CastleInn",
            "labelPos": "NE"
          },
          {
            "coords": [-1, 13],
            "name": "Punter",
            "labelPos": "SW"
          },
          {
            "coords": [1, 11]
          },
          {
            "coords": [3, 10],
            "marker": "interchange",
            "name": "Pickerel",
            "labelPos": "SW"
          },
          {
            "coords": [13, 10],
            "marker": "interchange",
            "name": "BaronOfBeef",
            "labelPos": "NW"
          },
          {
            "coords": [15, 10],
            "name": "Mitre",
            "labelPos": "N",
            "canonical": true
          },
          {
            "coords": [27, 10],
            "marker": "interchange",
            "name": "BrewHouse",
            "labelPos": "W",
            "hide": true
          }
        ]
      },
      {
        "name": "Riverbank",
        "label": "Riverbank",
        "color": "#2B8DBF",
        "shiftCoords": [0, 0],
        "nodes": [
          {
            "coords": [3, -4],
            "marker": "interchange",
            "name": "Granta",
            "labelPos": "SW",
            "shiftCoords": [0, -1],
            "canonical": true
          },
          {
            "coords": [3, 10],
            "marker": "interchange",
            "name": "Pickerel",
            "labelPos": "SW",
            "hide": true
          },
          {
            "coords": [3, 18]
          },
          {
            "coords": [4, 20]
          },
          {
            "coords": [6, 22]
          },
          {
            "coords": [8, 23]
          },
          {
            "coords": [11, 23],
            "name": "Boathouse",
            "labelPos": "S"
          },
          {
            "coords": [14, 23],
            "name": "PortlandArms",
            "labelPos": "N"
          },
          {
            "coords": [20, 23],
            "name": "Waterman",
            "labelPos": "S"
          },
          {
            "coords": [27, 23],
            "marker": "interchange",
            "name": "OldSpring",
            "labelPos": "S",
            "hide": true
          },
          {
            "coords": [38, 23],
            "name": "Haymakers",
            "labelPos": "N"
          },
          {
            "coords": [44, 23],
            "name": "GreenDragon",
            "labelPos": "S"
          }
        ]
      },
      {
        "name": "Backstreet",
        "label": "Backstreet",
        "color": "#FF1100",
        "shiftCoords": [0, 0],
        "nodes": [
          {
            "coords": [9, 2],
            "marker": "interchange",
            "name": "Eagle",
            "labelPos": "NE",
            "canonical": true
          },
          {
            "coords": [16, 2],
            "name": "BathHouse",
            "labelPos": "S"
          },
          {
            "coords": [21, 2],
            "name": "PintShop",
            "labelPos": "N"
          },
          {
            "coords": [37, 2],
            "marker": "interchange",
            "name": "ClarendonArms",
            "labelPos": "SW",
            "canonical": true
          },
          {
            "coords": [45, 2],
            "marker": "interchange",
            "name": "ElmTree",
            "labelPos": "NW",
            "canonical": true
          },
          {
            "coords": [50, 2],
            "name": "Cricketers",
            "labelPos": "S"
          },
          {
            "coords": [54, 2],
            "name": "FreePress",
            "labelPos": "N"
          },
          {
            "coords": [58, 2],
            "name": "TramDepot",
            "labelPos": "S"
          },
          {
            "coords": [62, 2],
            "name": "DukeOfCambridge",
            "labelPos": "N"
          },
          {
            "coords": [67, 2],
            "name": "BlueMoon",
            "labelPos": "S"
          },
          {
            "coords": [71, 2],
            "name": "Dobblers",
            "labelPos": "N"
          },
          {
            "coords": [75, 2],
            "name": "Alex",
            "labelPos": "S"
          },
  
          {
            "coords": [78, 2]
          },
          {
            "coords": [80, 1]
          },
          {
            "coords": [82, -1],
            "name": "Geldart",
            "labelPos": "NE"
          },
          {
            "coords": [84, -3],
            "name": "CambridgeBlue",
            "labelPos": "NE"
          },
          {
            "coords": [86, -5],
            "name": "Petersfield",
            "labelPos": "NE"
          },
          {
            "coords": [88, -7],
            "name": "KingstonArms",
            "labelPos": "NE"
          }
        ]
      },
      {
        "name": "Grantchester",
        "label": "Grantchester",
        "color": "#0C6826",
        "shiftCoords": [1, -1],
        "nodes": [
          {
            "coords": [-27, -28],
            "name": "GreenManGrantchester",
            "labelPos": "W"
          },
          {
            "coords": [-27, -24],
            "name": "RedLion",
            "labelPos": "W"
          },
          {
            "coords": [-27, -20],
            "name": "RupertBrook",
            "labelPos": "W"
          },
          {
            "coords": [-27, -16],
            "name": "BlueBallInn",
            "labelPos": "W"
          },
          {
            "coords": [-27, -11]
          },
          {
            "coords": [-26, -9]
          },
          {
            "coords": [-24, -7]
          },
          {
            "coords": [-22, -5]
          },
          {
            "coords": [-20, -4]
          },
          {
            "coords": [-5, -4],
            "name": "RedBull",
            "labelPos": "N"
          },
          {
            "coords": [3, -4],
            "marker": "interchange",
            "name": "Granta",
            "labelPos": "S",
            "hide": true
          },
          {
            "coords": [14, -4],
            "name": "Mill",
            "labelPos": "S",
            "shiftCoords": [0, -1]
          },
          {
            "coords": [27, -4],
            "marker": "interchange",
            "name": "Regal",
            "labelPos": "NW",
            "shiftCoords": [0, -1],
            "hide": true
          },
          {
            "coords": [36.5, -4]
          },
          {
            "coords": [38.5, -3]
          },
          {
            "coords": [49.5, 8],
            "name": "Hopbine",
            "labelPos": "NW"
          },
          {
            "coords": [51.5, 10],
            "name": "BurleighArms",
            "labelPos": "NW"
          },
          {
            "coords": [53.5, 12]
          },
          {
            "coords": [55.5, 13]
          },
          {
            "coords": [59, 13],
            "name": "CornerHouse",
            "labelPos": "S"
          },
          {
            "coords": [61, 13],
            "name": "Wrestlers",
            "labelPos": "N"
          },
          {
            "coords": [66, 13]
          },
          {
            "coords": [68, 13]
          },
          {
            "coords": [70, 14]
          },
          {
            "coords": [83, 27],
            "name": "AncientShepherds",
            "labelPos": "SE"
          },
          {
            "coords": [85, 29],
            "name": "KingsHead",
            "labelPos": "SE"
          },
          {
            "coords": [87, 31],
            "name": "Plough",
            "labelPos": "SE"
          }
        ]
      },
      {
        "name": "MillRoad",
        "label": "Mill Road",
        "color": "#85898A",
        "shiftCoords": [0, 0],
        "nodes": [
          {
            "coords": [45, 2]
          },
          {
            "coords": [45, -2]
          },
          {
            "coords": [46, -4]
          },
          {
            "coords": [50, -8],
            "name": "SixBells",
            "labelPos": "NE"
          },
          {
            "coords": [52, -10],
            "name": "LiveAndLetLive",
            "labelPos": "NE"
          },
          {
            "coords": [54, -12],
            "name": "SalisburyArms",
            "labelPos": "NE"
          },
          {
            "coords": [56, -14],
            "name": "WhiteSwan",
            "labelPos": "NE"
          },
          {
            "coords": [58, -16],
            "name": "DevonshireArms",
            "labelPos": "SW"
          },
          {
            "coords": [60, -18],
            "name": "EarlOfBeaconsfield",
            "labelPos": "NE"
          },
          {
            "coords": [62, -20],
            "name": "Empress",
            "labelPos": "NE"
          },
          {
            "coords": [64, -22],
            "name": "RoyalStandard",
            "labelPos": "SW"
          },
          {
            "coords": [66, -24],
            "name": "Brook",
            "labelPos": "SW"
          }
        ]
      },
      {
        "name": "HillsRoad",
        "label": "Hills Road",
        "color": "#89014C",
        "shiftCoords": [0, -2],
        "nodes": [
          {
            "coords": [14, -4],
            "name": "Mill",
            "labelPos": "S",
            "shiftCoords": [0, -2],
            "canonical": true
          },
          {
            "coords": [27, -4],
            "marker": "interchange",
            "name": "Regal",
            "labelPos": "NE",
            "shiftCoords": [0, -2],
            "hide": true
          },
          {
            "coords": [31, -4]
          },
          {
            "coords": [33, -5]
          },
          {
            "coords": [35, -7],
            "name": "GrainStore",
            "labelPos": "NE"
          },
          {
            "coords": [37, -9],
            "name": "PrinceRegent",
            "labelPos": "NE"
          },
          {
            "coords": [41, -13],
            "name": "FlyingPig",
            "labelPos": "NE"
          },
          {
            "coords": [43, -15],
            "name": "OldTicketOffice",
            "labelPos": "SW"
          },
          {
            "coords": [45, -17],
            "name": "EarlOfDerby",
            "labelPos": "SW"
          },
          {
            "coords": [47, -19],
            "name": "Rock",
            "labelPos": "SW"
          },
          {
            "coords": [51, -23],
            "name": "Med",
            "labelPos": "SW"
          },
          {
            "coords": [53, -25]
          },
          {
            "coords": [55, -26]
          },
          {
            "coords": [58, -26],
            "name": "QueenEdith",
            "labelPos": "S"
          }
        ]
      },
      {
        "name": "Northern",
        "label": "Northern",
        "color": "#000000",
        "shiftCoords": [0, 0],
        "nodes": [
          {
            "coords": [-8, -42],
            "name": "LordByronInn",
            "labelPos": "SE"
          },
          {
            "coords": [-3, -37],
            "name": "HudsonsAleHouse",
            "labelPos": "SE"
          },
          {
            "coords": [1, -33],
            "name": "GreenManTrumpington",
            "labelPos": "SE"
          },
          {
            "coords": [20, -14],
            "name": "Alma",
            "labelPos": "SE"
          },
          {
            "coords": [22, -12],
            "name": "PantonArms",
            "labelPos": "SE"
          },
          {
            "coords": [26, -8]
          },
          {
            "coords": [27, -6]
          },
          {
            "coords": [27, -4],
            "marker": "interchange",
            "name": "Regal",
            "labelPos": "NW",
            "shiftCoords": [0, -1],
            "labelShiftCoords": [0, 0],
            "canonical": true
          },
          {
            "coords": [27, 10],
            "marker": "interchange",
            "name": "BrewHouse",
            "labelPos": "W",
            "hide": true
          },
          {
            "coords": [27, 13],
            "name": "Maypole",
            "labelPos": "W"
          },
          {
            "coords": [27, 16],
            "name": "FortStGeorge",
            "labelPos": "E"
          },
          {
            "coords": [27, 23],
            "marker": "interchange",
            "name": "OldSpring",
            "labelPos": "SE",
            "canonical": true
          },
          {
            "coords": [27, 25]
          },
          {
            "coords": [28, 27]
          },
          {
            "coords": [30, 29]
          },
          {
            "coords": [32, 30]
          },
          {
            "coords": [34, 30],
            "name": "MiltonArms",
            "labelPos": "N"
          },
          {
            "coords": [40, 30],
            "name": "GoldenHind",
            "labelPos": "S"
          },
          {
            "coords": [42, 30]
          },
          {
            "coords": [43, 31]
          },
          {
            "coords": [43, 33]
          },
          {
            "coords": [43, 38],
            "name": "Ship",
            "labelPos": "E"
          }
        ]
      }
    ],
    "river": {
      "name": "River",
      "label": "River",
      "shiftCoords": [0, 0],
      "nodes": [
        {
          "coords": [-43, -56]
        },
        {
          "coords": [5, -8]
        },
        {
          "coords": [6, -6]
        },
        {
          "coords": [6, 12]
        },
        {
          "coords": [7, 14]
        },
        {
          "coords": [10, 17]
        },
        {
          "coords": [12, 18]
        },
        {
          "coords": [50, 18]
        },
        {
          "coords": [52, 19]
        },
        {
          "coords": [86, 53]
        }
      ]
    }
  };

  export default class Map  extends Component {

    componentDidMount() {
        d3.tubeMap = tubeMap.tubeMap;
        d3.select('#mrtmap').html(null);

        this.renderMap();
    }

    renderMap() {

        var container = d3.select('#mrtmap');
        var width = 700;
        var height = 700;

        var map = d3.tubeMap()
            .width(width)
            .height(height)
            .margin({
                top: 20,
                right: 20,
                bottom: 40,
                left: 100,
            })
            .on("click", function (name) {
                console.log(name);
            });


        container.datum(data).call(map);
    }

    
    render() {
        return (
            <div  id="mrtmap"></div>
        )
   }

    
}

