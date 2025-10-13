

// HOW TO STYLE REACT COMPONENTS WITH CSS
//----------------------------------------------------------
//(not including external frameworks or preprocessors)
//1.EXTERNAL
//2.MODULES
//3.INLINE

// click event = An interaction when a user clicks on an element, such as a button or link, triggering a specific action or function in a web application.
//we can respond to clicks by passing a callback to the onClick event handler
function Button(){

//bacic example
    {/*const handleClick=()=>console.log("Button clicked");
   return(
    <button style={styles} onClick={handleClick}>Click Me</button>
);*/}

    //function with parameters
    {/* const handleClick2=(name)=>console.log(`${name} stop clicking me`);
    return(
    <button style={styles} onClick={() => handleClick2("Bro")}>Click Me</button>
); */}

//example with conditions
{/* let count =0;

const handleClick=(name)=>{
    if(count<3){
        count++;
        console.log(`${name} you clicked me ${count} time/s`)
    }
    else{
        console.log(`${name} stop clicking me!`);
    }
}
return(
    <button style={styles} onClick={handleClick}>Click Me</button>
);*/}

//event parameter
//we can use the event parameter as event or e on the code below

// const handleClick=(e)=>{ console.log(e);}
const handleClick =(e) =>e.target.textContent ="OUCH!😕";

    const styles={
        backgroundColor:" hsl(192, 93%, 70%)",
  color: "white",
  border: "none",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  marginTop: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft:"10px",
    }
return(
    //for double click use onDoubleClick
    <button style={styles} onClick={(e) => handleClick(e)}>Click Me😀</button>
);
}
export default Button