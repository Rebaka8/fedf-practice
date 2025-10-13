import PropTypes from 'prop-types';
function UserGreeting(props){
  {/* if(props.isLoggedIn){
    return <h2>Welcome back, {props.username}!</h2>
  }
    return <h2>Please log in to continue.</h2>
*/}
//METHOD 2
 // OR wecan do this using terenary opertaor in javaScript 
 {/* return(props.isLoggedIn?  <h2 className="welcome-message"> Welcome back, {props.username}!</h2> : 
                            <h2 className="login-prompt">Please log in to continue.</h2>); */}

          //METHOD 3
          const welcomeMessage = <h2 className="welcome-message">Welcome back, {props.username}!</h2>;
          const loginPrompt = <h2 className="login-prompt">Please login to continue.</h2>;
          
return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
UserGreeting.propTypes = {
    isLoggedIn :PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
};

export default UserGreeting;