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
        Schema::create('orden_compras', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidadSolicitada');
            $table->string('fechaOrden');
            $table->float('costoTotal', 10, 2);
            $table->foreignId('material_id')->constrained();
            $table->foreignId('empleado_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orden_compras');
    }
};
