import React from "react"
import "../styles.css"

export default function Header(){
    return(
        <div className="header">
            <img className="logo" src="logo.png" alt="hogwartemployee"/>
            <h1 className="app-subtitle">Hogwart Employees</h1>
        </div>
    )
}