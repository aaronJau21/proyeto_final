import { createBrowserRouter } from "react-router-dom";
import Proveedor from "./pages/Proveedor/Proveedor";
import Template from "./template/Template";
import Evaluacion from "./pages/Evaluacion/Evaluacion";
import Departamentos from "./pages/Departamento/Departamentos";
import Empleado from "./pages/Empleado/Empleado";
import Propuestas from "./pages/Propuesta/Propuestas";
import Marca from "./pages/Marca/Marca";
import Inventario from "./pages/Inventario/Inventario";
import OrdenCompra from "./pages/OrdenCompra/OrdenCompra";
import Material from "./pages/material/Material";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        path: '/',
        element: <Proveedor />
      },
      {
        path: '/evaluacion',
        element: <Evaluacion />
      },
      {
        path: '/departamentos',
        element: <Departamentos />
      },
      {
        path: '/empleado',
        element: <Empleado />
      },
      {
        path: '/propuestas',
        element: <Propuestas />
      },
      {
        path: '/marca',
        element: <Marca />
      },
      {
        path: '/inventario',
        element: <Inventario />
      },
      {
        path: '/ordenCompra',
        element: <OrdenCompra />
      },
      {
        path: '/material',
        element: <Material />
      },
    ]
  }
])


export default router