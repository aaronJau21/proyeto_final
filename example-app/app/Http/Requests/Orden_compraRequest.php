<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Orden_compraRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'cantidadSolicitada' => ['required'],
            'fechaOrden' => ['required'],
            'costoTotal' => ['required'],
            'material_id' => ['required'],
            'empleado_id' => ['required']
        ];
    }
}
