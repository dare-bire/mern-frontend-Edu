import React, { useRef,useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul ref={menuRef}   className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
        <li className={menu === "home" ? 'active' : ''} onClick={() => setMenu("home")}>
         <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
       </li>
    <li className={menu === "courses" ? 'active' : ''} onClick={() => setMenu("courses")}>
    <Link style={{ textDecoration: 'none' }} to="/courses">All Courses</Link>
    </li>
    <li className={menu === "about" ? 'active' : ''} onClick={() => setMenu("about")}>
    <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
    </li>
    <li className={menu === "team" ? 'active' : ''} onClick={() => setMenu("team")}>
     <Link style={{ textDecoration: 'none' }} to="/team">Team</Link>
     </li>
     <li className={menu === "pricing" ? 'active' : ''} onClick={() => setMenu("pricing")}>
     <Link style={{ textDecoration: 'none' }} to="/pricing">Pricing</Link>
     </li>
     <li className={menu === "journal" ? 'active' : ''} onClick={() => setMenu("journal")}>
     <Link style={{ textDecoration: 'none' }} to="/journal">Journal</Link>
      </li>  
      <li className={menu === "contact" ? 'active' : ''} onClick={() => setMenu("contact")}>
     <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
      </li>  
        </ul>
        <div className="start">
  <li className={menu === "login" ? 'active' : ''} onClick={() => setMenu("login")}>
    <Link to="/login">
      <button className='button'>GET STARTED</button>
    </Link>
    </li>
    </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
