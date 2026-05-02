import {
  highlightFirstVid,
  highlightSecondVid,
  highlightThirdVid,
  highlightFourthVid,
} from "../utils";

export const navLists = [
  "Modelle",
  "Elektromobilität",
  "Kaufen & leasen",
  "Auto Welt",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Neue Klimasteuerung.",
      "Intelligent. Präzise.",
      "Maximaler Komfort bei jeder Fahrt.",
    ],
    video: highlightFirstVid,
    videoDuration: 11,
  },
  {
    id: 2,
    textLists: ["Neues Design.", "Markant. Kraftvoll.", "Unverwechselbar RS."],
    video: highlightSecondVid,
    videoDuration: 10,
  },
  {
    id: 3,
    textLists: [
      "Der neue RS Sport.",
      "Geboren für Performance.",
      "Bereit für jede Herausforderung.",
    ],
    video: highlightThirdVid,
    videoDuration: 8,
  },
  {
    id: 4,
    textLists: [
      "Im Schnee. Unter Extrembedingungen.",
      "Schneller als erwartet.",
      "RS. Jenseits aller Grenzen.",
    ],
    video: highlightFourthVid,
    videoDuration: 12,
  },
];



export const models = [
  
  {
    id: 1,
    title: "Auto 1 - Black",
    type: "car1",
    
    color: ["#2b2b2b"],
  },
  {
    id: 2,
    title: "Auto 1 - White",
    type: "car1",
    
    color: ["#ffffff"],
  },

  {
    id: 3,
    title: "Auto 1 - Red",
    type: "car1",
    
    color: ["#ff3b3b"],
  },

  {
    id: 4,
    title: "Auto 1 - Silver",
    type: "car1",
    
    color: ["#c0c0c0"],
  },


  
  {
    id: 5,
    title: "Auto 2 - Black",
    type: "car2",
    
    color: ["#2b2b2b"],
  },

  {
    id: 6,
    title: "Auto 2 - White",
    type: "car2",
    
    color: ["#ffffff"],
  },

  {
    id: 7,
    title: "Auto 2 - Red",
    type: "car2",
    
    color: ["#ff3b3b"],
  },
  {
    id: 8,
    title: "Auto 2 - Silver",
    type: "car2",
    
    color: ["#c0c0c0"],
  },
];


export const packs = [
  { label: "Model1", value: "car1" },
  { label: "Model2", value: "car2" },
];


export const footerLinks = [
  "Datenschutz ",
  "Nutzungsbedingungen",
  "Verkaufsbedingungen",
  "Rechtliches ",
  "Sitemap ",
];