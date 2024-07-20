import { Persona } from '@/interface/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'

export const Tabla = ()=>{
    const [personas, setPersonas] = useState<Persona[]>([])
    const router = useRouter();
    const traerDatos = ()=>{
        obtenerPersonas().then((personas)=>{
            setPersonas(personas)
        })
    }

    useEffect(()=>{
        traerDatos()
    },[])

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
        }).catch(()=>{
            console.log()
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
                <th>Condicion Meidca</th>
                <th>Tipo de Membresia</th>
                <th>Metodo de Pago</th>
                <th>Objetivo Fitness</th>
                <th>Horario de Preferencia</th>
                <th>Accion</th>
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
                        <td>{p.tipoMembresia}</td>
                        <td>{p.metodoPago}</td>
                        <td>{p.objetivoFitness}</td>
                        <td>{p.horarioPreferido}</td>
                        <td>
                            <Link href={{pathname: '/EFormulario', query: {key: p.key}}}>
                                <Button variant='success' type='button' onClick={()=> actualizar(p.key!)}>Editar</Button>
                            </Link>
                            <Link href={{pathname: '/EFormulario', query: {key: p.key}}}>
                                <Button variant='danger' type='button' onClick={()=> eliminar(p.key!)}>Eliminar</Button>
                            </Link>
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
