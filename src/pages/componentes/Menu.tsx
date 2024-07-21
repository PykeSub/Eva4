//import Link from 'next/link'
import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { logout } from '../api/localStore'

export const Menu = ()=>{
  const handleLogout = ()=>{
    logout();
    window.location.href = '/Salir';
  }
  return (
    <>
    <Container>
      <Nav className='me-auto'>
        <Nav.Link href='Login'>Login</Nav.Link>
        <Nav.Link href='Home'>Home</Nav.Link>
        <Nav.Link href='Tabla'>Visualizar</Nav.Link>
        <Nav.Link href='PFormulario'>Registro</Nav.Link>
        <Nav.Link href='Salir'>Salir</Nav.Link>
      </Nav>
      </Container>
    </>
  )
}

export default Menu
