//useEffect() = React hook that tells React to DO SOME CODE WHEN (pick one):
// 1. The component first loads (mounts)
// 2. A specific value changes (state or prop)
// 3. Every time the component re-renders (updates)

//useEfhect()(function, [dependencies])
//1. useEffect(() => {code to run}, []); //empty dependency array = run only on mount
//2. useEffect(() => {code to run}, [someValue]); //run on mount and when someValue changes
//3. useEffect(() => {code to run}); //no dependency array = run on every render

//USE CASES:
//1. Fetching data from an API when the component loads
//2. Setting up a subscription or event listener when the component loads and cleaning it up when it unmounts
//3. Updating the document title or performing side effects when specific state or props change
//4. DOM manipulations that need to happen after React has updated the DOM
//5. Logging or analytics that need to run on specific events
//6. Animations that need to be triggered on mount or state changes
//7. Synchronizing state with local storage or other external systems
//8. Implementing timers or intervals that need to start on mount and clean up on unmount
import React, { useState, useEffect } from 'react';
function MyComponent3() {
    const [count, setCount] = useState(0);
    const [color,setColor]=useState("green");
    useEffect(() => {
    console.log(`Count has changed to: ${count}`);
    document.title = `Count: ${count} ${color}`;
    },[count,color]); //dependency array    
  
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

return(
    <>
    <p style ={{color : color}}>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Add</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => setCount(count - 1)}>Subtract</button>
    <button onClick={changeColor}>Change Color</button>
    </>
);
}
export default MyComponent3;