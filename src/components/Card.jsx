import './Card.css'
import tempImg from '../assets/mtfuji.png'
import tempPin from '../assets/pin.svg'

function Card() {
   return (
      <div className="card">
         <div className="card--thumbnail">
            <img src={ tempImg } alt="illustration" />
         </div>
         <div className="card--details">
            <div className="card--details-header">
               <div className="card--details-location">
                  <img src={ tempPin } alt="location pin" />
                  <p className="location">JAPAN</p>
               </div>
               <a href="#" className="card--link">View on Google Maps</a>
            </div>
            <div className="card--details-body">
               <h1 className="card--title">Mount Fuji</h1>
               <p className="travel--date">12 Jan, 2021 - 24 Jan, 2021</p>
               <p className="travel--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
         </div>
      </div>
   )
}

export default Card