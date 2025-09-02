import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1 className="text-xl font-bold">
            <Link to="/">My Page</Link>
            </h1>

            <nav className="space-x-4">
                <a href="#credentials">Credentials</a>
                <a href="#software-experience">Software Experience</a>
            </nav> {/* At some point, turn this into a local side-bar within Home.tsx. */}


            {/* 
            
            Kept in to remind myself on how to link to other pages. 
            
            <nav className="space-x-4">
            <Link to="/test-page" className="hover:underline">Test Page</Link>
            <Link to="/another-page" className="hover:underline">Another Page</Link>
            </nav>
            */}
        </header>
    )
}

export default Header;