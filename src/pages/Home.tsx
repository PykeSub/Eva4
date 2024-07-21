import React from 'react'
import Menu from './componentes/Menu'

export const home = ()=>{
  return (
    <>
    <Menu/>
    <section>
        <div>
            <img src='assets/img/Gimnasio_-Bare-.jpg'/>
            <h1>Home</h1>
            <p>Transforma tu Cuerpo, transforma tu Vida</p>
        </div>
    </section>
    </>
  )
}

export default home
