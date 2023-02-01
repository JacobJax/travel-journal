import Card from "./Card"
import './Tours.css'
import destinations from './destinations'

function Tours() {

   const dest = destinations.map( (item, i) => {
      return (
         <Card 
            key = { item.id }
            item = { item }
            underline = { i < (destinations.length - 1) ? true : false }
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