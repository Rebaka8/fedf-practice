import React,{useState} from 'react'
function ColorPicker(){
    const [color,setColor]=useState( "#14e411ff");

    function handleColorChange(e){
        setColor(e.target.value);
    }
return(
   <div  className ="color-picker-container">
   <h1>Color Picker</h1>
   <div className ="color-display" style = {{backgroundColor : color}}>
    <p>Selected color: {color}</p>
   </div>
   <label>Select a color: </label>
   <input type ="color" value ={color} onChange={handleColorChange}/>
  <style jsx>{`
  .color-picker-container{
  display : flex;
  flex-direction :column;
  align-items: center;
  }
        .color-picker {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }
        .color-picker-container h1 {
          margin: 50px;
          color: #14e411;
        }
        .color-display {
        width: 300px;
        height: 300px;
   
        display: flex;
        justify-content: center;
        align-items: center;
          border-radius: 25px;
          border : 5px solid #14e411;
          padding: 10px;
          color: white;
          margin-bottom: 235px;
          transition : background-color 0.25s ease;
        }
          input[type="color"] {
          width: 75px;
          border-radius: 10px;
          border:2px solid #14e411;
  }
      `}</style>
  
   </div>
);
}
export default ColorPicker