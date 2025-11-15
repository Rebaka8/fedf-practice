import Header from './assets/Header.jsx'
import Footer from './assets/Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import Lists from './Lists.jsx'
import List1 from './List1.jsx'
import ProfilePic from './ProfilePic.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import EventHandler from'./EventHandler'
import ColorPicker from './ColorPicker.jsx'
import MyComponent1 from './MyComponent1.jsx'
import MyComponent2 from'./MyComponent2.jsx'
import ToDoList from './ToDoList.jsx'
import MyComponent3 from './MyComponent3.jsx'
function App() {
  const fruits =[{name: "Apple:", calories : 95},
               {name: "Banana:", calories : 105},
               {name: "Cherry:", calories : 50},
               {name: "Date:", calories : 20},
               {name: "Coconut:",calories :150},
               {name: "Grapes:", calories : 62}];

   const vegetables=[{name: "Carrot", calories: 41},
                     {name: "Broccoli", calories: 55},
                     {name: "Spinach", calories: 23},
                     {name: "Potato", calories: 77},
                     {name: "Tomato", calories: 18},
                     {name: "Cucumber", calories: 16}];            
 
  return(
    <>
      <Header />
      <hr></hr>
      <p><b>~ on change Event Handler</b></p>
<EventHandler />
      <p><strong>~Conditional rendering</strong></p>
      <UserGreeting isLoggedIn={true} username="Rebaka Meda"/>


  <p><b>~Profile Picture</b></p>
  <ProfilePic/>
      <>
        <p><strong>~props</strong></p>
        {/* Replace Props.isStudent (undefined) with a literal or a proper variable. */}
        <Student name="Rebaka Meda" age={30} isStudent={true} />
        <Student name="Tomato" age={21} isStudent={true} />
        <Student name="Potato" age={18} isStudent={true} />
        <Student name="Arjun" age={25} isStudent={false} />
        <Student></Student>
      </>

      <section>
        <p><strong>~cards</strong></p>
        <Card />
      </section>
      <hr></hr>
       <p><strong>~Lists</strong></p>
  
<Lists/>
<hr></hr>
<p><b>List1~Reusable component</b></p>
{/* short circuiting the first expression by writing logical and operator 
,where thevaulue is resulted only if the first expression is true*/} 
{fruits.length>0  && <List1 items={fruits} title="Fruits List"/> }
{vegetables.length>0  && <List1 items={vegetables} title="Vegetables List"/> }
<hr></hr>
<p><b>~updating the state of array</b></p>
      <Food />
<hr></hr>
<p><b>~useState</b></p>
<MyComponent/>
<hr></hr>
<p><b>~useState with object</b></p>
<MyComponent1/>
<hr></hr>
<p><b>~useState with array of objects</b></p>
<MyComponent2/>
<hr></hr>
<p><b>~useEffect</b></p>
<MyComponent3/>
<hr></hr>
<p><b>~Counter</b></p>
<Counter />
<hr></hr>
<ColorPicker/>
<hr></hr>
<p><b>~To Do List</b></p>
<ToDoList/>
<hr></hr>
<p><b>~Button</b></p>
      <Button />
      <hr></hr>
<p> <b>~Footer</b></p>
      <Footer />
    </>
  );
}

export default App
