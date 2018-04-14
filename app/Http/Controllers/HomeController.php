<?php

namespace App\Http\Controllers;

use App\App;
use App\Klimaat;
use Illuminate\Http\Request;

class HomeController extends Controller
{


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view('index');
    }

    public function apps_page()
    {
        $apps = App::all();
        return view('apps', ['apps' => $apps]);
    }

    public function kalender_page()
    {
        return view('kalender');
    }



    public function navigatie_page()
    {
        return view('navigatie');
    }

    public function stats_page()
    {
        return view('stats');
    }

    public function tel_page()
    {
        return view('telefoon');
    }


}
