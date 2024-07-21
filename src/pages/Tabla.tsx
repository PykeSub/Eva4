import { Persona } from '@/interface/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import Link from 'next/link'
import { eliminarPersona, obtenerPersonas } from '@/firebase/Promesas'
import Menu from './componentes/Menu'
//import { deletePersona, getPersonas } from './api/localStore'

export const Tabla = ()=>{
    const [personas, setPersonas] = useState<Persona[]>([])
    const [show, setShow] = useState(false);
    const router = useRouter();
    const traerDatos = ()=>{
        obtenerPersonas().then((personas)=>{
            setPersonas(personas)
        })
    }

    useEffect(()=>{
        traerDatos()
    },[])

    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const actualizar = (key: string)=>{
        router.push({
            pathname: '/EFormulario',
            query:{key}
        });
    }

    const eliminar = (key: string)=>{   
        eliminarPersona({key} as Persona).then(()=>{
            alert('La persona fue Eliminada correstamente.')
            traerDatos();
        }).catch((e)=>{
            console.log(e)
            alert('Ocurrio un error al Eliminar la Persona.')
        })
    }

  return (
    <>
    <Menu/>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Rut</th>
                <th>Condicion Medica</th>
                <th>Objetivo Fitness</th>
                <th>Horario de Preferencia</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
            personas.map((p)=>{
                return <tr key={p.key}>
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.telefono}</td>
                    <td>{p.correo}</td>
                    <td>{p.edad}</td>
                    <td>{p.rut}</td>
                    <td>{p.condicionMedica}</td>
                    <td>{p.objetivoFitness}</td>
                    <td>{p.horarioPreferido}</td>
                    <td>
                    <Link href={{pathname: '/EFormulario', query: {key: p.key}}}>
                      <Button variant='success' type='button' onClick={()=> actualizar(p.key!)}>Editar</Button>
                    </Link>
                       <Button variant='danger' type='button' onClick={handleShow}>Eliminar</Button>
                       <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Datos de la Tabla</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>¿ Estas seguro de que quieres eliminar a {p.nombre} {p.apellido} ?</Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant='danger' onClick={()=> eliminar(p.key!)}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                       </Modal>
                  </td>
                </tr>
              })
            }
        </tbody>
    </Table>
    </>
  )
}

export default Tabla
