import React, { useState,useContext,useEffect} from 'react'
import { GlobalContext } from '../Contexts/GlobalState'
    import {Link, useHistory} from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {v4 as uuid} from 'uuid'


const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name:''
    });
   
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentId = props.match.params.id;
    // console.log("hello",props.match.params.id)
    


    useEffect(() => {
        const userId = currentId;
        const selectedUser = users.find(user => user.id === Number(userId))
        setSelectedUser(selectedUser)
    }, [currentId, users])
    
        //  console.log(selectedUser,currentId,users);
    

        const onSubmit = () => {
            editUser(selectedUser)
            history.push('/')
            console.log(selectedUser,users)
        }
        
            const onChange = (e) => {
            
            setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
            console.log(e.target.value)
            console.log('hello')
        }

            
             return (
                 <Form onSubmit={onSubmit}>
                     <FormGroup>
                     <Label className='text-center d-block'><h2>Edit User</h2> </Label>
                         <Input type="text" name="name" value={selectedUser.name}  onChange={onChange} className="my-2"  placeholder="Enter new name"></Input>
                     </FormGroup>
                     <Button className="px-5" type="submit">Edit</Button>
                     <Link to="/" className="btn btn-danger  px-5 float-end  ">Cancel</Link>
                  </Form>
             )
         }
         
         export default EditUser

    
    
