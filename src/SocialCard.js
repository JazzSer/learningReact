import './SocialCard.css';
import Location from './Location';
import PhoneNumber from './PhoneNumber';
const SocialCard=({userData})=>{
    return(
        <div className="card">
            <div className="card_title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Location location={userData.location}/>
                <PhoneNumber number={userData.phone} type="Home"/>
                <PhoneNumber number={userData.cell} type="Cell"/>
                <div className="card__image"><img src={userData.picture.medium} alt="Not available"/></div>
            </div>
        </div>
    )
}

export default SocialCard;