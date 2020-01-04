import React from 'react'
import {
    Switch, 
    Route,
} from 'react-router-dom'

import Home from '../home/home'
import Projects from '../projects/projects'
import Contact from '../contact/contact'
import About from '../about/about'

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path= "/">
                    <HomePage />
                </Route>
                <Route path= "/projects">
                    <ProjectsPage />
                </Route> 
                <Route path= "/contact">
                    <ContactPage />
                </Route>                
                <Route path= "/about">
                    <AboutPage />
                </Route>
            </Switch>
        </div>
    )
}

function HomePage(){
    return(
        <Home />
    )
}//HomePage

function ContactPage(){
    return(
        <Contact />
    )
}

function ProjectsPage(){
    return(
        <Projects />
    )
}

function AboutPage(){
    return(
        <About />
    )
}