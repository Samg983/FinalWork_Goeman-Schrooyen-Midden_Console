<?php

namespace App\Http\Controllers;

use App\Afspraak;
use Illuminate\Http\Request;

class AfspraakController extends Controller
{
    public function index()
    {
        return view('afspraak.index');
    }

    public function morgen() {
        return view('afspraak.morgen');
    }

    public function overzicht(){

        $afspraken = Afspraak::all()->sortBy("datum");

        return view('afspraak.overzicht', ['afspraken' => $afspraken]);
    }
}
