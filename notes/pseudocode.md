# tic-tac-toe pseudocode for reference
1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

4) The state of the game should be rendered to the user.

5) Define the required constants.

6) Handle a player clicking a square with a `handleClick` function.

7) Create Reset functionality.

# My own psuedocode

1. create the needed variables
  - a variable of the current scene
  - a variable for the current location of the dialogue
  - an array for the inventory

2. create the needed constants
  - an object that saves clickable items/puzzles in relation to the scene they display, as well as in id
  - an object that saves the puzzles and its id
  - a test dialogue array

3. create the needed caches
  - dialogue box
  - inventory
  - time tracker

4. set up the HTML
  - Background
  - time tracker
  - dialogue box
  - sprites
  - objects

5. Create a function that starts the game and the variables

6. create a function that tracks clicks, if it was just a display item, it will show the scene associated with the item. if it was an interactable puzzle, it will call the function of the specific puzzle, and if it was an item that can be kept in the inventory, it will call a function that saves it at the inventory 

7. create a function that displays the dialogue

8. create a function that displays sprites

9. create a function that accepts two parameters (ids) and when it receives a specific combination it does some sort of change

10. create a function that keeps track of the change in time that starts with the start of the game play and not in the opening scene, when the time ends, it displays a losing scene/image

11. write the actual script

# level up added features
12. create the needed constants
  - a constant that has a number that can be compared to the current time to determine when is the player running late

13. add the needed HTML elements
  - a skip button in the dialogue box
  - a pause button
  - a button to change the room

14. create a function that sets the dialogue location variable to the end of the scene to skip the scene

15. create a pause function that stops the timer, would also likely display a specific screen

16. a function that takes the user to a new room (maybe in a new HTML?)

17. add to the timer function the ability to change a shape or color when the time is running out