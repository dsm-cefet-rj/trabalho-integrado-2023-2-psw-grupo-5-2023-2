import React from 'react'
import '../styles/homepage.css'
import Rodape from '../components/Rodape'
import logo from '../images/easycook1-nobg.png'
import ContentHP from '../components/ContentHomePage'

//LINK do ROUTER
import {Link} from 'react-router-dom'

export default function HomePage(){
    return (
        <div className=''>
          <div className='container min-vh-100' id='home'>
            <img src={logo} className="d-block"></img>
            <ContentHP></ContentHP>
          </div>
            <Rodape></Rodape>
        </div>
          )
}