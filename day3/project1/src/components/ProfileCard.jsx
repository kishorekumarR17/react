import profile from "../assets/ms.jpg"
import "./card.css"

function ProfileCard(){
    const name ="MS dhoni"
    const role ="mentor"
    return (
        <>
        <div className="card">
           <img src={profile} alt="profile" />
            <h1>Name :{name}</h1>  
            <h1>Role:{role}</h1>      
        </div>
        </>
    )
}

export default ProfileCard