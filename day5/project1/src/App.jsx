import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/Home"

function App(){
    return(
   <BrowserRouter>
   <nav>
        <Link to="/">Home</Link> ||
        <Link to="/contact">Contact</Link>
      </nav>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App