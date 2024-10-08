# tic-tac-toe pseudocode for reference
1) Define the required variables used to track the state of the game.

2) Store cached element references.

3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

4) The state of the game should be rendered to the user.

5) Define the required constants.

6) Handle a player clicking a square with a `handleClick` function.

7) Create Reset functionality.

# My own psuedocode outline

1. create the needed variables
  - a variable of the current scene
  - a variable for the current location of the dialogue
  - an array for the inventory

2. create the needed constants
  - an object that saves clickable items/puzzles in relation to the scene they display, as well as in id
  - an object that saves the puzzles and its id
  - a test dialogue array

3. set up the HTML
  - Background
  - time tracker
  - dialogue box
  - sprites
  - objects

4. create the needed caches
  - dialogue box
  - inventory
  - time tracker
  - puzzles
  - items

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

### Psuedocode

- I need to create three variables, one is for the current scene, it keeps track of what scene are we in right now. The second is for the current location in the dialogue, each scene is going to have multiple sentences, this variable is going to keep track of it. The last one is an array that represents the inventory, it will change during the game play as it shows what items does the player have

- I need to create an object that saves clickable items in relation to the scene each displays, as well as in id. The id will be used in a function that will make a scene or a change happen when two items are clicked one after the other. the scene id will be used in a function that triggers the scene when the item is clicked. I also need an object that saves the puzzles and its id, using the id I am able to call the correct function for each puzzle. Then i need some test scenes with test dialogue and sprites to keep in place of the script until i have the functionality done and can add actual scenes, the scenes are saved in a constant object with the dialogue, scene id, and sprite. Lastly, I need an object that keeps the ids of related objects so later they can be combined to cause a change

- The next step is to set up the HTML with a test Background, a test element for the time tracker, a test dialogue box, test sprites, test objects and test puzzle items. After making the functionality all of these objects will be replaced by the actual elements in the game.

- Afterwards I should create a cached element for the dialogue box so i can display dialogue in it. a cached element for the inventory because I will need to display the changes in the inventory array somewhere, a cached element for the time tracker to display how much time is left, and a cached element for objects and puzzles together, reference tic-tac-toe sqr elements for these.

- Now I can start working on functions. I must create a function that starts the game and the variables to the initial state.

- I need a function that tracks clicks, if it was just a display item, it will show the scene associated with the item by the scene's id. if it was an interactable puzzle, it will call the function of the specific puzzle, and if it was an item that can be kept in the inventory, it will call a function that pushes it to the inventory 

- I need a function that displays the dialogue using the scene number variable to loop in the scene and attach it to the dialogue box cached element. It should also display each sprite associated with the scene

- There should be a function that accepts two parameters (ids) and when it receives a specific combination, which references the combinations object, it does some sort of change, the change depends on what these two items are.

- I also need a function that keeps track of the change in time that gets called after the first scene ends. When the time ends, it displays a losing scene/image

- One I'm finally done with all of that, I can replace the test objects with the actual elements that will show up in the game

### level up

- If I'm done and have enough time, I want to create a constant that has a number that can be compared to the current time to determine when is the player running late. It will be attached to a part of the time tracker function so when the player gets to this number, a small scene will display to tell the player they're running late, and I can add to the timer function the ability to change a shape or color when the time is running out

- I can then add new HTML elements, a skip button in the dialogue box, a pause button and a button to change the room. for the skip button, I can create a function that sets the dialogue location variable to the end of the scene to skip the scene. for the pause button, there could be pause function that stops the timer,would also likely display a specific screen. The changing room button  will take the user to a new room (maybe in a new HTML?)

[gameplay plan](https://app.milanote.com/1SXQNl14vulZ3U/game-plan)