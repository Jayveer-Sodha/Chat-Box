import React, { useState,useContext} from 'react'
import { GlobalContext } from '../Contexts/GlobalState'
    import {Link, useHistory} from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {v4 as uuid} from 'uuid'

const AddUser = () => {
    
    const { addUser, users } = useContext(GlobalContext);
    
    // console.log("users-id-add",newUser.id)
    
    const [name, setName] = useState();

 

   
    const onChange = (e) => {
        setName(e.target.value)
    }

    const history = useHistory();
    const onSubmit = () => {
        // console.log("count = ",  count + 1);
        const newUser = {
            // id: uuid(),
            id:users.length+1,
            name: name
        }
        addUser(newUser)
        // console.log("user id : ",newUser.id)


       
        history.push('/')
        
    }

    return (
        <>
        <Form onSubmit={onSubmit}  >
                <FormGroup>
                    
                <Label className='text-center d-block'><h2>Add User</h2> </Label>
                <Input value={name} name='name' onChange={onChange} className="my-2" type="text"  placeholder="Enter name"></Input>
            </FormGroup>
                <Button className="px-5" type="submit" >ADD</Button>
            <Link to="/" className="btn btn-danger px-5 float-end  ">Cancel</Link>
            </Form>
            
            
        

        
            
        </>        
    )
            
}


export default AddUser;
