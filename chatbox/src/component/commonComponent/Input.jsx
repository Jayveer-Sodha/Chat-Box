import React from 'react'




function Input({ name, value, placeholder, onChange, type }) {
    
    

    return (
        <>
            <input name={name} type={type} className="form-control App_Input" autoComplete="off" type="text" value={value} required onChange={onChange} placeholder={placeholder}/>
        </>
    )
}

export default Input
