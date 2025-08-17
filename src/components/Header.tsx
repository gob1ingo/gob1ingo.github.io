import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1 className="text-xl font-bold">
            <Link to="/">My Page</Link>
            </h1>
    
            {/*
            <nav className="space-x-4">
            <Link to="/test-page" className="hover:underline">Test Page</Link>
            <Link to="/another-page" className="hover:underline">Another Page</Link>
            </nav>
            */}
        </header>
    )
}

export default Header;