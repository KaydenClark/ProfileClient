import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/NavBar.css'
import HamMenu from '../../assets/icons/hamburger_menu.png'

export const Links = () => {
    
    return (
        <div>
                <ul className= "ulList">
                    <li className= "liList">
                        <Link className= "link" to= "/">Home</Link>
                    </li>
                    <li id="project" className= "liList">
                        <Link className= "link" to= "/projects">Projects</Link>
                    </li>
                    <li className= "liList">
                        <Link className= "link" to= "/contact">Contact Me</Link>
                    </li>
                    <li className= "liList">
                        <Link className= "link" to= "/about">About</Link>
                    </li>
                    <li className= "liList">
                        <Link className= "link" to= "/blog">Blog</Link>
                    </li>
                    <li className= "liListRight">
                        <img src= {HamMenu} alt= "menuIcon" id="HamMenu"/>
                    </li>
                </ul>
        </div>
        )
}