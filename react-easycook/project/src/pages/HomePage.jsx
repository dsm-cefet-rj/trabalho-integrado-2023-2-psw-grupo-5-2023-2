import React from 'react'
import '../styles/homepage.css'
import Rodape from '../components/Rodape'
import logo from '../images/easycook1-nobg.png'
import ContentHP from '../components/ContentHomePage'

//LINK do ROUTER
import {Link} from 'react-router-dom'

export default function HomePage(){
    return (
        <div className='HomePage' id='home'>
          <div className='HeaderHP'>
            <img src={logo} className="logo blend-mode"></img>  
        </div>
          <ContentHP></ContentHP>
          <Rodape></Rodape>
        </div>
    )
}