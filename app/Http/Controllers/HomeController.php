<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('auth');
    }

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
        return view('apps');
    }

    public function kalender_page()
    {
        return view('kalender');
    }

    public function muziek_page()
    {
        return view('muziek');
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
