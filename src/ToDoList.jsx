import React, {useState} from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast", "Go for a walk", "Read a book"]);
    const [newTask, setNewTasks]=useState("");

    function handleInputChange(e){

        setNewTasks(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTasks([...tasks, newTask.trim()]);
            setNewTasks("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        const updatedTasks =[...tasks];
        if(index>0){
            const temp = updatedTasks[index];
            updatedTasks[index]= updatedTasks[index-1];
            updatedTasks[index-1]= temp;
            setTasks (updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks =[...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index]= updatedTasks[index+1];
            updatedTasks[index+1]= temp;
            setTasks (updatedTasks);
        }

    }
return(<div className="To-Do-List">
<h1>To Do List</h1>
<div>
    <input type= "text"
     placeholder="Enter a Task..."
     value={newTask}
     onChange={handleInputChange}
    />
    <button className="add-task-button" onClick={addTask}>Add</button>
</div>
<ol>
    {tasks.map((task,index)=><li key={index}>
        <span className="text">{task}</span>
        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        <button className="move-up-button" onClick={() => moveTaskUp(index)}>👆</button>
        <button className="move-down-button" onClick={() => moveTaskDown(index)}>👇</button>
    </li>
 )}
</ol>
    <style jsx>{`
    
  .To-Do-List{
  font-family: arial, sans-serif;
  text-align:center;
  margin-top:6px;
  h1{
  font-size: 4rem;
 
  }
  button{
  font-size: 1.5rem;
  font-weight: bold;
  padding:10px 20px;
  margin-left:10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: white;
  }
  .add-task-button{
  background-color: hsla(126, 70%, 50%, 1.00);
  }
  .add-task-button:hover{
    background-color: hsla(126, 70%, 66%, 1.00);
    }
    .delete-button{
  background-color: hsla(0, 90%, 50%, 1.00);
  }
  .delete-button:hover{
    background-color: hsla(0, 90%, 40%, 1.00);
    }
     .move-up-button{
  background-color: hsl(192, 93%, 70%);
  }
  .move-up-button:hover{
    background-color: hsla(126, 0%, 50%, 1.00);
    }
     .move-down-button{
  background-color: hsl(192, 93%, 70%);
  margin-right:15px;
  }
  .move-down-button:hover{
    background-color: hsla(126, 0%, 50%, 1.00);

    }
    input[type="text"]{
    font-size: 1.6rem;
    padding:6.8px;
    width:300px;
    border: 2px solid black;
    border-radius: 5px;
    color: hsla(126, 0%, 50%, 1.00);
    }
    ol{
    padding:0;
    list-style-type:none;
    margin-top:20px;
    margin-bottom:20px;
    }
    li{
    font-size: 1.8rem;
    font-weight: bold;
    padding:10px 0;
    background-color: hsla(126, 0%, 95%, 1.00);
    margin-bottom:10px;
    border-radius: 8px;
    display:flex;
    border: 3px solid black;
    align-items:center;
    margin-left: 10px;
    justify-content: center;
    }
    .text{
    flex-grow:1;
    text-align:left;
    margin-left:20px;
    margin-right:35px;
    }
  `} </style>
   
</div>
);
}
export default ToDoList