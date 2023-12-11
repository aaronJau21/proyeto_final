import { Button, Form, Modal } from 'react-bootstrap'
import { http } from '../../../services/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgregarOrdenCompra = ({ setShowModal, showModal, updateProveedores }) => {
    const [cantidadSolicitada, setPuntuacion] = useState("")
    const [fechaOrden, setDesicion] = useState("")
    const [costoTotal, setFecha] = useState("")
    const [material_id, setMaterial] = useState("")
    const [empleado_id, setEmpleado] = useState("")

    const createProveedor = async (e) => {
        e.preventDefault()
        const datos = {
            cantidadSolicitada,
            fechaOrden,
            costoTotal,
            material_id,
            empleado_id
        }
        try {
            const { data } = await http.post('create/ordenCompra', datos);
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
                            <Form.Label>Cantidad Solicitada</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Nombre del proveedor" value={cantidadSolicitada} onChange={(e) => setPuntuacion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha Orden</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Email del proveedor" value={fechaOrden} onChange={(e) => setDesicion(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Costo Total</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={costoTotal} onChange={(e) => setFecha(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Material</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={material_id} onChange={(e) => setMaterial(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Empleado_id</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el Teléfono del proveedor" value={empleado_id} onChange={(e) => setEmpleado(e.target.value)} />
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

export default AgregarOrdenCompra