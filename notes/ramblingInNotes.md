> here i will mess around to find out what i need by rambling.

## generally:
the main things in the game are
- the dialogue
- the clickable items
- the inventory and the things that can be kept in it
- the UX/UI

the extra things i can add to the mvp once its done
- more puzzles
- more rooms
> these i will do when the time comes because im running out of time

## dialogue
### main:
- an element to display the dialogue which can be clicked
- sprites
- a script
- a variable representing the current place in dialogue
- a variable that represents the current scene
- a method that displays the dialogue

### level up:
- a method that sets the dialogue location variable to the end of the scene

### level up stage 2:
- a method that can go back in the dialogue
- a method that can display past dialogue in a history section

## clickable items
### main:
- variable for items that i can click
- a function that displays certain scenes when an object is clicked
- if the object can be kept in the inventory, i need a function that saves it in the inventory
- if the object can't be saved in the inventory return the previous state
- for some objects, i need specific functions for each object tho display some sort of change, for example: a number pad that displays the entered number and either allows us to get in or keeps the door shut

### level up stage 2:
- for some objects, a function that allows a person to see a different image of an object based on where they click

## inventory
### main:
- the function that shows the item from the inventory is likely the same as that that displays it from the background
- a function that accepts two parameters and when it receives a specific combination it does some sort of change

### level up stage 2:
- a function that allows the user to rearrange the items in the inventory (not important so im pushing it back)

## UI/UX
### main:
- an HTML element for the inventory likely ties to an array
- an element for keeping track of time
- a function that keeps track of the change in time that starts with the start of the game play and not before that, when the time ends, it displays a losing scene/image
- a background


### level up:
- a pause button
- a function that stops the timer
- a button/ place to click to take the user to a new room
- a function that takes me to a new room (a new HTML?)
- a change in the element that keeps track of time to show that the user is close to losing
- an edit to the time tracker to make it change the element or at least its color to show loss of time

### level up stage 2:
- an element that when clicked will trigger a function that displays a hint
- a button that displays the history
- a function that grabs the previous few lines of dialogue
- a button for the menu
- a function that displays the menu
  - a button to start a new game
    - a function that resets all the variables and returns to the beginning state 
  - a button to save the game
    - a function that does that