## object 

### code

```
const person = {
  name:"Asagiri Gen",
  age:"22",
  birthday:"March, 4th 2002",
  isHappy: false,
  pets:[{name:"Kittknow"}, {name:"Latte"}, {name:"Julian"}],

  greet(name){
    console.log(`hello ${name}, my name is Asagiri gen`);
  },
}
```
> for reference

### clg
```
console.log(person.pets[2].name);
```
> if you want to access a specific object in the array

## DOM

### caches

```
const titleElement = document.querySelector("#main-title");
const bodyElement = document.body;
const h2Element = document.createElement("h2");
const commentElements = document.querySelectorAll("li");
```
> querySelector, querySelectorAll, document.[part of the document such as head or body], createElement

`something.textContent`
`something.style.specificAttribute`
`something.removeAttribute`
`something.setAttribute`
`something.classList.add`
`something.classList.replace`
`something.remove`

`paragraphElement.after(h2Element);`
> to put the thing you created after a specific thing

## DOM events
```
likeButtonElement.addEventListener("click", handleReaction)

dislikeButtonElement.addEventListener("click", handleReaction)

commentButtonElement.addEventListener("click", ()=>{

  // if it's not a nothing
  if(inputElement.value){
  // new element to hold the new comment
  const commentElement = document.createElement("li")
  // set the input to the new element 
  commentElement.textContent = inputElement.value
  // make it appear on page
  commentListElement.appendChild(commentElement)
  // make the input nothing
  inputElement.value = ""
  }else{
    alert("Field cannot be empty")
  }

})
```
> these are the three types

## For loops

### map
```
const newInstructors = instructors.map((instructor)=>{
  return `${instructor} is awesome`
})
```

### filter
```
const odds = numbers.filter((number)=>{
  return number%2;
})

const wordsEndingWithE = words.filter((word)=>{
  return word[word.length-1]==="e"
})
```

### find
```
const findAWhiteCar = cars.find((car)=>{
  return car.color==="white"
})
```

### some
```
const isThereARedCar = cars.some((car)=>{
  return car.color==="red"
})
```

### reduce
```
let sumTotal = numbers.reduce((acc, num)=>{
  return acc+num
}, 0)

let votes = ['Yes', 'No', 'Yes', 'Yes', 'No', 'maybe', 'no answer', 'idk', 'idk'];

let tally = votes.reduce((acc, vote)=>{
  // you use acc[vote] means that it will check out the vote variations for itself
  if(acc[vote]){
    acc[vote]++
  }
  else {
    acc[vote] = 1
  }

  return acc
},{})
```