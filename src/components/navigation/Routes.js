import React from 'react'
import {
    Switch, 
    Route,
} from 'react-router-dom'

import Home from '../home/home'

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path= "/">
                    <HomePage />
                </Route>
                <Route path= "/contact">
                    <HomePage />
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