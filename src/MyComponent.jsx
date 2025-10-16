//React hook = special function that allows functional components to use features 
//             without using class components (React v16.8)
//             (useState, useEffect, useContext,useReducer, useRef, useMemo, useCallback)

// useState() =A react hook that allows the creation of a state variable in the  functional component AND  a setter function to update the state variable in the virtual DOM
// [name, setName]
import React, {useState} from 'react';
function MyComponent(){
    // [] -> array destructuring
const [name , setName]=useState("Guest"); //initial value of the state variable is empty
//the useState funtion return an array with 2 elements a variable and a setter funtion 
// if we ever want to change the value of the stateful variable we have to do so with the setterfunction
const [age, setAge]=useState(0); 
const [isEmployed, setIsEmployed]=useState(false);
const updateName =()=> {
    setName("Rebaka Meda"); // we cannot change the value of the state variable directly
}
const incrementAge=()=> {
        setAge(age + 1);
    }
    const toggleEmployedStatus=()=> {
        setIsEmployed(!isEmployed);
    }
   

return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
        

    </div>
);
}
export default MyComponent;