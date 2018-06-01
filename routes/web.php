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

Route::get('/projectie', [
    'uses' => 'HomeController@projectie',
    'as' => 'projectie'
]);


Route::post('/updateContact', [
    'uses' => 'ContactController@update',
    'as' => 'contacts.update'
]);

Route::post('/changeDriver', [
    'uses' => 'HomeController@changeDriver',
    'as' => 'driver.change'
]);




Route::group(['prefix' => 'muziek'], function(){
    Route::get('/', [
        'uses' => 'MuziekController@muziek_page',
        'as' => 'muziek'
    ]);

    Route::get('/radio', [
        'uses' => 'MuziekController@radio_page',
        'as' => 'muziek.radio'
    ]);
});

Route::group(['prefix' => 'kalender'], function(){
    Route::get('/', [
        'uses' => 'AfspraakController@index',
        'as' => 'kalender'
    ]);

    Route::get('/morgen', [
        'uses' => 'AfspraakController@morgen',
        'as' => 'kalender.morgen'
    ]);

    Route::get('/overzicht', [
        'uses' => 'AfspraakController@overzicht',
        'as' => 'kalender.overzicht'
    ]);
});

Route::group(['prefix' => 'navigatie'], function(){
    Route::get('/', [
        'uses' => 'NavigatieController@index',
        'as' => 'navigatie'
    ]);

    Route::get('/poi', [
        'uses' => 'NavigatieController@poi',
        'as' => 'navigatie.poi'
    ]);

    Route::get('/instellingen', [
        'uses' => 'NavigatieController@instellingen',
        'as' => 'navigatie.instellingen'
    ]);
});



Route::get('/stats', [
    'uses' => 'HomeController@stats_page',
    'as' => 'stats'
]);

Route::get('/telefoon', [
    'uses' => 'HomeController@tel_page',
    'as' => 'telefoon'
]);

