import { Link, Outlet } from 'react-router-dom'
import { Nav } from "react-bootstrap"


const Template = () => {
    return (
        <div className='d-flex'>
            <Nav defaultActiveKey="/home" className="flex-column mt-3 ms-3">
                <div className='bg-primary px-3 py-1 rounded-2 '>
                    <Link to="/" className='text-white '>Proveedor</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2 mt-3'>
                    <Link to="/evaluacion" className='text-white '>Evaluacion</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>
                    <Link to="/departamentos" className='text-white '>Departamentos</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>
                    <Link to="/empleado" className='text-white '>Empleado</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>
                    <Link to="/propuestas" className='text-white '>Propuestas</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>

                    <Link to="/marca" className='text-white '>Marca</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>

                    <Link to="/inventario" className='text-white '>Inventario</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2  mt-3'>

                    <Link to="/ordenCompra" className='text-white '>Orden Compra</Link>
                </div>
                <div className='bg-primary px-3 py-1 rounded-2 mt-3'>
                    <Link to="/material" className='text-white '>Material</Link>

                </div>

            </Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Template