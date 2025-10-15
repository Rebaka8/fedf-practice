import React,{useState} from 'react';
// onChange = event handler used primarily with form eleaments to capture user input
// ex: <input type="text" onChange={handleChange} />
//ex:<input>,<textarea>,<select>,<radiio>
//triggers a funtion evrytime the value of the input changes
// onClick = event handler used with buttons or clickable elements to handle click events
// onMouseOver = event handler that triggers when the mouse pointer hovers over an element

function EventHandler(){
const [name,setName] = useState("Guest");
const [quantity,setQuantity] = useState(1);
const [comment,setComment] =useState("");
const [payment,setPayment] =useState();
const [shipping,setShipping]=useState("Delivery");
function handleQuantityChange(e){
    setQuantity(e.target.value);
}

function handleCommentChange(e){
    setComment(e.target.value);
}
function handlePaymentChange(e){
    setPayment(e.target.value);
}
function handleShippingChange(e){
    setShipping(e.target.value);
}
return (
    <div>
        <input value = {name} onChange={(e) => setName(e.target.value)}/>
        <p>Hello, {name}!</p>
        <input type ="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
        <textarea value={comment} onChange ={handleCommentChange} placeholder ="Enter any comment"/>
        <p>Comment: {comment}</p>
        <select value={payment} onChange ={handlePaymentChange} >
          
            <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>
        <label>
            <input type="radio" value ="Pick Up" checked ={shipping ==="Pick Up"} onChange ={handleShippingChange}/>
            Pick Up</label>
         <label><br/>
            <input type="radio" value="Delivery" checked={shipping ==="Delivery"} onChange =  {handleShippingChange} />
            Delivery</label>
            <p>Shipping: {shipping}</p>
    </div>
);
}
export default EventHandler