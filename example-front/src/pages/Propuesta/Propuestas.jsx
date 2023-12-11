import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { http } from "../../services/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import AgregarPropuesta from "./modal/AgregarPropuesta"


const Propuestas = () => {

    const [showModal, setShowModal] = useState(false);
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const { data } = await http.get('/list/propuesta');
        setProveedores(data.propuesta);
    };

    const updateProveedores = async () => {
        try {
            await getProveedores();
        } catch (error) {
            console.log(error);
        }
    };

    const trashProveedor = async (id) => {
        setProveedores((prevProveedores) =>
            prevProveedores.filter((proveedor) => proveedor.id !== id)
        );
        await http.delete(`/evaluacion/${id}`);
    };

    useEffect(() => {
        getProveedores();
    }, []);
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={() => setShowModal(!showModal)}>
                    Agregar Propuesta
                </Button>
            </div>
            {showModal && (
                <AgregarPropuesta
                    setShowModal={setShowModal}
                    showModal={showModal}
                    updateProveedores={updateProveedores}
                />
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>TiempoEntrega</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Garantia</th>
                        <th>Evaluacion</th>
                        <th>Proveedor</th>
                        <th>Empleado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.descripcion}</td>
                            <td>{proveedor.tiempoEntrega}</td>
                            <td>{proveedor.fechaInicio}</td>
                            <td>{proveedor.fechaFin}</td>
                            <td>{proveedor.garantia}</td>
                            <td>{proveedor.evaluacione_id}</td>
                            <td>{proveedor.proveedore_id}</td>
                            <td>{proveedor.empleado_id}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => trashProveedor(proveedor.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Propuestas