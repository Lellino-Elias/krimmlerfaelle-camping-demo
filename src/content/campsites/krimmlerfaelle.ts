import type { CampsiteConfig } from "../types";

/**
 * Wasserfall Camping Krimml — Stellplatz am 4-Sterne-Hotel Krimmlerfälle (Familie Schöppl),
 * im Nationalpark Hohe Tauern, mit Blick auf die Krimmler Wasserfälle.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest) abgeleitet; Bilder provenienzgebunden.
 */
const IMG = "/campsites/krimmlerfaelle";

const krimmlerfaelle: CampsiteConfig = {
  name: "Wasserfall Camping Krimml",
  shortName: "Wasserfall",
  slug: "krimmlerfaelle",
  ort: "Krimml",
  region: "Salzburger Land",
  brandKind: "Camping am Hotel Krimmlerfälle",
  regionLong: "Nationalpark Hohe Tauern · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz mit Blick auf die Wasserfälle",
  claimEmphasis: "die Wasserfälle",
  intro:
    "Mit Wohnmobil, Camper, Dachzelt oder Zelt: Auf dem Wasserfall Camping in Krimml stehst du eben und ruhig — mit traumhaftem Blick auf die Krimmler Wasserfälle und dem 4-Sterne-Hotel direkt nebenan.",

  statement: {
    text: "Erste Reihe fußfrei: dein Platz mitten im Nationalpark Hohe Tauern, mit den Wasserfällen direkt vor der Tür.",
    emphasis: "Erste Reihe fußfrei",
  },

  pillars: [
    {
      title: "Stellplatz mit Bergblick",
      text: "Ebene Plätze für Wohnmobil, Camper, Dachzelt oder Zelt — Strom und Wasser sind beim Sonderpreis schon dabei.",
      image: { src: `${IMG}/gallery-5a13623a17.webp`, alt: "Wohnmobile am Wasserfall Camping Krimml mit Blick auf die Berge" },
    },
    {
      title: "Europas größte Wasserfälle",
      text: "Die Krimmler Wasserfälle liegen direkt vor dir — der tägliche Eintritt ist für Campgäste inklusive.",
      image: { src: `${IMG}/gallery-97a7380cb2.webp`, alt: "Die tosenden Krimmler Wasserfälle aus der Nähe" },
    },
    {
      title: "Familie Schöppl seit 1902",
      text: "Das Wasserfall Camping gehört zum 4-Sterne-Hotel Krimmlerfälle — Gastfreundschaft mit Pinzgauer Tradition seit über 100 Jahren.",
      image: { src: `${IMG}/kids-5da792a32a.webp`, alt: "Familie Schöppl — vier Generationen Gastfreundschaft im Hotel Krimmlerfälle" },
    },
  ],

  usps: [
    "Blick auf die Wasserfälle",
    "Im Nationalpark Hohe Tauern",
    "Strom & Wasser inklusive",
    "Eintritt Wasserfälle inkl.",
    "Wellnessbad im 4*-Hotel",
    "Wohnmobil, Camper & Zelt",
  ],

  trust: {
    heading: "Camping mit Hotel-Komfort",
    headingEmphasis: "Hotel-Komfort",
    intro:
      "Camping heißt hier nicht verzichten: Wellnessbad, Saunen und das Restaurant des Hotels Krimmlerfälle stehen dir offen, während dein Stellplatz mitten in der Natur des Oberpinzgaus liegt.",
  },

  awards: [],

  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: { src: `${IMG}/gallery-bb7d937ffa.webp`, alt: "Die Bergwelt des Nationalparks Hohe Tauern rund um Krimml" },
  },

  breather: {
    image: { src: `${IMG}/gallery-c5c1f691fd.webp`, alt: "Außenpool des Hotels Krimmlerfälle mit Blick auf die Berge" },
    line: "Eingebettet in eine herrliche Landschaft.",
  },

  camping: {
    heading: "Wasserfall Camping in Krimml",
    intro:
      "Ein ebener Stellplatz, Strom und Wasser, der freie Eintritt zu den Wasserfällen — und das ganze Hotel mit Wellness und Küche gleich nebenan.",
    features: [
      {
        title: "Erste Reihe fußfrei",
        text: "Ebene Stellplätze mit Bergblick, geeignet für Wohnmobil, Camper, Auto mit Dachzelt oder das klassische Zelt.",
        image: { src: `${IMG}/gallery-6548b2bf93.webp`, alt: "Wohnmobile am Wasserfall Camping vor Bergen und Wasserfall" },
      },
      {
        title: "Strom, Wasser & Ortstaxe inklusive",
        text: "Im Sonderpreis von € 45 pro Nacht für ein bis zwei Personen sind Strom, Wasser und die Ortstaxe bereits enthalten.",
        image: { src: `${IMG}/gallery-339884ab69.webp`, alt: "Blick von oben über die Stellplätze des Wasserfall Campings" },
      },
      {
        title: "Eintritt zu den Wasserfällen",
        text: "Der tägliche Eintritt zu den Krimmler Wasserfällen gehört für Campgäste ebenso dazu wie Wanderkarte und Urlaubsinfo.",
        image: { src: `${IMG}/gallery-f3fa850026.webp`, alt: "Die Krimmler Wasserfälle stürzen über die bewaldeten Felsen" },
      },
      {
        title: "Wellnessbad im Hotel",
        text: "Hallenbad, Außenpool und Saunen des 4-Sterne-Hotels kannst du als Campgast gegen Aufpreis mitnutzen.",
        image: { src: `${IMG}/gallery-839fc5c018.webp`, alt: "Hallenbad mit Felsgrotte im Hotel Krimmlerfälle" },
      },
      {
        title: "Frühstück & Restaurant",
        text: "Pinzgauer Küche im Hotelrestaurant und ein Frühstücksangebot machen den Campingtag rundum bequem.",
        image: { src: `${IMG}/amenity-d8b6f5cac6.webp`, alt: "Wiener Schnitzel mit Petersilkartoffeln aus der Hotelküche" },
      },
      {
        title: "Anmeldung an der Rezeption",
        text: "Du meldest dich direkt an der Hotelrezeption an — persönliche Betreuung vor Ort, Zahlung bequem in bar.",
        image: { src: `${IMG}/gallery-8eb6d87112.webp`, alt: "Das Hotel Krimmlerfälle mit der Rezeption für die Campgäste" },
      },
    ],
  },

  kinder: {
    heading: "Kinder willkommen",
    intro:
      "Vom Spielzimmer im Hotel bis zu den Wanderwegen vor der Tür — in Krimml ist für die Kinder den ganzen Tag etwas los.",
    features: [
      {
        title: "Spielzimmer im Hotel",
        text: "Ein eigener Spielraum mit Spielen und Kuschelecke sorgt bei den Kleinen auch an Regentagen für gute Laune.",
        image: { src: `${IMG}/gallery-6326a3c77e.webp`, alt: "Buntes Spielzimmer mit Spielmatten im Hotel Krimmlerfälle" },
      },
      {
        title: "Wandern mit Kindern",
        text: "Rund um Krimml führen leichte Wege durch Almwiesen — ideal für kleine Entdeckerinnen und Entdecker.",
        image: { src: `${IMG}/activity-47a6c3f45b.webp`, alt: "Kinder laufen fröhlich über einen Wanderweg in den Bergen" },
      },
      {
        title: "Familienzeit in den Bergen",
        text: "Gemeinsame Wanderungen in der Nationalparkregion Hohe Tauern bleiben den Kindern lange in Erinnerung.",
        image: { src: `${IMG}/hero-440e1bf812.webp`, alt: "Familie wandert auf einem Bergweg hoch über Krimml" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um dein Camping",
    intro:
      "Wasserfälle, Wanderwege und im Winter Skipisten — die Nationalparkregion und die Zillertal Arena beginnen direkt am Platz.",
    items: [
      {
        title: "Wandern im Nationalpark",
        text: "Über 80 km Wanderwege rund um Krimml, vom Wasserfallweg bis zum Krimmler Tauernhaus in dreieinhalb Stunden.",
        image: { src: `${IMG}/hero-e76b5ada05.webp`, alt: "Wanderer auf einem Gipfel in den Hohen Tauern" },
      },
      {
        title: "Wellness & Hohe Tauern Health",
        text: "Der Sprühnebel der Wasserfälle gilt als Naturheilmittel — im Hotel ergänzt durch Wellness und Massagen.",
        image: { src: `${IMG}/gallery-200b86dd1e.webp`, alt: "Gesichtsmassage im Wellnessbereich des Hotels Krimmlerfälle" },
      },
      {
        title: "Skifahren in der Zillertal Arena",
        text: "Im Winter liegt die Zillertal Arena vor der Tür — Pistenspaß im Winterparadies der Region.",
        image: { src: `${IMG}/gallery-5ef1296801.webp`, alt: "Zwei Skifahrer vor verschneiten Gipfeln" },
      },
      {
        title: "Schneeschuhwandern",
        text: "Abseits der Pisten führen Schneeschuhtouren durch die tief verschneite Winterlandschaft der Hohen Tauern.",
        image: { src: `${IMG}/activity-9f7e66168b.webp`, alt: "Schneeschuhwanderin in der sonnigen Winterlandschaft" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Krimml",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Gerlos Straße (B165) erreichst du Krimml aus dem Zillertal oder aus dem Salzburger Pinzgau — der Platz liegt in Oberkrimml.",
      },
      {
        title: "Mit der Bahn",
        text: "Die Pinzgauer Lokalbahn endet in Krimml; ab Zell am See bringt sie dich gemütlich ins Oberpinzgau.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg und Innsbruck liegen jeweils rund zwei Stunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Krimml in Bildern",
    headingEmphasis: "Krimml",
    intro:
      "Stellplatz, Bergwelt und die Annehmlichkeiten des Hotels — ein paar Eindrücke vom Wasserfall Camping.",
    tag: "Sommer & Winter",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-768d8b484b.webp`, alt: "Das Wasserfall Camping im grünen Krimmler Tal" },
      { src: `${IMG}/gallery-8a5d1a4c08.webp`, alt: "Ruheraum mit Sauna im Wellnessbereich des Hotels" },
      { src: `${IMG}/gallery-ab211b4619.webp`, alt: "Frisch angerichtetes Fischgericht aus der Hotelküche" },
      { src: `${IMG}/gallery-7a2c32cef5.webp`, alt: "Das Oberpinzgau rund um Krimml von oben" },
    ],
  },

  booking: {
    heading: "Bereit für dein Wasserfall-Camping?",
    headingEmphasis: "Wasserfall-Camping",
    intro:
      "Wähle Zeitraum und Personen — die Anmeldung läuft über die Hotelrezeption, Familie Schöppl meldet sich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Sonderpreis € 45 / Nacht für 1–2 Personen inkl. Strom, Wasser, Ortstaxe, täglichem Wasserfall-Eintritt & Wanderkarte. Je weitere Person € 10, Kind (0–14 J.) € 6, Haustier € 5 pro Tag. Dusche im Hotel € 3,50, Wellness € 22 p. P./Tag. Anmeldung an der Rezeption, nur Barzahlung.",
    highlight: {
      title: "Erste Reihe fußfrei",
      text: "Vom Stellplatz fällt der Blick direkt auf die Krimmler Wasserfälle.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz · Wohnmobil, Camper & Zelt", perNight: 45, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.22191, lng: 12.17546, approx: true },
    tel: "+43 (0) 6564 – 7203",
    telHref: "tel:+4365647203",
    mail: "info@krimmlerfaelle.at",
    facebook: "https://www.facebook.com/profile.php?id=100063654096357",
    adresse: "Oberkrimml 42 · 5743 Krimml · Salzburger Land",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default krimmlerfaelle;
