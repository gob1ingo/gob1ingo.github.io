import "../style-sheets/home.css";
import "../components/NameCard.tsx";
import NameCard from "../components/NameCard.tsx";
import Credentials from "../components/Credentials.tsx"
import Softwares from "../components/Softwares.tsx";
import SocialMedias from "../components/SocialMedias.tsx"
// import Patrick from "../assets/patrick_working.png";

function Home() {

    return (
        <div className="home-container">
            <NameCard/>
            <Credentials/>
            <Softwares/>
            <SocialMedias/>
            {/* <img src={Patrick} style={{height:"100px", aspectRatio:"1",}} />
            <p>under active development</p> */}
        </div>
    )

}

export default Home