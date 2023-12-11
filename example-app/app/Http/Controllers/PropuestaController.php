<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropuestaRequest;
use App\Models\Propuesta;
use Illuminate\Http\Request;

class PropuestaController extends Controller
{
    public function create(PropuestaRequest $request)
    {
        $propuesta = Propuesta::create([
            'descripcion' => $request->descripcion,
            'tiempoEntrega' => $request->tiempoEntrega,
            'fechaInicio' => $request->fechaInicio,
            'fechaFin' => $request->fechaFin,
            'garantia' => $request->garantia,
            'evaluacione_id' => $request->evaluacione_id,
            'proveedore_id' => $request->proveedore_id,
            'empleado_id' => $request->empleado_id
        ]);

        return response()->json([
            'propuesta' => $propuesta
        ]);
    }

    public function getProveedor()
    {
        $propuesta = Propuesta::all();

        return response()->json([
            'propuesta' => $propuesta
        ]);
    }

    public function update($id, Request $request)
    {
        $propuesta = Propuesta::find($id);

        $propuesta->update([
            'descripcion' => $request->descripcion,
            'tiempoEntrega' => $request->tiempoEntrega,
            'fechaInicio' => $request->fechaInicio,
            'fechaFin' => $request->fechaFin,
            'garantia' => $request->garantia,
            'evaluacione_id' => $request->evaluacione_id,
            'proveedore_id' => $request->proveedore_id,
            'empleado_id' => $request->empleado_id
        ]);

        return response()->json([
            'propuesta' => $propuesta
        ]);
    }

    public function delete($id)
    {
        $propuesta = Propuesta::find($id);
        $propuesta->delete();
    }
}
