import React from 'react'
import './contact.css'

export default class Contact extends React.Component {

    render(){
        return(
            <div className= "ContactInfo" >
                <h1 id= "header">CONTACT INFORMATION</h1>
                <div className= "contactBody">
                    <ul className= "contactList">
                        <li> Email: kaydenclark725@gmail.com</li>
                        <li> Phone: (801) 448-5335</li>
                    </ul>
                    <p id= "endCard">Contact me anytime by call, text, or email</p>
                </div>
            </div>
        )
    }
}