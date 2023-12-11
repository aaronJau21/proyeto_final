<?php

namespace App\Http\Controllers;

use App\Http\Requests\Orden_compraRequest;
use App\Models\Orden_compra;
use Illuminate\Http\Request;

class Orden_compraController extends Controller
{
    public function create(Orden_compraRequest $request)
    {
        $ordenCompra = Orden_compra::create([
            'cantidadSolicitada' => $request->cantidadSolicitada,
            'fechaOrden' =>  $request->fechaOrden,
            'costoTotal' =>  $request->costoTotal,
            'material_id' =>  $request->material_id,
            'empleado_id' =>  $request->empleado_id
        ]);

        return response()->json([
            'ordenCompra' => $ordenCompra
        ]);
    }

    public function getProveedor()
    {
        $ordenCompra = Orden_compra::all();

        return response()->json([
            'ordenCompra' => $ordenCompra
        ]);
    }

    public function update($id, Request $request)
    {
        $ordenCompra = Orden_compra::find($id);

        $ordenCompra->update([
            'cantidadSolicitada' => $request->cantidadSolicitada,
            'fechaOrden' =>  $request->fechaOrden,
            'costoTotal' =>  $request->costoTotal,
            'material_id' =>  $request->material_id,
            'empleado_id' =>  $request->empleado_id
        ]);

        return response()->json([
            'ordenCompra' => $ordenCompra
        ]);
    }

    public function delete($id)
    {
        $ordenCompra = Orden_compra::find($id);
        $ordenCompra->delete();
    }
}
