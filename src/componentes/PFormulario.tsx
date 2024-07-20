import { Persona } from '@/interface/interfaces'
import React, { useState } from 'react'
import Menu from './Menu'
import { Button, Form, InputGroup } from 'react-bootstrap'

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

const PFormulario = ()=>{
    const [persona, setPersona] = useState<Persona>(initialStatePersona)
    
    const registrar= ()=>{
      registrarPersona(persona).then(()=>{
        alert('Se ha registrado Correstamente.')
      }).catch(()=>{
          alert('Ocurrio un Problema.')
          console.log()
      })
    }

    const validar = (nombre: string, value: string)=>{
      setPersona({...persona, [nombre]: value})
    }

  return (
    <>
    <Menu/>
    <Form>
      <h2>Registrar Nuevo Usuario</h2>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su Nombre'
        name='nombre'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control type='text' placeholder='Ingrese suApellido'
        name='apellido'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Telefono</Form.Label>
        <Form.Control type='tel'
        name='telefono'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control type='email' placeholder='Ingrese su Correo'
        name='correo'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type='number' placeholder='Ingrese su Edad'
        name='edad'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Rut</Form.Label>
        <Form.Control type='text' placeholder='Ingrese su Rut'
        name='rut'
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Condiciones Médicas</InputGroup.Text>
        <Form.Control as='textarea' aria-label='with textarea' name='condicionMedica' 
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </InputGroup>

      <Form.Group>
        <Form.Label>Tipo de Membresia</Form.Label>
        <Form.Control name='tipoMembresia' 
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
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
        <Form.Select aria-label='Default select example'>
          <option>Seleccione</option>
          <option value='credito'>Tarjeta de Crédito</option>
          <option value='debiro'>Tarjeta de Débito</option>
        </Form.Select>
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Objetivo Fitness</InputGroup.Text>
        <Form.Control as='textarea' aria-label='with textarea' name='objetivoFitness' 
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Horario Preferidos para Entrenar</InputGroup.Text>
        <Form.Control as='textarea' aria-label='with textarea' name='horarioPreferido' 
        onChange={(e)=>{validar(e.currentTarget.name, e.currentTarget.value)}}/>
      </InputGroup>
    <Button variant='success' type='button' onClick={registrar}>Registrar</Button>
    </Form>
    </>
  )
}

export default PFormulario