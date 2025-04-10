<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Telefone extends Model
{
    use HasFactory;

    protected $table = 'telephones';

    protected $casts = [
        'monthlyPrice' => 'decimal:2',
        'setupPrice' => 'decimal:2',
    ];
    
    public static function get($id = null) {
        $telefone = Telefone::all();
        if($id) {
            $telefone = $telefone->where('id', $id);
        }
        return $telefone;
    }
}
