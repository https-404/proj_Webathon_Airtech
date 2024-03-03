import MyMaps from "../GoogleMaps/GoogleMaps"
import "./Card.css"
function PackageCard(props) {
    return(
        <div className="card">
             <MyMaps lat={props.lat} lng={props.lng}/>
             <h2 className="card-title">{props.name}</h2>
             <p className="card-text">{props.status}</p>
        </div> 
    )
}
//<img className="card-image" src={profilePic} alt="profile picture"></img>
export default PackageCard