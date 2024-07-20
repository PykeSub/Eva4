import { Persona } from '@/interface/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Menu from './Menu'

const initialStatePersona: Persona = {
    nombre: "",
    apellido: "",
    telefono: 0,
    correo: "",
    edad: 0,
    rut: "",
    condicionMedica: "",
    tipoMembresia: "",
    metodoPago: "",
    objetivoFitness: "",
    horarioPreferido: ""  
  }

export const EFormulario = ()=>{
    const params = useRouter()
    const [persona, setPersona] = useState<Persona>(initialStatePersona)

    useEffect(()=>{
        console.log(params.query)
        console.log(params.query.key)
        const key = params.query.key
        if (typeof key === 'string')(
            obtenerPersona(key).then((p)=>{
                if(p!=undefined){
                    setPersona(p)
                }
                else{
                    console.log('Persona no Encontrada.')
                }
            })
        )
    }, [])

    const validar = (nombre:string, value:string)=>{
        setPersona({...persona, [nombre]: value})
    }

    const actualizar = ()=>{
        actualizarPersona(persona).then(()=>{
            alert('Se ha Actualizado Correstamente.')
        }).catch(()=>{
            console.log()
        })
    }

  return (
    <Form>
        <Menu/>
        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Nombre'
            value={persona.nombre}
            name='nombre'
            onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
        </Form.Group>

        <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese suApellido'
        value={persona.apellido}
        name='apellido'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='tel'
        value={persona.telefono}
        name='telefono'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control type='email' placeholder='Ingrese su Correo'
        value={persona.correo}
        name='correo'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type='number' placeholder='Ingrese su Edad'
        value={persona.edad}
        name='edad'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Rut</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su Rut'
        value={persona.rut}
        name='rut'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Condiciones Médicas</Form.Label>
        <Form.Control as='textarea' aria-label='with textarea' name='condicionMedica' 
        value={persona.condicionMedica}
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Tipo de Membresia</Form.Label>
        <Form.Control name='tipoMembresia' 
        value={persona.tipoMembresia}
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
        <Form.Select aria-label='Default select example'>
          <option>Seleccione</option>
          <option value='mes'>Mensual</option>
          <option value='año'>Anual</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Método de Pago</Form.Label>
        <Form.Control name='metodoPago' 
        value={persona.metodoPago}
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
        <Form.Select aria-label='Default select example'>
          <option>Seleccione</option>
          <option value='credito'>Tarjeta de Crédito</option>
          <option value='debiro'>Tarjeta de Débito</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Objetivo Fitness</Form.Label>
        <Form.Control as='textarea' aria-label='with textarea' name='objetivoFitness' 
        value={persona.objetivoFitness}
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Horario Preferidos para Entrenar</Form.Label>
        <Form.Control as='textarea' aria-label='with textarea' name='horarioPreferido' 
        value={persona.horarioPreferido}
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>
    <Button variant='success' type='button' onClick={actualizar}>Actualizar</Button>
    </Form>
    
    )
}

export default EFormulario