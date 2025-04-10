<?php

namespace App\Http\Controllers;

use App\Models\Telefone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TelefoneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function get()
    {
        $dados = Telefone::all();
        return response()->json($dados);    
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $telefone = new Telefone();
        $telefone->id = $request->input('id');
        $telefone->value = $request->input('value');
        $telefone->monthlyPrice = $request->input('monthlyPrice');
        $telefone->setupPrice = $request->input('setupPrice');
        $telefone->currency = $request->input('currency');
        $telefone->save();

        return response()->json('Telefone cadastrado com sucesso.');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function getById($telefone)
    {
        $dados = Telefone::where('id', $telefone)->get();
        return response()->json($dados[0]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $telefone)
    {
        $telefone = Telefone::where('id', $telefone)->first();

        $telefone->value = $request->input('value');
        $telefone->monthlyPrice = $request->input('monthlyPrice');
        $telefone->setupPrice = $request->input('setupPrice');
        $telefone->currency = $request->input('currency');
        $telefone->save();

        return response()->json('Telefone atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($telefone)
    {
        Telefone::where('id', $telefone)->delete();

        return response()->json('Telefone excluido com sucesso.');
    }
}
