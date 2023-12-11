<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $table = 'empleados';
    protected $fillable = [
        'nombre',
        'email',
        'telefono',
        'fechaNacimiento',
        'departamento_id'
    ];
}
