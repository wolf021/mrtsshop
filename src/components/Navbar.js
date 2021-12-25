import React, { useState } from 'react'
import './css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'




const Navbar = () => {
    let [active, setActive] = useState(false)

    const handleMenu = () => {
        if (!active) {
            setActive(true)
        }
        else {
            setActive(false)
        }
        console.log(active)
    }



    return (
        <div className='navbar' >
            <Link style={{ textDecoration: 'none', color: 'teal' }} to="/" >
                <h2>ATRS HALAL MEAT AND GROCERY LIMTED</h2>
            </Link>
            <div className="hamburger">
                <FontAwesomeIcon icon={faBars} color="teal" size="2x" onClick={handleMenu} />
            </div>
            <ul className='nav-links' >
                <NavLink style={{ textDecoration: 'none', color: 'teal' }} to='/' ><li id="home" >Home</li></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'teal' }} to='/contact' ><li id="contact" >ContactUs</li></NavLink>

            </ul>
            <div className={active ? "drawer" : "drawer-hide"} >
                <Link style={{ textDecoration: 'none', color: 'teal' }} to='/'>Home</Link>

                <Link style={{ textDecoration: 'none', color: 'teal' }} to='/contact' >ContactUs</Link>

            </div>
        </div>
    )
}

export default Navbar;
