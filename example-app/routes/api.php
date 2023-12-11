<?php

use App\Http\Controllers\DepartamentoController;
use App\Http\Controllers\EmpleadosController;
use App\Http\Controllers\EvaluacionController;
use App\Http\Controllers\InventarioController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\Orden_compraController;
use App\Http\Controllers\PropuestaController;
use App\Http\Controllers\ProveedorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// proveedor
Route::post('create/proveedor', [ProveedorController::class, 'create']);
Route::get('list/proveedor', [ProveedorController::class, 'getProveedor']);
Route::put('proveedor/{id}', [ProveedorController::class, 'update']);
Route::delete('proveedor/{id}', [ProveedorController::class, 'delete']);

// evaluaciones
Route::post('create/evaluacion', [EvaluacionController::class, 'create']);
Route::get('list/evaluacion', [EvaluacionController::class, 'getEvaluacion']);
Route::put('evaluacion/{id}', [EvaluacionController::class, 'update']);
Route::delete('evaluacion/{id}', [EvaluacionController::class, 'delete']);

// departamento
Route::post('create/departamento', [DepartamentoController::class, 'create']);
Route::get('list/departamento', [DepartamentoController::class, 'getEvaluacion']);
Route::put('departamento/{id}', [DepartamentoController::class, 'update']);
Route::delete('departamento/{id}', [DepartamentoController::class, 'delete']);

// empleado
Route::post('create/empleado', [EmpleadosController::class, 'create']);
Route::get('list/empleado', [EmpleadosController::class, 'getEvaluacion']);
Route::put('empleado/{id}', [EmpleadosController::class, 'update']);
Route::delete('empleado/{id}', [EmpleadosController::class, 'delete']);

// propuesta
Route::post('create/propuesta', [PropuestaController::class, 'create']);
Route::get('list/propuesta', [PropuestaController::class, 'getProveedor']);
Route::put('propuesta/{id}', [PropuestaController::class, 'update']);
Route::delete('propuesta/{id}', [PropuestaController::class, 'delete']);

// marca
Route::post('create/marca', [MarcaController::class, 'create']);
Route::get('list/marca', [MarcaController::class, 'getProveedor']);
Route::put('marca/{id}', [MarcaController::class, 'update']);
Route::delete('marca/{id}', [MarcaController::class, 'delete']);

// material
Route::post('create/material', [MaterialController::class, 'create']);
Route::get('list/material', [MaterialController::class, 'getProveedor']);
Route::put('material/{id}', [MaterialController::class, 'update']);
Route::delete('material/{id}', [MaterialController::class, 'delete']);

// inventario
Route::post('create/inventario', [InventarioController::class, 'create']);
Route::get('list/inventario', [InventarioController::class, 'getProveedor']);
Route::put('inventario/{id}', [InventarioController::class, 'update']);
Route::delete('inventario/{id}', [InventarioController::class, 'delete']);

// ordenCompra
Route::post('create/ordenCompra', [Orden_compraController::class, 'create']);
Route::get('list/ordenCompra', [Orden_compraController::class, 'getProveedor']);
Route::put('ordenCompra/{id}', [Orden_compraController::class, 'update']);
Route::delete('ordenCompra/{id}', [Orden_compraController::class, 'delete']);
