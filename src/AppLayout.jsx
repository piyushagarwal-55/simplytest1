import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Header } from "./pages/Header";
import { Footer } from './pages/Footer';
import { Fixedblue } from "./pages/Fixedblue";
import "../src/css/loginpage.css"
import { Loading } from "./pages/Loading";

const AppLayout = () => {



const navigation = useNavigation();
console.log("Navigation state:", navigation.state);

    if(navigation.state === "loading") {
        console.log("Loading");
        return <Loading/>
    }

    return (
        <>
            <Fixedblue />
            <Header />
            {/* <div className={isLoginPage ? "login-layout-wrapper" : ""}>
            </div>          */}
                <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;
