import React from 'react';
import './home.css'
import profilePic from '../../assets/pictures/profilePic.png'
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
            <div className= "Home" >
                <div clasName= "pro-bio">
                    <img src= {profilePic} id="profilePic" />
                    <h1 id= "header">
                        Kayden Clark
                    </h1>
                </div>
            </div>
        ) //return 
    } //render
} //Home