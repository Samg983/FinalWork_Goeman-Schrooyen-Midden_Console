<?php

namespace App\Http\Controllers;

use App\Muzieknummer;
use App\Radio;
use App\Klimaat;
use Illuminate\Http\Request;

class MuziekController extends Controller
{



    public function muziek_page()
    {
        $nummers = Muzieknummer::all();
        return view('muziek.muziek', ['nummers' => $nummers]);
    }

    public function radio_page()
    {
        $radiozenders = Radio::all();
        return view('muziek.radio', ['radiozenders' => $radiozenders]);
    }
}
