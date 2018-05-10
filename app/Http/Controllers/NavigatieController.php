<?php

namespace App\Http\Controllers;

use App\POI;
use Illuminate\Http\Request;

class NavigatieController extends Controller
{
    public function index(){
        return view('navigatie.navigatie');
    }

    public function poi(){
        $pois = POI::all();
        return view('navigatie.poi', ['pois' => $pois]);
    }

    public function instellingen(){
        return view('navigatie.instellingen');
    }
}
