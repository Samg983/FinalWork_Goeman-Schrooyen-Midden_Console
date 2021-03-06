<?php

namespace App\Http\Controllers;

use App\Afspraak;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AfspraakController extends Controller
{
    public function index()
    {


        $today = Carbon::now();
        $afspraken = Afspraak::whereDate("datum", "=", $today->format('Y-m-d'))->get();

        return view('afspraak.index', ['afspraken' => $afspraken]);
    }

    public function morgen() {

        $tomorrow = Carbon::tomorrow();
        $afspraken = Afspraak::whereDate("datum", "=", $tomorrow->format('Y-m-d'))->get();

        return view('afspraak.morgen', ['afspraken' => $afspraken]);
    }

    public function overzicht(){

        $afspraken = Afspraak::all()->sortBy("datum");

        return view('afspraak.overzicht', ['afspraken' => $afspraken]);
    }
}
