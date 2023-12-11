import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgregarInventario = ({ setShowModal, showModal, updateProveedores }) => {
    const [cantidadSalida, setPuntuacion] = useState("")
    const [cantidadEntrada, setDesicion] = useState("")
    const [stock, setFecha] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            cantidadSalida,
            cantidadEntrada,
            stock
        }
        try {
            const { data } = await http.post('create/inventario', datos);
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
                            <Form.Label>Cantidad Salida</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Nombre del proveedor" value={cantidadSalida} onChange={(e) => setPuntuacion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad Entrada</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Email del proveedor" value={cantidadEntrada} onChange={(e) => setDesicion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={stock} onChange={(e) => setFecha(e.target.value)} />
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

export default AgregarInventario