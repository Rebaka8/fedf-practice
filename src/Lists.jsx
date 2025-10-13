function Lists(){
{/*const fruits = ["Apple", "Banana", "Cherry", "Date"];
const listItems= fruits.map(fruit => <li>{fruit}</li>);
return(<ol>{listItems}</ol>);
*/}

//example 2 -> array string into array objects 
const fruits =[{name: "Apple:", calories : 95},
               {name: "Banana:", calories : 105},
               {name: "Cherry:", calories : 50},
               {name: "Date:", calories : 20},
               {name: "Coconut:",calories :150},
               {name: "Grapes:", calories : 62}];
 
const listItems = fruits.map((fruit, index) =>
    <li key={index}>{fruit.name} - <strong>{fruit.calories}</strong> calories</li>
);

const sortByCalories =fruits.sort((a,b)=>a.calories - b.calories); // sort numerically by calories
const listByCalories = sortByCalories.map((fruit, index) =>
    <li key={index}>{fruit.name} - <strong>{fruit.calories}</strong> calories</li>
);

const sortByNames =fruits.sort((a,b)=>a.name.localeCompare(b.name)); // sort alphabetically by name
const listByNames = sortByNames.map((fruit, index) =>
    <li key={index}>{fruit.name} - <strong>{fruit.calories}</strong> calories</li>
);

const SortInReverse = fruits.sort((a,b)=>b.name.localeCompare(a.name)); // sort in reverse alphabetical order by name
const ReverseByNames = SortInReverse.map((fruit, index) =>
    <li key={index}>{fruit.name} - <strong>{fruit.calories}</strong> calories</li>
);

const calSortInReverse = fruits.sort((a,b)=>b.calories - a.calories); // sort in reverse numerical order
const ReverseByCalories = calSortInReverse.map((fruit, index) =>
    <li key={index}>{fruit.name} - <strong>{fruit.calories}</strong> calories</li>
);

const lowCalFruits =fruits.filter(fruit => fruit.calories < 100); // filter fruits with less than 100 calories
const lowCalList = lowCalFruits.map((lowCalFruit, index) =>
    <li key={index}>{lowCalFruit.name} - <strong>{lowCalFruit.calories}</strong> calories</li>
);
const HighCalFruits =fruits.filter(fruit =>fruit.calories>=100);
const HighCalList =HighCalFruits.map((HighCalFruit,index) =>
<li key={index}>{HighCalFruit.name} - <strong>{HighCalFruit.calories}</strong> calories</li>
);

return(
    <>
    <p>List Items: </p>
<ol>{listItems}</ol>
<p>Sorted by Calories: </p>
<ol>{listByCalories}</ol>
<p>Sorted by Names: </p>
<ol>{listByNames}</ol>
<p>Sorted in Reverse by Names: </p>
<ol>{ReverseByNames}</ol>
<p>Sorted in Reverse by Calories: </p>
<ol>{ReverseByCalories}</ol>
<p>Low Calorie Fruits: </p>
<ol>{lowCalList}</ol>
<p>High Calorie Fruits: </p>
<ol>{HighCalList}</ol>
</>
);


}

export default Lists