import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/NavBar.css'

export const Links = () => {
    
    return (
        <div>
            <nav className= "nav">
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
                </ul>
            </nav>
        </div>
        )
}