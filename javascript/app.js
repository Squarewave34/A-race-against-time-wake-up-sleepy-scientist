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
const winningScreenElement = document.querySelector("#winningScreen")

// puzzles
const numberPuzzleElement = document.querySelectorAll(".number")

/*-------------------------------- variables --------------------------------*/
let inventory, firstClickedItem, secondClickedItem, count


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

  {item: "fullPaper", inventoryItem: false, willBeInventoryItem: true, scene: "", img: "url('../assets/Gen_test.png')"},

  {item: "wardrobe", inventoryItem: false, willBeInventoryItem: false, scene: "2", background: wardrobeSceneElement},
  {item: "wardrobeDoor", inventoryItem: false, willBeInventoryItem: false, scene: "6", background: wardrobeOpenDoorSceneElement},
  {item: "fingerprintsKit", inventoryItem: false, willBeInventoryItem: true, scene: "1", background: closetSceneElement},
  {item: "box", inventoryItem: false, willBeInventoryItem: false, scene: "7", background: boxSceneElement},

  {item: "numberPad", inventoryItem: false, willBeInventoryItem: false, scene: "4", background: numberPadElement},
]

const inventoryItems = [
  {item:"paperHalf_1", img:"url('../assets/Senku_test.png')", background: paperHalf_1Element},
  {item:"paperHalf_2", img:"url('../assets/Senku_test.png')", background: paperHalf_2Element},
  {item:"fullPaper", img:"url('../assets/Gen_test.png')", background: "url('../assets/Gen_test.png')"},
  {item:"fingerprintsKit", img:"url('../assets/Senku_test.png')"},
  {item:"fingerprint", img:"url('../assets/Gen_test.png')", background: "url('../assets/Senku_test.png')"}
]

const briefCaseNumbers = [0, 0, 0, 0, 0, 0]
// const briefCaseWinningCombo = [7, 3, 6, 4, 6, 8]
const briefCaseWinningCombo = [1, 0, 0, 0, 0, 0]

/*----------------------------- briefcase functions -----------------------------*/
const unlockBriefCase = () => {
  show(briefCaseOpenElement)
  clickableItems[1].background=briefCaseOpenElement
}

const fillBriefCase = () => {
  for(i=0; i<6; i++){
    numberPuzzleElement[i].textContent=briefCaseNumbers[i]
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

/*-------------------------------- Functions --------------------------------*/
const showEndScreen= ((result) =>{
  result.classList.remove("hide")
  hide(dialogueConstructionElement)
  hide(itemElement)
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
      showEndScreen(losingScreenElement)
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

const resetClickedItems = () =>{
  firstClickedItem= {name: "", idx:""}
}

const init = () =>{
  inventory = []
  firstClickedItem = {name: "", idx:""}
  secondClickedItem = {name: "", idx:""}
  count = 600
  hide(dialogueConstructionElement)
  hide(SceneElements)
  backButtonElement.classList.add("hide")
  losingScreenElement.classList.add("hide")
  winningScreenElement.classList.add("hide")
  timer()
  fillBriefCase()
}

init()

const showInventory = () =>{
  for(i=0; i<inventory.length; i++){
    inventoryElement[i+1].style.backgroundImage=inventory[i].img
  }
  for(i=inventory.length; i<8; i++){
    inventoryElement[i+1].style.backgroundImage=""
  }
}

const addToInventory = (itemToAdd) =>{
  let inventoryItemID = inventoryItems.findIndex((inventoryItem)=>{
    return inventoryItem.item===itemToAdd
  })

  inventory.push(inventoryItems[inventoryItemID])

  itemElement.forEach(element => {
    if(element.id===itemToAdd){
      element.remove()
    }
  });

  showInventory()
}

const mergeItems = (firstItem, secondItem)=>{
  if(firstItem.name==="paperHalf_1" && secondItem.name==="paperHalf_2" || firstItem.name==="paperHalf_2" && secondItem.name==="paperHalf_1"){
    inventory.splice(firstItem.idx, 1)
    inventory.splice(secondItem.idx, 1)
    inventory.push(inventoryItems[2])
  }

  if(firstItem.name==="fingerprintsKit" && secondItem.name==="keyboard"){
    inventory.push(inventoryItems[4])
  }

  if(firstItem.name==="fingerprint" && secondItem.name==="fingerprintReader"){
    showEndScreen(winningScreenElement)
  }

  resetClickedItems()
  showInventory()
}

const displayDialogue = (scenes, idx) =>{
  if(idx!=script[scenes].length){
    dialogueElement.textContent=script[scenes][idx].line
    leftSpriteElement.style.backgroundImage=script[scenes][idx].spriteLeft
    rightSpriteElement.style.backgroundImage=script[scenes][idx].spriteRight
  }

  if(idx===script[scenes].length){
    hide(dialogueConstructionElement)
    show(inventoryElement)
  }

  nextButtonElement.addEventListener("click", ()=>{
    if(idx<script[scenes].length){
      idx++
      displayDialogue(scenes, idx)
    }
  })
}

const itemsWereClicked = (itemToSave, idx) =>{
  if(itemToSave.item==="fingerprintsKit"){
    if(firstClickedItem.name===""){
      firstClickedItem.name=itemToSave.item
      console.log("first");
      return
    }
  }

  if(itemToSave==="keyboard"){
    if(firstClickedItem.name!=""){
      console.log("second");
      secondClickedItem.name="keyboard"
    }
    mergeItems(firstClickedItem, secondClickedItem)
    return
  }

  if(itemToSave==="fingerprintReader"){
    if(firstClickedItem.name!=""){
      console.log("second");
      secondClickedItem.name="fingerprintReader"
    }
    mergeItems(firstClickedItem, secondClickedItem)
    return
  }

  if(itemToSave.item==="fingerprint"){
    if(firstClickedItem.name===""){
      firstClickedItem.name=itemToSave.item
      console.log("first");
      return
    }
  }
  
  let searchItem = itemToSave.item
  
  let itemToShow = inventoryItems.findIndex((invElem)=>{
    return invElem.item === searchItem
  })

    background = inventoryItems[itemToShow].background
    background.classList.remove("hide")
    hide(mainRoomElement)
    backButtonElement.classList.remove("hide")

  if(firstClickedItem.name===""){
    firstClickedItem.name=itemToSave.item
    firstClickedItem.idx=idx
    console.log("first");
    return
  }

  if(firstClickedItem.name!=""){
    secondClickedItem.name=itemToSave.item
    secondClickedItem.idx=idx
    console.log("sec");
    mergeItems(firstClickedItem, secondClickedItem)
  }
}

const directDisplayRoom = (clickedItem) =>{
  let itemScene = clickableItems.find((item)=>{
    return item.item===clickedItem.target.id
  })

  itemSceneID=itemScene.scene
  itemSceneBackground=itemScene.background
  show(itemSceneBackground)
  hide(mainRoomElement)
  backButtonElement.classList.remove("hide")
}

const directDisplayItem = (clickedItem) =>{
  let itemScene = clickableItems.find((item)=>{
    return item.item===clickedItem.target.id
  })
  
  itemSceneID=itemScene.scene
  
  if(itemScene.inventoryItem){
    addToInventory(itemScene.item)
    return
  }
  
  if(itemScene.willBeInventoryItem){
    itemScene.inventoryItem=true
  }
  
  hide(inventoryElement)
  show(dialogueConstructionElement)  
  displayDialogue(itemSceneID, 0)
}

/*----------------------------- Event Listeners -----------------------------*/
mainRoomElement.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    resetClickedItems()
    directDisplayRoom(event)
  })
})

showBiggerBackgroundElement.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    resetClickedItems()
    directDisplayRoom(event)
    element.classList.add("hide")
  })
})

itemElement.forEach((element)=>{
  element.addEventListener('click',(event)=>{
    if(event.target.id==="keyboard"){
      itemsWereClicked("keyboard")
      return
    }
    else if(event.target.id==="fingerprintReader"){
      itemsWereClicked("fingerprintReader")
      return
    }
    else{
      resetClickedItems()
      directDisplayItem(event)
    }
  })
})

backButtonElement.addEventListener("click", ()=>{
  resetClickedItems()
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
      itemsWereClicked(inventory[idx-1], idx-1)
    })
  }
});

numberPuzzleElement.forEach((element, idx)=>{
  element.addEventListener('click', ()=>{
    resetClickedItems()
    briefCaseFunction(idx)
  })
})