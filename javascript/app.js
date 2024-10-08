// variables
let currentScene, currentLine, inventory

// constants
const clickableItems = [
  // MVP
  {item: "library", scene: ""},
  
  {item: "closet", scene: ""},
  {item: "paperHalf_1", scene: ""},
  {item: "shoes", scene: ""},
  {item: "paperHalf_2", scene: ""},

  {item: "wardrobe", scene: ""},
  {item: "fingerprintsKit", scene: ""},


  // level up
  {item: "book", scene: ""},
  {item: "paperWithAnswerKey", scene: ""},

  {item: "fridge", scene: ""},
  {item: "laptopPassword", scene: ""},
  {item: "fridgeCloseUp", scene: ""},
  {item: "coffee", scene: ""},

  {item: "bedroom", scene: ""},
  {item: "bed", scene: ""},
  {item: "xenoPhone", scene: ""},
]

const puzzles = [
  // MVP
  {item: "briefCase"},
  {item: "fingerPrintReader"},
  {item: "laptop"},

  // level up
  {item: "numberPad"},
  {item: "phone"},
]

const mergeableItems = [
  // MVP
  ["paperHalf_1", "paperHalf_2"],
  ["fingerprintsKit", "laptop"],
  ["fingerprintsKit", "fingerPrintReader"],
  ["fingerprintsKit", "numberPad"],

  // level up
  ["fingerprintsKit", "coffee"],
  ["fingerprintsKit", "xenoPhone"],
]

// cached elements
const dialogueElement = document.querySelector("#dialogueBox")

console.dir(dialogueElement);