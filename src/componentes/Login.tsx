import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = ()=>{
        if (username === 'admin' && password === 'admin'){
         alert('Ha tenido Acceso correstamente.')
        }
        else {
            alert('Acceso Denegado.')
        }
    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='Usuario' value={username} onChange={(e)=> setUsername(e.currentTarget.value)}/>
      <input type='password' placeholder='Contraseña' value={password} onChange={(e)=> setPassword(e.currentTarget.value)}/>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login