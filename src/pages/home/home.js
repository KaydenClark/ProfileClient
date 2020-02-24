import React from 'react';
import './home.css'
import profilePic from '../../assets/pictures/profilePic.png'
// import kcLogo from '../../assets/logo/kcLogo.jpg'
// import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        } //state
    }// constructor

    render(){
        return (
            <div className= "Home"  >
                <h1 id= "name" >Kayden Clark</h1>
                <div className= "mainBody" >
                    <div>
                        <img src= {profilePic} alt= "profilePic" className= "proPic"/>
                    </div>
                    <p id= "bio">I have studied programming for nearly 5yrs now, first in High School in programming class where I studied the fundamentals of programming using Python. My senior year of high school I took an intro to web development where I started to learn how to build static front-end websites using HTML 5 and CSS 3. At Helio Training I jumped head-first into web development with their full stack immersive course. There I learned JavaScript and how to use frameworks such as react and build backend API's with Express. I especially enjoy the challenge of backend development. I pride myself in my constructive problem-solving skills which I feel programming really eventuates. I am also proficient in Adobe programs such as photoshop and illustrator and have taken design courses in both.</p>
                    <div>
                    <p className= "links">
                        <a href= "https://github.com/KaydenClark" target= "_blank" rel="noopener noreferrer">Github</a> <a href ="https://www.linkedin.com/in/kaydenclark/" target= "_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    </div>
                </div>
            </div>
        ) //return 
    } //render
} //Home