import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Menu from './componentes/Menu'

const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAutentificado, setIsAutentificado] = useState(false)
    
    const handleLogin = ()=>{
        if (username === 'admin' && password === 'admin'){
         alert('Ha tenido Acceso correstamente.')
         setIsAutentificado(true)
         //window.location.href = '/Home';
        }
        else {
            alert('Acceso Denegado.')
        }
    }

    const handleLogout = ()=>{
      setIsAutentificado(false)
      alert('Ha cerrado Sesion correstamente.')
      window.location.href = '/Login';
    }

  return (
    <div>
      {isAutentificado ? (
        <div>
          <Menu/>
          <h1>Bienvenido, {username}</h1>
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
          </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input type='text' placeholder='Usuario' value={username} onChange={(e)=> setUsername(e.currentTarget.value)}/>
          <input type='password' placeholder='contraseña' value={password} onChange={(e)=> setPassword(e.currentTarget.value)}/>
          <Button onClick={handleLogin}>Enter</Button>
        </div>
      )}
    </div>
  )
}

export default Login