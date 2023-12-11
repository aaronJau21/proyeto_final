<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmpleadosRequest;
use App\Models\Empleado;
use Illuminate\Http\Request;

class EmpleadosController extends Controller
{
    public function create(EmpleadosRequest $request)
    {
        $empleado = Empleado::create([
            'nombre' => $request->nombre,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'fechaNacimiento' => $request->fechaNacimiento,
            'departamento_id' => $request->departamento_id
        ]);

        return response()->json([
            'empleado' => $empleado
        ]);
    }

    public function getEvaluacion()
    {
        $empleado = Empleado::all();

        return response()->json([
            'empleado' => $empleado
        ]);
    }

    public function update($id, Request $request)
    {
        $empleado = Empleado::find($id);

        $empleado->update([
            'nombre' => $request->nombre,
            'ubicacion' => $request->ubicacion
        ]);

        return response()->json([
            'empleado' => $empleado
        ]);
    }

    public function delete($id)
    {
        $empleado = Empleado::find($id);
        $empleado->delete();
    }
}
