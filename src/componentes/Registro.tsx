import React, { useState } from 'react'
import Menu from './Menu'
import PFormulario from './PFormulario'

export const Registro = ()=>{
    const [nombre, setNombre] = useState('')
  return (
    <>
    <Menu/>
    <PFormulario/>
    </>
  )
}

export default Registro
