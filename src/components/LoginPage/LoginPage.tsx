import axios from 'axios';
import * as React from 'react'; 
import { useContext, useEffect, useState } from 'react'
import { userType } from '../../redux/actions';
import { LoginContext } from './../../context/LoginContext';
import './LoginPage.css'
import { LOGIN } from './../../redux/actions';

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<userType>('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const loginContext = useContext(LoginContext)!;

  useEffect(() => {
    axios.post(`http://localhost:8080/users/login`, null, {
      params: {
        username: name,
        password: pass
      }
    })
    .then(response => setUser(response.data))
    .catch(error => {console.log(error)})
  }, [name, pass])

  const login = (e: React.MouseEvent) => {
    e.preventDefault();
    loginContext.dispatch({ type: LOGIN, payload: user });
  }

  return (
    <div className='LoginPage'>
      <form>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
          </div>
        </div>
        <div className='action'>
          <button onClick={login}>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
