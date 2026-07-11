import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import { Cards } from './components/cards.jsx'
import Footer from './components/Footer.jsx'
function App(){
    return(
        <>
        <div>
            <Navbar/>
            <Banner/>
            <Cards/>
            <Footer/>
        </div>
        </>
    )
}



export default App