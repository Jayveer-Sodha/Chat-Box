import React, { useEffect, useRef } from 'react'
import './Chats.css'
import { Card, CardContent, InputLabel, ListItem, ListItemText, Typography } from '@material-ui/core'
import { useState } from 'react'
import moment from 'moment'
import { listenerCount } from 'commander'
import { db } from '../../Firebase'
import firebase from 'firebase'
import { Unsubscribe } from '@material-ui/icons'




function Chats({ username, list }) {
  const [dpname, setDpname] =useState()
  const messagesEndRef = useRef(null);
  const [name,setName] = useState()
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, []);
  useEffect(scrollToBottom, [list]);

 
  const UU=(index)=>{
  
    setDpname(index)
    setTimeout(()=>{
      setDpname(null)
    },1000)
  }

//   const [userDetails, setUserDetails] = useState('')
// db.collection('chats').doc(doc.id).get()
//         .then(snapshot => setUserDetails(snapshot.data()))
//         console.log(userDetails)



  return (


    <div>
   
 
      <div className="message-holder">
        <div className="px-3  pb-5">

          {list.map((chat, index) =>

          (
            <React.Fragment key={index}>
      
              <div className={username === chat.name ? "user " : "guestuser"} >
             <div className="bubble bubble-bottom-left" id={dpname === index ? "showdpname":"hidedpname"}>{chat.name}</div>
                <button  id={username === chat.name ? "dp-div-hiden" : "profileImage"} onClick={()=>{UU(index)} }>
                <p>{ (chat.name.split(' ').map(name => name[0]).join('').toUpperCase() )}</p></button>
                  

                <div className="row flex-column">

                  <div className="col" >
                    {/* ///////////// name of user ////////////// */}
                    {/* <InputLabel >{username === chat.name ? "" : chat.name}</InputLabel> */}

                  </div>
                  <div className="col"  >
                    <Card className="card1">
                      <CardContent>
                        {/* {  moment.unix((chat.timestamp.seconds)).format('dd:mm h:mm a')} */}
                        <Typography  variant="body1" >
                          {chat.message}
                         
                          
                                              
                        </Typography>
                      </CardContent>                      
                    </Card>
                    <span className={username === chat.name ? "userTime " : "guestTime"} >{chat.messageTime}</span> 

                    <div style={{ float: "left", clear: "both" }}
                      ref={(el) => { const messagesEnd = el; }}>
                    </div>
                  </div>
                </div>

                

              </div>

            </React.Fragment>
          ))}
          <br /> <br />

          <div ref={messagesEndRef} />
        </div>
        
        </div>
  
    </div>
  )
}

export default Chats
