import React from 'react'
import Home from './Component/Home'
import EditUser  from './Component/EditUser'
import AddUser from './Component/AddUser'

import {GlobalProvider} from './Contexts/GlobalState';

import { BrowserRouter as Router, Switch,Link,Route } from 'react-router-dom'

function Application() {
    return (
        <div style={{maxWidth:'30rem', margin:'4rem auto'}}>

                <GlobalProvider>
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Login} /> */}
                    <Route exact path="/" component={Home} />
                    <Route  path="/edit/:id" component={EditUser}  />
                    <Route path="/add" component={AddUser} />
                </Switch>
                </Router>
                </GlobalProvider>
            {/* <PostForm />
            <PostFormFunctional /> */}

        </div>
    )
}

export default Application
