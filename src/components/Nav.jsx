import './Nav.css'
import logo from '../assets/logo.svg'

function Nav() {
   return (
      <nav>
         <div className="nav--items">
            <img src={ logo } alt="logo" />
            <p>my travel journal.</p>
         </div>
      </nav>
   )
}

export default Nav