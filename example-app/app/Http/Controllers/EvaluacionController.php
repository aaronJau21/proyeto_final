<?php

namespace App\Http\Controllers;

use App\Http\Requests\EvaluacionRequest;
use App\Models\Evaluacione;
use Illuminate\Http\Request;

class EvaluacionController extends Controller
{
    public function create(EvaluacionRequest $request)
    {
        $Evaluacione = Evaluacione::create([
            'púntuacion' => $request->púntuacion,
            'decision' => $request->decision,
            'fecha' => $request->fecha,
            'comentarios' => $request->comentarios,
        ]);

        return response()->json([
            'Evaluacione' => $Evaluacione
        ]);
    }

    public function getEvaluacion()
    {
        $Evaluaciones = Evaluacione::all();

        return response()->json([
            'Evaluaciones' => $Evaluaciones
        ]);
    }

    public function update($id, Request $request)
    {
        $proveedor = Evaluacione::find($id);

        $proveedor->update([
            'púntuacion' => $request->púntuacion,
            'decision' => $request->decision,
            'fecha' => $request->fecha,
            'comentarios' => $request->comentarios,
        ]);

        return response()->json([
            'proveedor' => $proveedor
        ]);
    }

    public function delete($id)
    {
        $proveedor = Evaluacione::find($id);
        $proveedor->delete();
    }
}
