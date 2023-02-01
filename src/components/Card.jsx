import './Card.css'
import pin from '../assets/pin.svg'

function Card(props) {
   return (
      <div className={`card ${props.underline && 'underlined'}`}>
         <div className="card--thumbnail">
            <img src={ props.item.imageurl } alt={ props.item.title } />
         </div>
         <div className="card--details">
            <div className="card--details-header">
               <div className="card--details-location">
                  <img src={ pin } alt="location pin" />
                  <p className="location">{ props.item.location }</p>
               </div>
               <a href={props.item.googlemapslink} className="card--link">View on Google Maps</a>
            </div>
            <div className="card--details-body">
               <h1 className="card--title">{ props.item.title }</h1>
               <p className="travel--date">{ props.item.start_date } - { props.item.end_date }</p>
               <p className="travel--description">{ props.item.description }</p>
            </div>
         </div>
      </div>
   )
}

export default Card