import React, {useState} from "react"
import {Button} from "./Button"
import {Button2} from "./Button2"
import {Link} from "react-router-dom"
import "./Navbar.css"
import {Dropdown} from "./Dropdown"
import { Dropdown2 } from "./Dropdown2"
import { Dropdown3 } from "./Dropdown3"

export const Navbar=()=>{

    const [click,setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)
    const [dropdown2,setDropdown2] = useState(false)
    const [dropdown3,setDropdown3] = useState(false)

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

    const closeMobileMenu3= () => setClick(false)

    const onMouseEnter3 = () => {
        if(window.innerWidth < 960){
            setDropdown3(false)
        }
        else{
            setDropdown3(true)
        }
    }

    const onMouseLeave3 = () => {
        if(window.innerWidth < 960){
            setDropdown3(false)
        }
        else{
            setDropdown3(false)
        }
    }
    return (
        <>
            <nav className="navbar">
               <Link to="/" className="navbar-logo">
                 Unbounce
               </Link>
               {/* <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times"  : "fas fa-bars"} />
               </div> */}
               <div className={click ? "nav-menu-active" : "nav-menu"}>
                    <h1 className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </h1>
                    <h1 className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                        <Link to="/products2" className="nav-links" onClick={closeMobileMenu2}>
                            Solutions <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown2 && <Dropdown2/>}
                    </h1>
                    <h1 className="nav-item">
                        <Link to="/features" className="nav-links" onClick={closeMobileMenu}>
                            Features
                        </Link>
                    </h1>
                    <h1 className="nav-item">
                        <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                    </h1>
                    <h1 className="nav-item" onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                        <Link to="/products3" className="nav-links" onClick={closeMobileMenu3}>
                            Learn <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown3 && <Dropdown3/>}
                    </h1> 
                    <h1 className="nav-item">
                        <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                            Contacts
                        </Link>
                    </h1>
                    <input placeholder="Search 🔍"/>
                    
               </div>
               <Button/>
               <Button2/>
            </nav>
        </>
    )
}
