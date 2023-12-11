<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartamentoRequest;
use App\Models\Departamento;
use Illuminate\Http\Request;

class DepartamentoController extends Controller
{
    public function create(DepartamentoRequest $request)
    {
        $Departamento = Departamento::create([
            'nombre' => $request->nombre,
            'ubicacion' => $request->ubicacion
        ]);

        return response()->json([
            'Departamento' => $Departamento
        ]);
    }

    public function getEvaluacion()
    {
        $Departamento = Departamento::all();

        return response()->json([
            'Departamento' => $Departamento
        ]);
    }

    public function update($id, Request $request)
    {
        $Departamento = Departamento::find($id);

        $Departamento->update([
            'nombre' => $request->nombre,
            'ubicacion' => $request->ubicacion
        ]);

        return response()->json([
            'Departamento' => $Departamento
        ]);
    }

    public function delete($id)
    {
        $Departamento = Departamento::find($id);
        $Departamento->delete();
    }
}
