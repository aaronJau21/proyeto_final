<?php

namespace App\Http\Controllers;

use App\Http\Requests\MaterialRequest;
use App\Models\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function create(MaterialRequest $request)
    {
        $material = Material::create([
            'descripcion' => $request->descripcion,
            'costoUnitario' => $request->costoUnitario,
            'unidadMedida' => $request->unidadMedida,
            'marca_id' => $request->marca_id,
            'inventario_id' => $request->inventario_id
        ]);

        return response()->json([
            'material' => $material
        ]);
    }

    public function getProveedor()
    {
        $material = Material::all();

        return response()->json([
            'material' => $material
        ]);
    }

    public function update($id, Request $request)
    {
        $material = Material::find($id);

        $material->update([
            'descripcion' => $request->descripcion,
            'costoUnitario' => $request->costoUnitario,
            'unidadMedida' => $request->unidadMedida,
            'marca_id' => $request->marca_id,
            'inventario_id' => $request->inventario_id
        ]);

        return response()->json([
            'material' => $material
        ]);
    }

    public function delete($id)
    {
        $material = Material::find($id);
        $material->delete();
    }
}
