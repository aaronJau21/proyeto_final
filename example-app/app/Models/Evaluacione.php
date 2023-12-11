<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluacione extends Model
{
    use HasFactory;
    protected $table = 'evaluaciones';
    protected $fillable = [
        'púntuacion',
        'decision',
        'fecha',
        'comentarios'
    ];
}
