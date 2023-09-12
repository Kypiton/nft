import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header /> 
                {children}
            <Footer /> 
        </>
    )
}

export default Layout;
