import React from "react"
import "./Button.css"
import { Link } from "react-router-dom"

export const Button2=()=>{
    return(
        <>
            <Link to="trial">
                <button className="free-button">Start your free trial</button>
            </Link>
        </>
        
    )
}