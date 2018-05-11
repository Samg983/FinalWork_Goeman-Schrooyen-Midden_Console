<?php

namespace App\Http\Controllers;

use App\Instelling;
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

        $instellingen = Instelling::where("categorie", "=", "nav")->get();

        return view('navigatie.instellingen',['instellingen' => $instellingen]);
    }
}
