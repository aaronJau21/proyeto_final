import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgregarProveedor = ({ setShowModal, showModal, updateProveedores }) => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ruc, setRuc] = useState("")
    const [razonSocial, setRazonSocial] = useState("")
    const [cuentaCorriente, setCuentaCorriente] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            nombre,
            email,
            telefono,
            direccion,
            ruc,
            razonSocial,
            cuentaCorriente
        }
        try {
            const { data } = await http.post('create/proveedor', datos);
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
                            <Form.Control type="email" placeholder="Ingrese el Email del proveedor" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Dirección del proveedor" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Ruc</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese el Ruc del proveedor" value={ruc} onChange={(e) => setRuc(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Razón Social</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Razón Social del proveedor" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cuenta Corriente</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Cuenta Corriente del proveedor" value={cuentaCorriente} onChange={(e) => setCuentaCorriente(e.target.value)} />
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

export default AgregarProveedor