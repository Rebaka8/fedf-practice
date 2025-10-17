import React, {useState} from 'react'
function Food(){
    const [foods,setfoods]=useState(["Apple", "Banana", "Carrot","Grapes"]);

    function handleAddFood(e){
const newFood = document.getElementById("foodInput").value;
{/* we are writing this line because when we typed something in the input bar and when we click on the butoon the typed data will should reset the button for seamless interaction */} 
document.getElementById("foodInput").value="";

setfoods(f =>[...f,newFood]);
    }

    function handleRemoveFood(index){
        //using uderscore indicates that the parameter being passed to the function is being ignored
       setfoods(foods.filter((_,i)=> i !==index)) 
       //foods.filter((_, i) => i !== index) creates a new array including every item except the one whose position matches index.
   // The underscore _ means we don’t care about the element value — only its index matters.
   // The function you give to filter() returns true to keep the item, or false to exclude it.

    }
   
    return(
<div>
    <h2>Lists of Foods </h2><br/>
  
<ul>
    {foods.map((food, index) => 
    <li key ={index} onClick={() => handleRemoveFood(index)}>
         {food}
    </li>)}
{/* foods.map(...): map iterates over each element of the foods array, which contains strings like "Apple", "Banana", etc.*/}
<input type="text" id ="foodInput" placeholder="Enter food name"/><br/>
<button onClick={handleAddFood}>Add Food</button>
</ul>
</div>
    );

}
export default Food