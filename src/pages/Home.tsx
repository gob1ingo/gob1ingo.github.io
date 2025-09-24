import "../style-sheets/home.css";
import NameCard from "../components/NameCard";
import Credentials from "../components/Credentials";
import Softwares from "../components/Softwares";
import SocialMedias from "../components/SocialMedias";

function Home() {
    return (
        <div className="home-container">
            <NameCard />
            <Credentials />
            <Softwares />
            <SocialMedias />
        </div>
    );
}

export default Home