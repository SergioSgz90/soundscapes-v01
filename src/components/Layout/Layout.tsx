import { menuOptionsType } from "../../interfaces/menuoption";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";

export function Layout ({
    menuOptions, children
}:{
    menuOptions: menuOptionsType; children:JSX.Element}) {


    return (
        <>
            <Header>
                <Navigation menuOptions={menuOptions}></Navigation>
            </Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );

    
}