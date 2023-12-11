<?php

namespace App\Http\Controllers;

use App\Http\Requests\MarcaRequest;
use App\Models\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    public function create(MarcaRequest $request)
    {
        $marca = Marca::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'ubicacionGeo' => $request->ubicacionGeo,
        ]);

        return response()->json([
            'marca' => $marca
        ]);
    }

    public function getProveedor()
    {
        $marca = Marca::all();

        return response()->json([
            'marca' => $marca
        ]);
    }

    public function update($id, Request $request)
    {
        $marca = Marca::find($id);

        $marca->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'ubicacionGeo' => $request->ubicacionGeo,
        ]);

        return response()->json([
            'marca' => $marca
        ]);
    }

    public function delete($id)
    {
        $marca = Marca::find($id);
        $marca->delete();
    }
}
