import "../style-sheets/home.css";
import "../components/NameCard.tsx"
import NameCard from "../components/NameCard.tsx";
import Credentials from "../components/Credentials.tsx"
import Patrick from "../assets/patrick_working.png";

function Home() {

    return (
        <div className="container">
            <NameCard/>
            <Credentials/>
            <img src={Patrick} style={{height:"100px", aspectRatio:"1",}} />
        </div>
    )

}

export default Home