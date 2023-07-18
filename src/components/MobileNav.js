import React, {useState, useContext} from 'react'
import "../styles/mobileNav.css"
import { Link } from "react-router-dom"
import { ImCross } from "react-icons/im"
import { AuthContext } from '../helpers/AuthContext'


function MobileNav() {
    const [ slideOut , setSlideOut ] = useState(false)
    const { authState } = useContext(AuthContext)

    const toggleSlideMenu = () => {
        setSlideOut(!slideOut)
        console.log(authState)
    }
  return (
    <div className="MobileNav">
        <div className='btn-links-flex-ctn'>
       {authState.status ? <button 
            onClick={toggleSlideMenu}
            className='menuButton'
        >Menu
        </button> :
            <div className='reg-login-ctn'>
                <Link className='registration' to="/registration">Registration</Link>
                <Link className='login' to="/login">Login</Link>
            </div> }
        </div>
        <div 
            className={slideOut 
                ? "slideOutDisplayed slide-in-left" 
                : "slideOutHidden"
            }
        >  
         <nav className='mobileNav'>
                <Link className='mobileLink' to="/">Home</Link>
            </nav>
            <ImCross className='closeMenuIcon' onClick={toggleSlideMenu} /> 
        </div>
    </div>
  )
}

export default MobileNav