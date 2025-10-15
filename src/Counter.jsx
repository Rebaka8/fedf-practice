import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset =() =>{
        setCount(0);
    }

    return(
        <div className ="counter-container">
            <h2>Counter: {count}</h2>
            <p className ="count-display">{count}</p>
            <div className ="button-group">
            <button className ="counter-button" onClick={increment}>Increment</button>
            <button className ="counter-button" onClick={decrement}>Decrement</button>
            <button className ="counter-button" onClick={reset}>Reset</button>
        </div>
        </div>
    );
}
{/* 
   //update function = A function passed as an argument to useState() usually to update the state value.
   ex: setCount(count + 1);
   //here we are using the current state of count to calculate the next state after using a setter function
   //State value = The current value stored in a state variable.
   ex: const [count, setCount] = useState(0);

  // alllow for safe updates based on th eprevious state value.
  // This is particularly useful when the new state depends on the old state.
    ex: setCount(prevCount => prevCount + 1);
    //used with multiple state updates and asynchronus functions
//It is a good practice to use the functional form of the state update when the new state depends on the previous state.
    */}
export default Counter;