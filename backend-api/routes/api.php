<?php

use App\Http\Controllers\TelefoneController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('telefone')->group(function () {
    Route::get('/get', [TelefoneController::class, 'get'])->name('telefone.get');
    Route::post('/store', [TelefoneController::class, 'store'])->name('telefone.store');
    Route::get('/getBy/{id}', [TelefoneController::class, 'getById'])->name('telefone.getBy');
    Route::match(['PUT', 'PATCH'], '/update/{id}', [TelefoneController::class, 'update'])->name('telefone.update');
    Route::delete('/delete/{id}', [TelefoneController::class, 'destroy'])->name('telefone.delete');
});