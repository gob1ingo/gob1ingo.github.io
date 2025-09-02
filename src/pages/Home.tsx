import "../style-sheets/home.css";
import "../components/NameCard.tsx";
import NameCard from "../components/NameCard.tsx";
import Credentials from "../components/Credentials.tsx"
import Languages from "../components/Languages.tsx";
import Patrick from "../assets/patrick_working.png";

function Home() {

    return (
        <div className="home-container">
            <NameCard/>
            <Credentials/>
            <Languages/>
            <img src={Patrick} style={{height:"100px", aspectRatio:"1",}} />
            <p>under active development</p>
        </div>
    )

}

export default Home