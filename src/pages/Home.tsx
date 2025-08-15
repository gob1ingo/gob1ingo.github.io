import "../style-sheets/home.css";
import "../components/NameCard.tsx"
import NameCard from "../components/NameCard.tsx";
import Qualifications from "../components/Qualifications.tsx"

function Home() {

    return (
        <div className="container">
            <NameCard/>
            <a className="github-link" href="https://github.com/gob1ingo/gob1ingo.github.io"><code>github.com/gob1ingo/gob1ingo.github.io</code></a>
            <Qualifications/>
        </div>
    )

}

export default Home