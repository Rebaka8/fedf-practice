function ProfilePic(){
const imgUrl='./src/cat.jpg';
// const handleClick=()=> console.log("Profile picture clicked");
const handleClick =(e)=> e.target.style.borderColor="rgba(65, 225, 65, 1)";
return(<img className="profile-pic" onClick={(e)=>handleClick(e)} src={imgUrl} alt ="Profile Pic" height ="200px"></img>);

}
export default ProfilePic;