import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { http } from "../../services/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import AgrearEvaluacion from "./modal/AgrearEvaluacion"


const Evaluacion = () => {
    const [showModal, setShowModal] = useState(false);
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const { data } = await http.get('/list/evaluacion');
        setProveedores(data.Evaluaciones);
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
                    Agregar Evaluación
                </Button>
            </div>
            {showModal && (
                <AgrearEvaluacion
                    setShowModal={setShowModal}
                    showModal={showModal}
                    updateProveedores={updateProveedores}
                />
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Comentarios</th>
                        <th>Desicion</th>
                        <th>fecha</th>
                        <th>Puntuacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.comentarios}</td>
                            <td>{proveedor.decision}</td>
                            <td>{proveedor.fecha}</td>
                            <td>{proveedor.púntuacion}</td>
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

export default Evaluacion