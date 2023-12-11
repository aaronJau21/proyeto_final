<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProveedorRequest;
use App\Models\Proveedor;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    public function create(ProveedorRequest $request)
    {
        $proveedor = Proveedor::create([
            'nombre' => $request->nombre,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'direccion' => $request->direccion,
            'ruc' => $request->ruc,
            'razonSocial' => $request->razonSocial,
            'cuentaCorriente' => $request->cuentaCorriente
        ]);

        return response()->json([
            'proveedor' => $proveedor
        ]);
    }

    public function getProveedor()
    {
        $proveedores = Proveedor::all();

        return response()->json([
            'proveedores' => $proveedores
        ]);
    }

    public function update($id, Request $request)
    {
        $proveedor = Proveedor::find($id);

        $proveedor->update([
            'nombre' => $request->nombre,
            'telefono' => $request->telefono,
            'email' => $request->email,
            'direccion' => $request->direccion,
            'ruc' => $request->ruc,
            'razonSocial' => $request->razonSocial,
            'cuentaCorriente' => $request->cuentaCorriente
        ]);

        return response()->json([
            'proveedor' => $proveedor
        ]);
    }

    public function delete($id)
    {
        $proveedor = Proveedor::find($id);
        $proveedor->delete();
    }
}
