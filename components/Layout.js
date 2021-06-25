import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) => {
    return ( 
        <div className="bg-background-100">
            <Head>
                <title>Simon's Journal</title>
            </Head>
            <Navbar />
            <main className="relative">
                { children }
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;