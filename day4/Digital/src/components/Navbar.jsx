import "../App.css"
import Logo from "./Logo"

function Navbar(){
    return(

        <>
        <div className="nav">
        <Logo/>

      <div className="menu">
        
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
        </div>
        </>
    )
}

export default Navbar