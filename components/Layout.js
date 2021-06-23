import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = ({children}) => {
    return ( 
        <div className="bg-background-100">
            <Navbar />
            <main className="relative">
                { children }
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;