<?php

namespace App\Http\Controllers;

use App\App;
use App\Contact;
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

        $contacts = Contact::all()->take(3);

        return view('index', ['contacts' => $contacts]);
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
