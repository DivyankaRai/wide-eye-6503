import React, { useState } from "react";
import {MenuItems2} from "./MenuItems2"
import { Link } from "react-router-dom";
import "./Dropdown.css"

export const Dropdown2 = () => {

    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown2-menu clicked"
            : "dropdown2-menu"}>
                {MenuItems2.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.dName} to={item.path2} onClick={()=>
                            setClick(false)}>
                            {item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}