import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase'
import Button from './Button'
import Input from './Input.jsx'
import Chats from './Chats';
import firebase from 'firebase'
import { useHistory } from "react-router-dom";
import GenerateUsername from 'generate-username-from-email'
import { Link, FormControl } from '@material-ui/core';
import './Chats.css'
import moment from 'moment';



const ChatBox = () => {
 

  const history = useHistory();
  const Uemail = history.location.state;
  const UserName = GenerateUsername(Uemail);
  // console.log("username :", UserName)
    const initialState = {
        name: '',
        message: ''
      }
      const [chats, setChats] = useState([])
      const [input, setInput] = useState(initialState)
    
      useEffect(() => {
        db.collection('chats').orderBy('timestamp','asc').onSnapshot(snapshot => {
          
          setChats([...snapshot.docs.map(doc => doc.data())])
          console.log("hello jayveer....",snapshot.docs.map(doc => doc.data()))
        })
      }, []);
    
    
      const HandelInput = (e) => {
    
        const { name, value } = e.target;
        setInput({
          ...input,[name]:value,
        })
      }
    
      const HandelSubmit = (e) => {
        e.preventDefault()
      //  console.log(...chats)
        // console.log(input.name)
        // console.log(input.message.length)
 

        if (input.message.length != 0) {
          db.collection('chats').add({
            // name: input.name,
            name:UserName,
            message: input.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            messageTime: moment.unix((firebase.firestore.Timestamp.now()).seconds).format('h:mm a'),
          })
        }
        else { alert("message is not valid") }
        console.log(moment.unix((firebase.firestore.Timestamp.now()).seconds).format('h:mm a'))


        
        //  setChats([...chats,{...input}])    
        setInput(initialState)
       
  }
  
  const HandelLogout = (() => {
    history.push('/')
  })


 
    return (
      <>
    
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="Main-div ">
          
             <label className="d-flex justify-content-center w-100 bg-primary "><strong><h3 style={ {color: 'white'}}>Welcome to Chat-Box :     { UserName}  </h3></strong> </label>   <Link style={ {float: 'right'}}onClick={ HandelLogout}  name="Logout me" >Logout Me</Link>
        <br />
     
          <form className=" App_form ">
            <FormControl className="App_form_control">
      <Input  name="message" type="text" placeholder="Type your Message" value={input.message} onChange={HandelInput} />
      <Button onClick={ HandelSubmit}  style={{float: "right"}} name="Chat" />
      </FormControl>
     </form>
     
          <Chats list={chats} username={UserName} />
        </div>
        </div>
       
        </>
    )
}
export default ChatBox;