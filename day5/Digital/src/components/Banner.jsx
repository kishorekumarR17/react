import "../App.css"
import bikeBanner from '../assets/bikeBanner.jpg'


function Banner(){
    return(
        <>
        <div className='banner'>
          <img src={bikeBanner} alt="bike banner" />  
            </div>
            </>
    )
}

export default Banner