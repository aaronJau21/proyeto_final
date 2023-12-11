import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { http } from "../../services/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import AgregarMaterial from "./modal/AgregarMaterial"


const Material = () => {
    const [showModal, setShowModal] = useState(false);
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const { data } = await http.get('/list/material');
        setProveedores(data.material);
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
        await http.delete(`/material/${id}`);
    };

    useEffect(() => {
        getProveedores();
    }, []);
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={() => setShowModal(!showModal)}>
                    Agregar Material
                </Button>
            </div>
            {showModal && (
                <AgregarMaterial
                    setShowModal={setShowModal}
                    showModal={showModal}
                    updateProveedores={updateProveedores}
                />
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>descripcion</th>
                        <th>costoUnitario</th>
                        <th>unidadMedida</th>
                        <th>marca</th>
                        <th>inventario</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.descripcion}</td>
                            <td>{proveedor.costoUnitario}</td>
                            <td>{proveedor.unidadMedida}</td>
                            <td>{proveedor.marca_id}</td>
                            <td>{proveedor.inventario_id}</td>
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

export default Material