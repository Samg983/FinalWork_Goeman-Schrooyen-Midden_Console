<?php

namespace App\Providers;

use App\Auto;
use App\Bestuurder;
use Illuminate\Support\ServiceProvider;
use App\Klimaat;

class AppServiceProvider extends ServiceProvider
{



    public function boot()
    {
        view()->share('klimaat', Klimaat::where('klimaatId', 1)->first());
        view()->share('auto', Auto::where('autoId', 1)->first());

        $auto = Auto::where('autoId', 1)->first();
        $bestuurder = Bestuurder::where("bestuurderId", $auto->huidigeBestuurder)->first();

        view()->share('huidigeBestuurder', $bestuurder);
        view()->share('bestuurders', Bestuurder::all());
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
