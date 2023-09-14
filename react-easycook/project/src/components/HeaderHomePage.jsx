import React from "react"
import logo from '../images/easycook1-nobg.png'
import '../styles/headerHP.css'

export default function HeaderHP(){
    return (
        <div className='HeaderHP'>
            <img src={logo} className="logo blend-mode"></img>
            
        </div>
    )
}