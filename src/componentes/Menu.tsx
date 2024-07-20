import Link from 'next/link'
import React from 'react'

export const Menu = ()=>{
  return (
    <>
    <nav>
        <Link href='Tabla'>
        Tabla
        </Link>
        <br/>
        <Link href='Registro'>
        Registro
        </Link>
        <br/>
        <Link href='Salir'>
        Salir
        </Link>
        <br/>
        <Link href='PFormulario'>
        Formulario
        </Link>
        <br/>
    </nav>
    </>
  )
}

export default Menu
