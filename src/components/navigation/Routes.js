import React from 'react'
import {
    Switch, 
    Route,
} from 'react-router-dom'

import Home from '../../pages/home/home'
import Projects from '../../pages/projects/projects'
import Contact from '../../pages/contact/contact'
import About from '../../pages/about/about'
import Blog from '../../pages/blog/blogMain'

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
                <Route path= "/blog">
                    <BlogPage />
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

function BlogPage(){
    return(
        <Blog />
    )
}