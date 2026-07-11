import '../App.css'

import duke from "../assets/duke.png"
import royal from "../assets/royal.png"
import yamaha from "../assets/yamaha.png"

export function Cards(){
    return(
        <>
        <div className="container">

           <div className="cards">
            <img src={duke} alt="duke" />
            <h2>DUKE</h2>
            <p>Born to stunt, engineered to rule the streets.</p>
            <button>Read More</button>
            </div> 

             <div className="cards">
            <img src={royal} alt="royal" />
            <h2>ROYAL</h2>
            <p>Thumping heart, timeless soul.</p>
            <button>Read More</button>
            </div> 

             <div className="cards">
            <img src={yamaha} alt="yamaha" />
            <h2>YAMAHA</h2>
            <p>Precision engineering meets pure adrenaline.</p>
            <button>Read More</button>
            </div> 
            
            
            
            
            
            </div></>
    )
}
