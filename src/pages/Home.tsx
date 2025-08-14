import "../style-sheets/home.css";
import "../components/NameCard.tsx"
import NameCard from "../components/NameCard.tsx";

function Home() {

    return (
        <div className="container">
            <NameCard/>
            <a className="github-link" href="https://github.com/gob1ingo/gob1ingo.github.io"><code>github.com/gob1ingo/gob1ingo.github.io</code></a>
        </div>
    )

}

export default Home