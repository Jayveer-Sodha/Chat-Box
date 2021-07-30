import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from '../Contexts/GlobalState'


const UserList = () => {
  
    const { users, removeUser } = useContext(GlobalContext);
    // localStorage.setItem('users', JSON.stringify(users));
   
    console.log("list = ", JSON.stringify(users));
    // console.log('user length = ',users.length);
    console.log()


    return (
        <>
            
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th className="text-center" scope="col">Edit</th>
                <th className="text-center" scope="col">Delete</th>
               
                </tr>
            </thead>
            <tbody>
                    {users.map((user,index) => {
                        return (
                            <tr>
                            <td><strong> {index+1 }</strong></td>
                            <td> <strong> {user.name }</strong></td>
                            <td><Link className="btn btn-warning w-100 " style={{marginRight:'10px'}} to={`/edit/${user.id}`}>Edit</Link></td>
                            <td><Button className="w-100" onClick={ () => removeUser(user.id)} color="danger">Delete</Button></td>
                            </tr>
                        )
                    }
            
            )}
            
               
            
            </tbody>
            </table>

            {/* <ListGroup style={{ marginTop: '20px' }}>
                
                {users.length > 0 ? (

                    <>
                    {users.map((user )=> (
                        <ListGroupItem style={{ display: 'flex' }} >
                        <strong> {user.id }</strong>
                        <strong> {user.name }</strong>
                            <div style={{marginLeft:'auto'}}>
                                <Link className="btn btn-warning " style={{marginRight:'10px'}} to={`/edit/${user.id}`}>Edit</Link>
                                    <Button onClick={ () => removeUser(user.id)} color="danger">Delete</Button>
                            </div>
                    </ListGroupItem>
                                    ))}
                        </>
                    

                ) : (
                        <h3 className="text-center">No Users</h3>
                )}
              
                </ListGroup> */}

                
         </>
    )
}

export default UserList
           
                    
                


            
                
            

                  

       
    
        
