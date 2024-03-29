<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orden_compra extends Model
{
    use HasFactory;
    protected $table = 'orden_compras';
    protected  $fillable = [
        'cantidadSolicitada',
        'fechaOrden',
        'costoTotal',
        'material_id',
        'empleado_id'
    ];
}
