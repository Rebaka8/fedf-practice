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

 { /* //updater function = A function passed as an argument to useState() usually to update the state value.
   //ex: setCount(count + 1);
   //here we are using the current state of count to calculate the next state after using a setter function
   //State value = The current value stored in a state variable.
   //ex: const [count, setCount] = useState(0);

  // allow for safe updates based on the previous state value.
  // This is particularly useful when the new state depends on the old state.
    //ex: setCount(prevCount => prevCount + 1);
    //used with multiple state updates and asynchronus functions
//It is a good practice to use the functional form of the state update when the new state depends on the previous state.
import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);

    function increment() {
    // here by writing setCount(COUNT+1)mutliple times ,we are using the current state to calculate the next State
    //set functions do not trigger an update
    //react batches multiple state updates for performance optimization
    //so if we call setCount(count + 1) multiple times in a single function call, only the last call will take effect.
    //To ensure that each increment is based on the most recent state value, we should use the functional form of the state update.
    //for example if we click the refresh button in the chrome browser it only refreshes for one time no matter how many time we click on it 
    //By convention, it's common to name the pending state argument for the first letter of the state variable name,like a for age .however, you may also call it like prevAge or something else that you find easier
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    //In this example, each call to setCount uses the functional form to ensure that the increment is based on the most recent state value.
    //So if the initial count is 0, after calling increment(), the count will be 3.

    //takes the Pending state value as an argument and returns the new state value.
    //react puts updater function in a queue and executes them in order.
    //during hte nextrender cycle ,it will call them in the same order they were called
    };

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    //In this example, each call to setCount uses the functional form to ensure that the decrement is based on the most recent state value.
    //So if the initial count is 0, after calling decrement(), the count will be -3.
    };

    function reset() {
        setCount(c => c =0);
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
    */}
export default Counter;