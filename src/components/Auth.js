import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from './store/authContext'


const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(true)
    const authCtx = useContext(AuthContex)
    
    const submitHandler = e => {
        e.preventDefault()
        
        const body = {
            username,
            password
        }
        
        const url = 'https://socialmtn.devmountain.com'
        if (register) {
            axios
              .post("https://socialmtn.devmountain.com/register", user)
              .then((res) => {
                console.log(res.data);
                authCtx.login(res.data.token, res.data.exp, res.data.userId);
              })
              .catch((err) => {
                setPassword("");
                setUsername("");
              });
          } else if (!register) {
            axios
              .post("https://socialmtn.devmountain.com/login", user)
              .then((res) => {
                console.log(res.data);
                authCtx.login(res.data.token, res.data.exp, res.data.userId);
              })
              .catch((err) => {
                setPassword("");
                setUsername("");
              });
          }

    authCtx.login(res.data.token, res.data.exp, res.data.userId)
}

       console.log('submitHandler called')
   }
 
   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='form-u-input'/>
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='form-p-input'/>
            
            <button className='form-btn'>{register ? 'Sign Up' : 'Login'}</button>
           </form>
            <button className='form-btn' onClick={() => setRegister (!register)}>Need to {register ? 'Login' : 'Sign Up'}?</button>
       </main>
   )

 
export default Auth