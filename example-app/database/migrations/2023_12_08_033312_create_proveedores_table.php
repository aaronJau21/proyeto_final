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
        Schema::create('proveedores', function (Blueprint $table) { //create datatable provee
            $table->id();
            $table->string('nombre', 30);
            $table->integer('telefono');
            $table->string('email', 30);
            $table->string('direccion', 30);
            $table->integer('ruc');
            $table->string('razonSocial', 30);
            $table->integer('cuentaCorriente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proveedores');
    }
};
