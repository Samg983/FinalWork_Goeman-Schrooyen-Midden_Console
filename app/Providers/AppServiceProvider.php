<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Klimaat;

class AppServiceProvider extends ServiceProvider
{



    public function boot()
    {
        view()->share('klimaat', Klimaat::where('klimaatId', 1)->first());
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
