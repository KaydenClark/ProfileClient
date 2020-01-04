import React from 'react'
import {
    Switch, 
    Route,
} from 'react-router-dom'

import Home from '../home/home'
import './background.css'

export const Routes = () => {

    return (
        <div className= "backgorund">
            <Switch>
                <Route exact path= "/">
                    <HomePage />
                </Route>
                <Route path= "/contact">

                </Route>                
                <Route path= "/about">
                    
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