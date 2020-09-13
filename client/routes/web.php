<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('prepare-to-login', function () {
    $state = Str::random(40);

    $query = http_build_query([
        'client_id' => env('CLIENT_ID'),
        'redirect_url' => env('REDIRECT_URL'),
        'response_type' => 'code',
        'scope' => '',
        'state' => $state,
    ]);

    return redirect('http://localhost:8000/oauth/authorize?'.$query);
})->name('prepare.login');

Route::get('callback', function (Request $request){
    dd($request->all());
});

