import "../style-sheets/home.css";
import "../components/NameCard.tsx"
import NameCard from "../components/NameCard.tsx";
import Credentials from "../components/Credentials.tsx"

function Home() {

    return (
        <div className="container">
            <NameCard/>
            <Credentials/>
        </div>
    )

}

export default Home