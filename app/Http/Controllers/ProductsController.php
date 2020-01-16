<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id'=>1, 'nome'=>'product 1'],
            ['id'=>2, 'nome'=>'product 2'],
            ['id'=>3, 'nome'=>'product 3'],
            ['id'=>4, 'nome'=>'product 4'],
            ['id'=>5, 'nome'=>'product 5'],
        ]);
    }
}
