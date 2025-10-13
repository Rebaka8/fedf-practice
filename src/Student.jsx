//props - read-only-properties that are sahred between componentes
//             Aparent component can send data to a child component
//           <Component key=value />
//props are immutable (cannot be changed inside the component)
//when you include a componet within a parent you can send that data to the child component
//props are passed as an object to the component
//props is a parameter of the function
//access props with props.key or destructuring {key}
//props.children - special prop, used to pass child elements directly into the output of a component


//propTypes = a mechanism thta ensires that the passed value is of correct datatype
//    age=prtoTypes.number
//    name=propTypes.string
//    isStudent=propTypes.bool
//defaultProps = set default values for props in case no value or undefined is passed
//    Student.defaultProps={name:"John Doe", age:0, isStudent:false}

//Conditional rendering = allows you to control what gets rencered in your application based on certain conditions 
//     (show, hide or change componentsbased on conditions)
import PropTypes from 'prop-types'
function Student({name ="Guest", age=0, isStudent=false}){
return(
    <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>

    </div>
);
}
Student.propTypes={
name: PropTypes.string,
age: PropTypes.number,
isStudent :PropTypes.bool,
};

export default Student;