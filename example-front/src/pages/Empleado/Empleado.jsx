import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { http } from "../../services/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import AgregarEmpleado from "./modal/AgregarEmpleado"

const Empleado = () => {
    const [showModal, setShowModal] = useState(false);
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const { data } = await http.get('/list/empleado');
        setProveedores(data.empleado);
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
        await http.delete(`/empleado/${id}`);
    };

    useEffect(() => {
        getProveedores();
    }, []);
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={() => setShowModal(!showModal)}>
                    Agregar Empleado
                </Button>
            </div>
            {showModal && (
                <AgregarEmpleado
                    setShowModal={setShowModal}
                    showModal={showModal}
                    updateProveedores={updateProveedores}
                />
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>email</th>
                        <th>telefono</th>
                        <th>fechaNacimiento</th>
                        <th>departamento_id</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.email}</td>
                            <td>{proveedor.telefono}</td>
                            <td>{proveedor.fechaNacimiento}</td>
                            <td>{proveedor.departamento_id}</td>
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

export default Empleado