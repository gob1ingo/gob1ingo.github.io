import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;