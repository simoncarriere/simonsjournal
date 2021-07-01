import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) => {
    return ( 
        <div className="bg-background-100 font-poppins">
            <Head>
                <title>Simon's Journal</title>
            </Head>
            <Navbar className="mb-8"/>
            <main className="relative mx-auto">
                { children }
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;