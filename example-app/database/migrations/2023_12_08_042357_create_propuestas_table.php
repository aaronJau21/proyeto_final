<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('propuestas', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion', 50);
            $table->integer('tiempoEntrega');
            $table->string('fechaInicio');
            $table->string('fechaFin');
            $table->integer('garantia');
            $table->foreignId('evaluacione_id')->constrained();
            $table->foreignId('proveedore_id')->constrained();
            $table->foreignId('empleado_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propuestas');
    }
};
