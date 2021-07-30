
import './App.css';
import React from 'react'
import Login from './component/commonComponent/Login'
import ChatBox from './component/commonComponent/ChatBox'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './component/commonComponent/ProtectedRoute'




  
const App =()=> 
{
  
  
   return (
     <>
        <Router>
         <Switch>
         <ProtectedRoute path="/chatbox" component={ChatBox}  />
         <Route exact path="/" component={Login} />
          </Switch>    
        </Router>
    </>
);
}

export default App;


 
      

    
