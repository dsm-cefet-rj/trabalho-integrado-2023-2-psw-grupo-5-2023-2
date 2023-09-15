import React from 'react'
import '../styles/index.css'
import '../styles/homepage.css'
import Rodape from '../components/Rodape'
import HeaderHP from '../components/HeaderHomePage'
import ContentHP from '../components/ContentHomePage'

//LINK do ROUTER
import {Link} from 'react-router-dom'

export default function HomePage(){
    return (
        <div className='HomePage'>
          <Rodape></Rodape>
          <HeaderHP></HeaderHP>
          <ContentHP></ContentHP>
        </div>
    )
}