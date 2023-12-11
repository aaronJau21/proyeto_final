<?php

namespace App\Http\Controllers;

use App\Http\Requests\InventarioRequest;
use App\Models\Inventario;
use Illuminate\Http\Request;

class InventarioController extends Controller
{
    public function create(InventarioRequest $request)
    {
        $inventario = Inventario::create([
            'cantidadSalida' => $request->cantidadSalida,
            'cantidadEntrada' => $request->cantidadEntrada,
            'stock' => $request->stock,
        ]);

        return response()->json([
            'inventario' => $inventario
        ]);
    }

    public function getProveedor()
    {
        $inventario = Inventario::all();

        return response()->json([
            'inventario' => $inventario
        ]);
    }

    public function update($id, Request $request)
    {
        $inventario = Inventario::find($id);

        $inventario->update([
            'cantidadSalida' => $request->cantidadSalida,
            'cantidadEntrada' => $request->cantidadEntrada,
            'stock' => $request->stock,
        ]);

        return response()->json([
            'inventario' => $inventario
        ]);
    }

    public function delete($id)
    {
        $inventario = Inventario::find($id);
        $inventario->delete();
    }
}
