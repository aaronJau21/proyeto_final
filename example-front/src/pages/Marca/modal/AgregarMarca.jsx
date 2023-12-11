import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'


// eslint-disable-next-line react/prop-types
const AgregarMarca = ({ setShowModal, showModal, updateProveedores }) => {
    const [nombre, setPuntuacion] = useState("")
    const [descripcion, setDesicion] = useState("")
    const [ubicacionGeo, setFecha] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            nombre,
            descripcion,
            ubicacionGeo
        }
        try {
            const { data } = await http.post('create/marca', datos);
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
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Nombre del proveedor" value={nombre} onChange={(e) => setPuntuacion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Email del proveedor" value={descripcion} onChange={(e) => setDesicion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Ubicacion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={ubicacionGeo} onChange={(e) => setFecha(e.target.value)} />
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

export default AgregarMarca