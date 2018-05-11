<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instelling extends Model
{
    protected $primaryKey = "instellingId";
    protected $table = 'Instelling';
    public $timestamps = false;
}
