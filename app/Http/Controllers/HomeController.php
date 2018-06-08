<?php

namespace App\Http\Controllers;

use App\App;
use App\Contact;
use App\Muzieknummer;
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
        $nummers = Muzieknummer::all();
        return view('index', ['contacts' => $contacts, 'nummers' => $nummers]);
    }

    public function apps_page()
    {
        $apps = App::all();
        return view('apps', ['apps' => $apps]);
    }




    public function stats_page()
    {

        $chartjs = $this->generateBarChart();
        $chart2 = $this->generateBarChart2();
        $chart3 = $this->generateBarChart3();

        return view('stats', ["chart"=>$chartjs, "chart2"=>$chart2, "chart3"=>$chart3]);
    }

    private function generateBarChart(){
        $chartjs = app()->chartjs
            ->name('consumption')
            ->type('line')
            ->size(['width' => 400, 'height' => 200])
            ->labels(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
            ->datasets([
                [
                    "label" => "Verbruik/maand (# liter)",
                    'backgroundColor' => "rgba(62,120,178,0.3)",
                    'borderColor' => "rgba(62,120,178,0.7)",
                    "pointBorderColor" => "rgba(62,120,178,0.7)",
                    "pointBackgroundColor" => "rgba(62,120,178,0.7)",
                    "pointHoverBackgroundColor" => "#fff",
                    "pointHoverBorderColor" => "rgba(220,220,220,1)",
                    'data' => [65, 59, 80, 81, 65, 30, 75],
                ]
            ])
            ->options([]);

        return $chartjs;
    }

    private function generateBarChart2(){
        $chartjs = app()->chartjs
            ->name('barChart')
            ->type('bar')
            ->size(['width' => 400, 'height' => 200])
            ->labels(['Label x', 'Label y'])
            ->datasets([
                [
                    "label" => "My First dataset",
                    'backgroundColor' => ['rgb(255, 100, 132)', 'rgb(54, 162, 235)'],
                    'data' => [69, 59]
                ],
                [
                    "label" => "My second dataset",
                    'backgroundColor' => [ 'rgb(54, 162, 235)','rgb(255, 100, 132)'],
                    'data' => [65, 12]
                ]
            ])
            ->options([]);

        return $chartjs;
    }

    private function generateBarChart3(){
        $chartjs = app()->chartjs
            ->name('pieChart')
            ->type('pie')
            ->size(['width' => 400, 'height' => 175])
            ->labels(['Bram', 'Sam'])
            ->datasets([
                [
                    "label" => "Aantal ritten per bestuurder",
                    'backgroundColor' => ['#3E78B2', '#E9B872'],
                    'data' => [10, 8]
                ]
            ])
            ->options([]);

        return $chartjs;
    }

    public function tel_page()
    {
        return view('telefoon');
    }

    public function changeDriver(Request $request){
        return "update driver";
    }

    public function projectie(){
        return view('projectie.index');
    }


}
