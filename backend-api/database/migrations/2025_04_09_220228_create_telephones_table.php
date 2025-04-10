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
        Schema::create('telephones', function (Blueprint $table) {
            $table->id();
            $table->string('value'); // e.g., "+55 84 99610-2212"
            $table->decimal('monthlyPrice', 8, 2); // e.g., 0.03
            $table->decimal('setupPrice', 8, 2);   // e.g., 3.40
            $table->string('currency', 3); // e.g., "BRL"
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('telephones');
    }
};
