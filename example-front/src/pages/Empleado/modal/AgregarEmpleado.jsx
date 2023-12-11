import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgregarEmpleado = ({ setShowModal, showModal, updateProveedores }) => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [departamento_id, setDepartamento_id] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            nombre,
            email,
            telefono,
            fechaNacimiento,
            departamento_id
        }
        try {
            const { data } = await http.post('create/empleado', datos);
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
                            <Form.Control type="text" placeholder="Ingrese el Nombre del proveedor" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Email del proveedor" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>FechaNacimiento</Form.Label>
                            <Form.Control type="date" placeholder="Ingrese el Dirección del proveedor" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>departamento_id</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Dirección del proveedor" value={departamento_id} onChange={(e) => setDepartamento_id(e.target.value)} />
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

export default AgregarEmpleado