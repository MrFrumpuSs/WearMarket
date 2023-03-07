import SEO from "../components/SEO"
import Header from "../components/UI/Header/Header"
import Footer from "@/components/UI/Footer/Footer"
import roboto from "@/fonts/Roboto"

const Layout = ({ children, className }) => {
    return (
        <>
            <SEO></SEO>
            <Header className={roboto.className}></Header>
            <main className={[roboto.className, className].join(' ')}>
                {children}
            </main>
            <Footer className={roboto.className}></Footer>
        </>
    )
}

export default Layout