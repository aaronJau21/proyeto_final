import { Button, Table } from "react-bootstrap"
import AgregarProveedor from "./modal/AgregarProveedor"
import { useEffect, useState } from "react"
import { http } from "../../services/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const Proveedor = () => {
    const [showModal, setShowModal] = useState(false);
    const [proveedores, setProveedores] = useState([]);

    const getProveedores = async () => {
        const { data } = await http.get('/list/proveedor');
        setProveedores(data.proveedores);
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
        await http.delete(`/proveedor/${id}`);
    };

    useEffect(() => {
        getProveedores();
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <Button variant="success" onClick={() => setShowModal(!showModal)}>
                    Agregar Proveedor
                </Button>
            </div>
            {showModal && (
                <AgregarProveedor
                    setShowModal={setShowModal}
                    showModal={showModal}
                    updateProveedores={updateProveedores}
                />
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Ruc</th>
                        <th>Razon Social</th>
                        <th>Cuenta Corriente</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.nombre}</td>
                            <td>{proveedor.telefono}</td>
                            <td>{proveedor.email}</td>
                            <td>{proveedor.direccion}</td>
                            <td>{proveedor.ruc}</td>
                            <td>{proveedor.razonSocial}</td>
                            <td>{proveedor.cuentaCorriente}</td>
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
    );
};

export default Proveedor;
