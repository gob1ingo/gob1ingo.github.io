import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">Matthew Sikorski</Link>
            </h1>
            <nav>
                <a href="#credentials">Credentials</a>
                <a href="#software-experience">Software Experience</a>
            </nav>
        </header>
    );
}

export default Header;