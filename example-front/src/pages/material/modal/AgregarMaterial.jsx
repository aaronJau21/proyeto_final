import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'


// eslint-disable-next-line react/prop-types
const AgregarMaterial = ({ setShowModal, showModal, updateProveedores }) => {
    const [descripcion, setPuntuacion] = useState("")
    const [costoUnitario, setDesicion] = useState("")
    const [unidadMedida, setFecha] = useState("")
    const [marca_id, setMarca] = useState("")
    const [inventario_id, setInventario] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            descripcion,
            costoUnitario,
            unidadMedida,
            marca_id,
            inventario_id,
        }
        try {
            const { data } = await http.post('create/material', datos);
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
                            <Form.Label>descripcion</Form.Label>
                            <Form.Control type="text" value={descripcion} onChange={(e) => setPuntuacion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>costoUnitario</Form.Label>
                            <Form.Control type="text" value={costoUnitario} onChange={(e) => setDesicion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>unidadMedida</Form.Label>
                            <Form.Control type="text" value={unidadMedida} onChange={(e) => setFecha(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>marca_id</Form.Label>
                            <Form.Control type="text" value={marca_id} onChange={(e) => setMarca(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>inventario_id</Form.Label>
                            <Form.Control type="text" value={inventario_id} onChange={(e) => setInventario(e.target.value)} />
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

export default AgregarMaterial