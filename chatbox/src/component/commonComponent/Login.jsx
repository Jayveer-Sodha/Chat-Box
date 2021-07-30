import React,{useState} from 'react'

import './Login.css'
import { useHistory } from 'react-router-dom'
import fire from '../../Firebase'






const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

  localStorage.setItem('isLoggedin', false)
  localStorage.setItem('isAuth', false)
  // const [isAuth, setIsAuth] = useState(false);
    //firebase code 
    const handleLogin = (e) => {
      e.preventDefault();
      
      fire.auth().signInWithEmailAndPassword(email, password).then((user) =>
      {
    
        const Username = user.user.bc.email;
        const user1 = user.user.ya;
        // setIsAuth(user1)
        localStorage.setItem('isAuth', !user1)
        localStorage.setItem('isLoggedin',true)
        history.push('/chatbox',Username)
        // localStorage.setItem('isAuth', true)
        

      }).catch(() => {
          alert('Invalid Password')
          setEmail('')
          setPassword('')
      })
      localStorage.setItem('isAuth', false)
    }
  
       


    return (
        <>
            <div class="wrapper fadeInDown">
  <div id="formContent">
    

    <div class="fadeIn first">
    <label  className="text-center d-block ">Please Login Here To Join The Group</label>
    </div>


    <form onSubmit={handleLogin}>
      <input required value={email} name="email" type="email" id="login" onChange={(e) => {setEmail(e.target.value) }} class="fadeIn second" placeholder="Email Please"/>
      <input required value={password} name="password" type='password' onChange={(e) => {setPassword(e.target.value) }} id="password" class="fadeIn third"  placeholder="Password Please"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

 
    <div id="formFooter">
      <a class="underlineHover"  >Forgot Password?</a>
    </div>

  </div>
</div>


        
            
        </>
    )
}

export default Login

