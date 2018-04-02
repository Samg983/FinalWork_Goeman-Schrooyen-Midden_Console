<?php

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

Auth::routes();


Route::get('/', [
    'uses' => 'HomeController@index',
    'as' => 'home'
]);

Route::get('/apps', [
    'uses' => 'HomeController@apps_page',
    'as' => 'apps'
]);

Route::get('/kalender', [
    'uses' => 'HomeController@kalender_page',
    'as' => 'kalender'
]);

Route::get('/muziek', [
    'uses' => 'HomeController@muziek_page',
    'as' => 'muziek'
]);

Route::get('/navigatie', [
    'uses' => 'HomeController@navigatie_page',
    'as' => 'navigatie'
]);

Route::get('/stats', [
    'uses' => 'HomeController@stats_page',
    'as' => 'stats'
]);

Route::get('/telefoon', [
    'uses' => 'HomeController@tel_page',
    'as' => 'telefoon'
]);

