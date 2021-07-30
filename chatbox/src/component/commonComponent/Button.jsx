import React from 'react'
import SendIcon from '../../sendicon.png'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';


function Button({color,onClick,name}) {
    return (
        <div>
            <IconButton type="submit" className="App_Button" onClick={onClick} style={{width:"38px", height:"38px", marginLeft:"10px" }}><SendRoundedIcon  style={{width:"38px", height:"38px" }} /> </IconButton>
        </div>

    )
}

export default Button
