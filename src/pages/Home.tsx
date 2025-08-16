import "../style-sheets/home.css";
import "../components/NameCard.tsx"
import NameCard from "../components/NameCard.tsx";
import Qualifications from "../components/Qualifications.tsx"

function Home() {

    return (
        <div className="container">
            <NameCard/>
            <Qualifications/>
        </div>
    )

}

export default Home