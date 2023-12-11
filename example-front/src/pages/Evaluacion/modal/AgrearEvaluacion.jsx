import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgrearEvaluacion = ({ setShowModal, showModal, updateProveedores }) => {
    const [puntuacion, setPuntuacion] = useState("")
    const [decision, setDesicion] = useState("")
    const [fecha, setFecha] = useState("")
    const [comentarios, setComentarios] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            púntuacion: puntuacion,
            decision,
            fecha,
            comentarios
        }
        try {
            const { data } = await http.post('create/evaluacion', datos);
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
                            <Form.Label>Puntuacion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Nombre del proveedor" value={puntuacion} onChange={(e) => setPuntuacion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Desicion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Email del proveedor" value={decision} onChange={(e) => setDesicion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" placeholder="Ingrese el Teléfono del proveedor" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Comentarios</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Dirección del proveedor" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
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

export default AgrearEvaluacion