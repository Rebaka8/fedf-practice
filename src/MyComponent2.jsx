import React,{useState} from 'react';

function MyComponent2(){
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleAddCar(){
        const newCar={year:carYear,
                      make:carMake,
                      model:carModel};
        setCars(c => [...c,newCar]);
        setCarYear (new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(cars.filter((_,i) => i !== index));
        // setCars(c => c.filter((_, i) => i !== index)); alternative way using functional form
    }
    function handleCarYearChange(e){
        setCarYear(e.target.value);
    }
    function handleMakeChange(e){
        setCarMake(e.target.value);
    }
    function handleModelChange(e){
        setCarModel(e.target.value);
    }
    return (
        <div>
            {/* component UI */}
            <h2>List of car objects</h2>
<ul>
    {cars.map((car,index) =>
    <li key={index} onClick ={() => handleRemoveCar(index)}>
        {car.make} {car.model} ({car.year})
    </li>)}
</ul>
    <input type="number" value={carYear} onChange={handleCarYearChange}/> 
    <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/> 
    <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/> 
    <button onClick={handleAddCar}> Add Car </button>

        </div>
    );
}

export default MyComponent2;