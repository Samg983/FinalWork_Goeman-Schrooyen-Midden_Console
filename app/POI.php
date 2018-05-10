<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class POI extends Model
{


    public function getLatAttribute($value) {
        return number_format((float)$value, 2, '.', '');
    }

    public function getLngAttribute($value) {
        return number_format((float)$value, 2, '.', '');
    }


    protected $table = 'Poi';
}
