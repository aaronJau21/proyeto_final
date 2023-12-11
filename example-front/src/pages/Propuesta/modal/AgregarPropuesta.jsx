import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgregarPropuesta = ({ setShowModal, showModal, updateProveedores }) => {
    const [descripcion, setdescripcion] = useState("")
    const [tiempoEntrega, settiempoEntrega] = useState("")
    const [fechaInicio, setfechaInicio] = useState("")
    const [fechaFin, setfechaFin] = useState("")
    const [garantia, setgarantia] = useState("")
    const [evaluacione_id, setevaluacione_id] = useState("")
    const [proveedore_id, setproveedore_id] = useState("")
    const [empleado_id, setempleado_id] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            descripcion,
            tiempoEntrega,
            fechaInicio,
            fechaFin,
            garantia,
            evaluacione_id,
            proveedore_id,
            empleado_id
        }
        try {
            const { data } = await http.post('/create/propuesta', datos);
            console.log(data)
            setShowModal(!showModal)
            updateProveedores()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'fixed' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createProveedor}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>TiempoEntrega</Form.Label>
                            <Form.Control type="text" value={tiempoEntrega} onChange={(e) => settiempoEntrega(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>FechaInicio</Form.Label>
                            <Form.Control type="date" value={fechaInicio} onChange={(e) => setfechaInicio(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>FechaFin</Form.Label>
                            <Form.Control type="date" value={fechaFin} onChange={(e) => setfechaFin(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Garantia</Form.Label>
                            <Form.Control type="text" value={garantia} onChange={(e) => setgarantia(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Evaluacione_id</Form.Label>
                            <Form.Control type="text" value={evaluacione_id} onChange={(e) => setevaluacione_id(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Proveedore_id</Form.Label>
                            <Form.Control type="text" value={proveedore_id} onChange={(e) => setproveedore_id(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Empleado_id</Form.Label>
                            <Form.Control type="text" value={empleado_id} onChange={(e) => setempleado_id(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type='submit'>Save changes</Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(!showModal)}>Close</Button>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default AgregarPropuesta