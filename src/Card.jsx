import ProfilePic from './cat.jpg'
function Card(){
return(
<div className ="card"> 
    <img className="card-image" src={ProfilePic} alt="profile picture" style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
{/* for placeholder image: src="https://via.placeholder.com/150" */}
<h2 className="card-title">Rebaka</h2>
<p className="card-description">I am currently leaning react for my frontend project.</p>
</div>
);
}
export default Card