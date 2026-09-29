import { Outlet } from "react-router-dom";
import { Header } from "../../components/MenuPage/styles";
import { Footer } from "../../components/Footer/styles";

export function UserLayout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}