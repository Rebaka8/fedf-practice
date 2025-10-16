import React, {useState} from 'react';
//concept: update OBJECTS in state
//we are using state objects in this example
function MyComponent1() {
const [car, setCar]= useState({year: 2020,
                               make:"Maserati",
                               model: "MC20"} );
                               {/* car is your state variable — an object storing information about a car.

setCar is a function used to update that state.

useState starts with this initial value (year/make/model).*/}
                               
  return(<div>
    <p>Your favourite car is: {car.make} {car.model} ({car.year})</p>
    <input type="number" value={car.year} onChange={(e) => setCar({...car, year: e.target.value})} />
    { /*The spread operator (...) is used to copy the existing properties of the car object into a new object.
     Then, the year property is updated with the new value from the input field (e.target.value).
     This ensures that only the year is changed while make and model remain the same.*/}
    <input type="text" value={car.make} onChange={(e) => setCar({...car, make: e.target.value})} />
    <input type="text" value={car.model} onChange={(e) => setCar({...car, model: e.target.value})} />
  </div>);                             
}
export default MyComponent1