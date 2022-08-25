import React, { useState } from "react";
import {MenuItems3} from "./MenuItems3"
import { Link } from "react-router-dom";
import "./Dropdown.css"

export const Dropdown3 = () => {

    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown3-menu clicked"
            : "dropdown3-menu"}><h2>Conversion Intelligence Resources</h2>
                {MenuItems3.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.qName} to={item.path3} onClick={()=>
                            setClick(false)}><h3>{item.title}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}