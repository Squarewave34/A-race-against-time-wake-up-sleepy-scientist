/*-------------------------------- variables --------------------------------*/
let currentScene, inventory

/*-------------------------------- Constants --------------------------------*/
const clickableItems = [
  // MVP
  {item: "library", inventoryItem: false, scene: "0"},
  
  {item: "closet", inventoryItem: false, scene: "1"},
  {item: "paperHalf_1", inventoryItem: true, scene: "2"},

  {item: "shoes", inventoryItem: false, scene: "3"},
  {item: "paperHalf_2", inventoryItem: true, scene: "4"},

  {item: "wardrobe", inventoryItem: false, scene: "2"},
  {item: "fingerprintsKit", inventoryItem: true, scene: "1"},


  // level up
  {item: "book", inventoryItem: false, scene: ""},
  {item: "paperWithAnswerKey", inventoryItem: true, scene: ""},

  {item: "fridge", inventoryItem: false, scene: ""},
  {item: "laptopPassword", inventoryItem: true, scene: ""},
  {item: "fridgeCloseUp", inventoryItem: false, scene: ""},
  {item: "coffee", inventoryItem: false, scene: ""},

  {item: "bedroom", inventoryItem: false, scene: ""},
  {item: "bed", inventoryItem: false, scene: ""},
  {item: "xenoPhone", inventoryItem: false, scene: ""},
]

const puzzles = [
  // MVP
  {item: "briefCase", function: "briefCaseFunction"},
  {item: "fingerPrintReader", function: "fingerPrintReaderFunction"},
  {item: "laptop", function: "laptopFunction"},

  // level up
  {item: "numberPad", function: "numberPadFunction"},
  {item: "phone", function: "phoneFunction"},
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

/*------------------------ Cached Element References ------------------------*/
// classes
const itemElement = document.querySelectorAll(".item")
const dialogueConstructionElement = document.querySelectorAll(".dialogue")
const puzzleElement = document.querySelectorAll(".puzzle")
const inventoryElement = document.querySelectorAll(".inventory")
const SceneElements = document.querySelectorAll(".scenes")

const librarySceneElement = document.querySelectorAll(".libraryScene")
const closetSceneElement = document.querySelectorAll(".closetScene")
const shoesSceneElement = document.querySelectorAll(".shoesScene")
const wardrobeSceneElement = document.querySelectorAll(".wardrobeScene")



// UI/UX
const dialogueElement = document.querySelector("#dialogueBox")
const timeTrackerElement = document.querySelector("#timeTracker")
const backButtonElement = document.querySelector("#backButton")
const nextButtonElement =document.querySelector("#nextButton")
const leftSpriteElement = document.querySelector("#spriteLeft")
const rightSpriteElement = document.querySelector("#spriteRight")

// scenes
// library
const briefCaseElement = document.querySelector("#libraryBriefCase")


/*-------------------------------- script --------------------------------*/
const script= [
  [
    {line: "this is a test line", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')", background:librarySceneElement},
    {line: "this line makes sure i can keep on moving with script", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')"},
    {line: "and this is my last test for scene 0", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')"},
  ],

  [
    {line: "guess what? scene 2 starts here", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')", background:closetSceneElement},
    {line: "You are far too nice, but it has a price", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "you reveal your name?", spriteLeft:"", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "and you let him live.", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "ruthlessness is mercy upon ourselves", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "we took no pleasure in his pain", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "the line between naivety and hopefulness is almost invisible", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:""},
  ],

  [
    {line: "when does a ripple become a tidal wave", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')", background:wardrobeSceneElement},
    {line: "when does a man become a monster", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "I am your darkest moment", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "All i gotta do is open this bag", spriteLeft:"", spriteRight: ""},
  ],

  [
    {line: "captain. I have something that I must confess", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "", background:shoesSceneElement},
    {line: "something that I must get off my chest", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "go make sure this island is secure",spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "where's the rest of your crew?", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "we came across a palace, inside we heard a voice", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "what did this palace hide?", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "but this was a hell of a twist, cause we are weak to a power like this", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
  ]
]

/*----------------------------- puzzle functions -----------------------------*/
// Calls each puzzle's function
const mapPuzzles = (functionId) =>{
  if(functionId==="briefCaseFunction"){
    briefCaseFunction()
  }

  if(functionId==="fingerPrintReaderFunction"){
    fingerPrintReaderFunction()
  }

  if(functionId==="laptopFunction"){
    laptopFunction()
  }

  if(functionId==="numberPadFunction"){
    numberPadFunction()
  }

  if(functionId==="phoneFunction"){
    phoneFunction()
  }
}

// puzzle functions
const briefCaseFunction = () => {
  console.log("briefCaseFunction works");
}

const fingerPrintReaderFunction = () => {
  console.log("fingerPrintReaderFunction works");
}

const laptopFunction = () => {
  console.log("laptopFunction works");
}

const numberPadFunction = () => {
  console.log("numberPadFunction works");
}

const phoneFunction = () => {
  console.log("phoneFunction works");
}

/*-------------------------------- Functions --------------------------------*/
// removes scenes
const hide = (itemToHide) =>{
  itemToHide.forEach(item => {
    item.classList.add("hide")
  });
}

// shows scenes
const show = (itemToShow) =>{
  itemToShow.forEach(item => {
    item.classList.remove("hide")
  });
}

// game initialization
const init = () =>{
  currentScene = 0
  inventory = []
  hide(dialogueConstructionElement)
  hide(inventoryElement)
  hide(SceneElements)

  backButtonElement.classList.add("hide")
}

init()

// Adds to inventory
const addToInventory = () =>{
  console.log("addToInventory works");
}

// shows sprites
const showSprites = (left, right) =>{
    leftSpriteElement.style.backgroundImage=left
    rightSpriteElement.style.backgroundImage=right
}

let test = 0
// displays the dialogue
const displayDialogue = (scenes, idx) =>{
  if(idx!=script[scenes].length){
    dialogueElement.textContent=script[scenes][idx].line
    showSprites(script[scenes][idx].spriteLeft, script[scenes][idx].spriteRight)
  }

  if(idx===script[scenes].length){
    hide(dialogueConstructionElement)
    show(inventoryElement)
  }

  // goes to the next line recursively
  nextButtonElement.addEventListener("click", ()=>{
    if(idx<script[scenes].length){
      idx++
      displayDialogue(scenes, idx)
    }
  })
}

// directs displayItems' functions
const directDisplayItem = (clickedItem) =>{
  let itemScene = clickableItems.find((item)=>{
    return item.item===clickedItem.target.id
  })

  itemSceneID=itemScene.scene
  itemSceneBackground=script[itemSceneID][0].background

  hide(inventoryElement)
  hide(itemElement)

  show(dialogueConstructionElement)
  show(itemSceneBackground)
  backButtonElement.classList.remove("hide")

  displayDialogue(itemSceneID, 0)

  if(itemScene.inventoryItem){
    addToInventory()
  }
}

// directs puzzles' functions
const startPuzzleFunction = (clickedPuzzle) => {
  let puzzleId = puzzles.find((puzzle)=>{
    return puzzle.item===clickedPuzzle.target.id
  })

  puzzleId = puzzleId.function
  mapPuzzles(puzzleId)
}

/*----------------------------- Event Listeners -----------------------------*/
// handles items clicks
itemElement.forEach((item)=>{
  item.addEventListener('click',(event)=>{
    directDisplayItem(event)
  })
})

// handles puzzles clicks
puzzleElement.forEach((puzzle)=>{
  puzzle.addEventListener('click',(event)=>{
    startPuzzleFunction(event)
  })
})

// handles backButtons
backButtonElement.addEventListener("click", ()=>{
  hide(dialogueConstructionElement)
  hide(SceneElements)
  show(itemElement)
  show(inventoryElement)
  backButtonElement.classList.add("hide")
})