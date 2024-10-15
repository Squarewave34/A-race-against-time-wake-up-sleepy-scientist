/*-------------------------------- script --------------------------------*/
const script= [
  [
    {line: "this is a test line", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')"},
    {line: "this line makes sure i can keep on moving with script", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')"},
    {line: "and this is my last test for scene 0", spriteLeft:"url('../assets/Senku_test.png')", spriteRight:"url('../assets/Gen_test.png')"},
  ],

  [
    {line: "guess what? scene 2 starts here", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "You are far too nice, but it has a price", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "you reveal your name?", spriteLeft:"", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "and you let him live.", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "ruthlessness is mercy upon ourselves", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "we took no pleasure in his pain", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:"url('../assets/Senku_test.png')"},
    {line: "the line between naivety and hopefulness is almost invisible", spriteLeft:"url('../assets/Gen_test.png')", spriteRight:""},
  ],

  [
    {line: "when does a ripple become a tidal wave", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "when does a man become a monster", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "I am your darkest moment", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "All i gotta do is open this bag", spriteLeft:"", spriteRight: ""},
  ],

  [
    {line: "captain. I have something that I must confess", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: ""},
    {line: "something that I must get off my chest", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "go make sure this island is secure",spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "where's the rest of your crew?", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "we came across a palace, inside we heard a voice", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "what did this palace hide?", spriteLeft:"url('../assets/Gen_test.png')", spriteRight: "url('../assets/Senku_test.png')"},
    {line: "but this was a hell of a twist, cause we are weak to a power like this", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
  ],

  [
    {line: "I see a song of past romance", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "I see the sacrifice of man", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},
    {line: "I see portrayals of betrayal and a brother's final stand", spriteLeft:"url('../assets/Senku_test.png')", spriteRight: "url('../assets/Gen_test.png')"},

  ],
]

/*------------------------ Cached Element References ------------------------*/
// classes
const itemElement = document.querySelectorAll(".item")
const dialogueConstructionElement = document.querySelectorAll(".dialogue")
const puzzleElement = document.querySelectorAll(".puzzle")
const inventoryElement = document.querySelectorAll(".inventory")
const SceneElements = document.querySelectorAll(".scenes")
const mainRoomElement = document.querySelectorAll(".room1")
const showBiggerBackgroundElement = document.querySelectorAll(".showsANewScene")

// UI/UX
const dialogueElement = document.querySelector("#dialogueBox")
const timeTrackerElement = document.querySelector("#timeTracker")
const backButtonElement = document.querySelector("#backButton")
const nextButtonElement =document.querySelector("#nextButton")
const leftSpriteElement = document.querySelector("#spriteLeft")
const rightSpriteElement = document.querySelector("#spriteRight")

// scenes
const librarySceneElement = document.querySelectorAll(".libraryScene")
const briefCasePuzzleElement = document.querySelectorAll(".briefCaseScene")
const briefCaseOpenElement = document.querySelectorAll(".briefCaseOpenScene")
const laptopOpenSceneElement = document.querySelectorAll(".briefCaseOpenLaptopOpenScene")
const closetSceneElement = document.querySelectorAll(".closetScene")
const shoesSceneElement = document.querySelectorAll(".shoesScene")
const biggerShoeElement = document.querySelectorAll(".shoesCloserScene")
const wardrobeSceneElement = document.querySelectorAll(".wardrobeScene")
const wardrobeOpenDoorSceneElement = document.querySelectorAll(".wardrobeOpenDoorScene")
const boxSceneElement = document.querySelectorAll(".boxScene")
const numberPadElement = document.querySelectorAll(".numberPadScene")
const paperHalf_1Element = document.querySelector("#paperHalf_1Full")
const paperHalf_2Element = document.querySelector("#paperHalf_2Full")
const losingScreenElement = document.querySelector("#losingScreen")

// puzzles
const numberPuzzleElement = document.querySelectorAll(".number")

/*-------------------------------- variables --------------------------------*/
let currentScene, inventory, firstClickedItem, secondClickedItem, count = 600


/*-------------------------------- Constants --------------------------------*/
const clickableItems = [
  // MVP
  {item: "library", inventoryItem: false, willBeInventoryItem: false, scene: "0", background: librarySceneElement},
  {item: "briefCase", inventoryItem: false, willBeInventoryItem: false, scene: "8", background: briefCasePuzzleElement},
  {item: "laptop", inventoryItem: false, willBeInventoryItem: false, scene: "9", background: laptopOpenSceneElement},
  {item: "keyboard", inventoryItem: false, willBeInventoryItem: false, scene: "3", background: laptopOpenSceneElement},
  
  {item: "closet", inventoryItem: false, willBeInventoryItem: false, scene: "1", background: closetSceneElement},
  {item: "paperHalf_1", inventoryItem: false, willBeInventoryItem: true, scene: "2", background: paperHalf_1Element},

  {item: "shoes", inventoryItem: false, willBeInventoryItem: false, scene: "3", background: shoesSceneElement},
  {item: "shoesCloseUp", inventoryItem: false, willBeInventoryItem: false, scene: "5", background: biggerShoeElement},
  {item: "paperHalf_2", inventoryItem: false, willBeInventoryItem: true, scene: "4", background: paperHalf_2Element},

  {item: "wardrobe", inventoryItem: false, willBeInventoryItem: false, scene: "2", background: wardrobeSceneElement},
  {item: "wardrobeDoor", inventoryItem: false, willBeInventoryItem: false, scene: "6", background: wardrobeOpenDoorSceneElement},
  {item: "fingerprintsKit", inventoryItem: false, willBeInventoryItem: true, scene: "1", background: closetSceneElement},
  {item: "box", inventoryItem: false, willBeInventoryItem: false, scene: "7", background: boxSceneElement},

  {item: "numberPad", inventoryItem: false, willBeInventoryItem: false, scene: "4", background: numberPadElement},

  // level up
  {item: "book", inventoryItem: false, willBeInventoryItem: false, scene: "" },
  {item: "paperWithAnswerKey", inventoryItem: true, scene: "" },

  {item: "fridge", inventoryItem: false, willBeInventoryItem: false, scene: "" },
  {item: "laptopPassword", inventoryItem: true, scene: "" },
  {item: "fridgeCloseUp", inventoryItem: false, willBeInventoryItem: false, scene: "" },
  {item: "coffee", inventoryItem: false, willBeInventoryItem: false, scene: "" },

  {item: "bedroom", inventoryItem: false, willBeInventoryItem: false, scene: "" },
  {item: "bed", inventoryItem: false, willBeInventoryItem: false, scene: "" },
  {item: "xenoPhone", inventoryItem: false, willBeInventoryItem: false, scene: "" },
]

const puzzles = [
  // MVP
  {item: "briefCase", function: "briefCaseFunction", clickable: true},
  {item: "fingerPrintReader", function: "fingerPrintReaderFunction", clickable: true},
  {item: "laptop", function: "laptopFunction", clickable: true},
  {item: "numberPad", function: "numberPadFunction", clickable: true},

  // level up
  {item: "phone", function: "phoneFunction"},
]

const mergeableItems = [
  // MVP
  ["paperHalf_1", "paperHalf_2"],
  ["fingerprintsKit", "keyboard"],
  ["fingerprintsKit", "fingerPrintReader"],
  ["fingerprintsKit", "numberPad"],

  // level up
  ["fingerprintsKit", "coffee"],
  ["fingerprintsKit", "xenoPhone"],
  ["fingerprintsKit", "briefCase"],
]

const briefCaseNumbers = [0, 0, 0, 0, 0, 0]
// const briefCaseWinningCombo = [7, 3, 6, 4, 6, 8]
const briefCaseWinningCombo = [1, 0, 0, 0, 0, 0]

/*----------------------------- puzzle functions -----------------------------*/
const unlockBriefCase = () => {
  show(briefCaseOpenElement)
  clickableItems[1].background=briefCaseOpenElement
}

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

const briefCaseFunction = (idx) => {
  if(briefCaseNumbers[idx]<9){
    briefCaseNumbers[idx]++
  }
  else{
    briefCaseNumbers[idx]=0
  }
  
  fillBriefCase()

  for(i=0; i<6; i++){
    if(briefCaseNumbers[i]!=briefCaseWinningCombo[i]){
      return
    }
  }
  unlockBriefCase()
}

const fingerPrintReaderFunction = () => {
  console.log("fingerPrintReaderFunction works");
}

/*-------------------------------- Functions --------------------------------*/

const losingScreen = (()=>{
  losingScreenElement.classList.remove("hide")
  hide(dialogueConstructionElement)
  hide(itemElement)
  hide(puzzleElement)
  hide(inventoryElement)
  hide(SceneElements)
  hide(mainRoomElement)
  hide(showBiggerBackgroundElement)
  backButtonElement.classList.add("hide")
  timeTrackerElement.classList.add("hide")
})

// reference: https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript#:~:text=let%20count%20%3D%2060%3B%20const%20timer,")%3B%20%7D%20%7D%2C%201000)%3B
const timer = (()=>{
  setInterval(function() {
    if(count != 0){
      count--
      timeTrackerElement.textContent=count
    }
    else if (count === 0) {
      clearInterval(timer);
      losingScreen()
      return
    }
  }, 1000);
})

const hide = (itemToHide) =>{
  itemToHide.forEach(item => {
    item.classList.add("hide")
  });
}

const show = (itemToShow) =>{
  itemToShow.forEach(item => {
    item.classList.remove("hide")
  });
}

const fillBriefCase = () => {
  for(i=0; i<6; i++){
    numberPuzzleElement[i].textContent=briefCaseNumbers[i]
  }
}

const init = () =>{
  // current scene is 0
  currentScene = 0
  // inventory is empty
  inventory = []
  // clicked item 1
  firstClickedItem = ""
  // clicked item 2
  secondClickedItem = ""
  // no dialogue
  hide(dialogueConstructionElement)
  // no scenes
  hide(SceneElements)
  // no back button
  backButtonElement.classList.add("hide")
  losingScreenElement.classList.add("hide")
  // starts the timer
  timer()

  fillBriefCase()

}

init()

const addToInventory = (item) =>{
  // it will push it into the inventory 
  inventory.push(item)
  // It will find it's index
  let inventoryId = inventory.findIndex((invItem)=>{
    return invItem===item
  })
  // and then it will display it into the inventory block with the same index
  inventoryElement[inventoryId+1].style.backgroundImage="url('../assets/Senku_test.png')"
  itemElement.forEach(element => {
    if(element.id===item){
      element.remove()
    }
  });
}

const mergeItems = (firstItem, secondItem) =>{
  for(i=0; i<mergeableItems.length; i++){
    if(mergeableItems[i][0]===firstItem && mergeableItems[i][1]=== secondItem || 
      mergeableItems[i][1]===firstItem && mergeableItems[i][0]=== secondItem){
      // here i will need to code each result independently i think
      firstClickedItem = ""
      secondClickedItem = ""
      return
    }
  }
  firstClickedItem = ""
  secondClickedItem = ""
}

const displayDialogue = (scenes, idx) =>{
  // it will take the scene and the current line index, if we're not yet at the end of the scene, show the line
  // and sprites
  
  if(idx!=script[scenes].length){
    dialogueElement.textContent=script[scenes][idx].line
    leftSpriteElement.style.backgroundImage=script[scenes][idx].spriteLeft
    rightSpriteElement.style.backgroundImage=script[scenes][idx].spriteRight
  }

  // if we're at the end of the scene, hide the dialogue elements and show the inventory, this is the part that
  // ends recursion 
  if(idx===script[scenes].length){
    hide(dialogueConstructionElement)
    show(inventoryElement)
  }

  // goes to the next line recursively
  // when the next button is clicked, it will increase the line index and call this function again
  nextButtonElement.addEventListener("click", ()=>{
    if(idx<script[scenes].length){
      idx++
      displayDialogue(scenes, idx)
    }
  })
}

const itemsWereClicked = (itemToSave) =>{
  let itemToShow = clickableItems.findIndex((item)=>{
    return item.item===itemToSave
  })

  if(itemToShow=!3){
    background = clickableItems[itemToShow].background
    background.classList.remove("hide")
    hide(mainRoomElement)
    backButtonElement.classList.remove("hide")
  }

  if(firstClickedItem===""){
    firstClickedItem=itemToSave
  }

  else if(firstClickedItem!="" || firstClickedItem!=itemToSave){
    secondClickedItem=itemToSave
    mergeItems(firstClickedItem, secondClickedItem)
  }
}

const directDisplayRoom = (clickedItem) =>{
  let itemScene = clickableItems.find((item)=>{
    return item.item===clickedItem.target.id
  })

  // itemSceneID will save the id of the scene this item triggers
  itemSceneID=itemScene.scene
  // it will also save the background of the scene
  itemSceneBackground=itemScene.background
  show(itemSceneBackground)
  hide(mainRoomElement)
  backButtonElement.classList.remove("hide")
}

const directDisplayItem = (clickedItem) =>{
  // it will find the specific item that was clicked by comparing the item name in the items array with the id
  // of the clicked element
  let itemScene = clickableItems.find((item)=>{
    return item.item===clickedItem.target.id
  })

  itemSceneID=itemScene.scene

  // if this item has inventoryItem= true, it is not a scene element, don't continue and go to inventory with the
  // name of the item
  if(itemScene.inventoryItem){
    addToInventory(itemScene.item)
    return
  }

  if(itemScene.willBeInventoryItem){
    itemScene.inventoryItem=true
  }

  // it will hide the inventory and items
  hide(inventoryElement)

  // and show the dialogue and background of this scene and the backButton
  show(dialogueConstructionElement)

  // finally, it will activate the function that will progress the scene
  displayDialogue(itemSceneID, 0)
}

/*----------------------------- Event Listeners -----------------------------*/
mainRoomElement.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    directDisplayRoom(event)
  })
})

showBiggerBackgroundElement.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    directDisplayRoom(event)
    element.classList.add("hide")
  })
  
})

itemElement.forEach((item)=>{
  item.addEventListener('click',(event)=>{
    if(event.target.id==="keyboard"){
      itemsWereClicked("keyboard")
      return
    }
    else{
      directDisplayItem(event)
    }
  })
})

backButtonElement.addEventListener("click", ()=>{
  // it will hide dialogue, scenes and itself, and show elements and the inventory. 
  hide(dialogueConstructionElement)
  hide(SceneElements)
  show(itemElement)
  show(mainRoomElement)
  show(inventoryElement)
  backButtonElement.classList.add("hide")
})

inventoryElement.forEach((invBlock, idx) => {
  if(invBlock.id==="inventoryBox"){}
  else{
    invBlock.addEventListener("click", ()=>{
      itemsWereClicked(inventory[idx-1])
    })
  }
});

numberPuzzleElement.forEach((element, idx)=>{
  element.addEventListener('click', ()=>{
    briefCaseFunction(idx)
  })
})