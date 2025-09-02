import "../style-sheets/namecard.css"
import profilePicture from "../assets/pfp.jpg" 

function NameCard() {

    return (
        <div className="name-card" id="namecard">
            <img 
                src={profilePicture}
                alt="Picture of Matt"
                className="pfp"
            />
            <h1 className="name">
                Matthew Sikorski 
            </h1>
            <h3 className="title">
                Computer Scientist
            </h3>
            <p className="bio">
                Hello! I am a Computer Scientist from Upstate New York.
                My experience with machines goes back my whole life, I've practically been raised with them.<br/>
                The bulk of my experience is with the software of machines. <br/> 
                The bulk of my studies at SUNY Oswego had me working with the Java language among others. <br/>
            </p>
        </div>
    )

}

export default NameCard