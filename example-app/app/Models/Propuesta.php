<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Propuesta extends Model
{
    use HasFactory;
    protected $table = 'propuestas';
    protected $fillable = [
        'descripcion',
        'tiempoEntrega',
        'fechaInicio',
        'fechaFin',
        'garantia',
        'evaluacione_id',
        'proveedore_id',
        'empleado_id'
    ];
}
