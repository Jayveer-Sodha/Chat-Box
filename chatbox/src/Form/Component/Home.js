import React, { useEffect} from 'react'
import Headings from './Heading'
import UserList from './UserList'
import { useHistory } from "react-router";
const Home = () => {

   

   
    
    return (
        <div>
            <Headings />
            <UserList /> 
        </div>
    )
}

export default Home
