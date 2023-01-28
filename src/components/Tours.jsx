import Card from "./Card"
import './Tours.css'
import destinations from './destinations'

function Tours() {

   const dest = destinations.map( item => {
      return (
         <Card 
            key = { item.id }
            item = { item }
         />
      )
   })

   return (
      <section id="tours" className="span--max">
         { dest }
      </section>
   )
}

export default Tours