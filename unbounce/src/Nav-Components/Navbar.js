import React, {useState} from "react"
import {Button} from "./Button"
import {Link} from "react-router-dom"
import "./Navbar.css"
import {Dropdown} from "./Dropdown"
import { Dropdown2 } from "./Dropdown2"

export const Navbar=()=>{

    const [click,setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)
    const [dropdown2,setDropdown2] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu= () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    }
    const closeMobileMenu2= () => setClick(false)

    const onMouseEnter2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false)
        }
        else{
            setDropdown2(true)
        }
    }

    const onMouseLeave2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false)
        }
        else{
            setDropdown2(false)
        }
    }
    return (
        <>
            <nav className="navbar">
               <Link to="/" className="navbar-logo">
                 Unbounce
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times"  : "fas fa-bars"} />
               </div>
               <div className={click ? "nav-menu-active" : "nav-menu"}>
                    <h1 className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </h1>
                    <h1 className="nav-item">
                        <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                    </h1>
                    <h1 className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <Link to="/products2" className="nav-links" onClick={closeMobileMenu2}>
                            Products2 <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown2 && <Dropdown2/>}
                    </h1>
                    {/* <h1 className="nav-item">
                        <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                            Learn<i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </h1> */}
                    <h1 className="nav-item">
                        <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                            Contacts
                        </Link>
                    </h1>
                    
                    
               </div>
               <Button/>
            </nav>
        </>
    )
}
