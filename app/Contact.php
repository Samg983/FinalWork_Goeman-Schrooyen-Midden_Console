<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

    protected $primaryKey = "contactId";
    protected $fillable = ['contactId', 'isFavo'];
    protected $table = 'Contact';
    public $timestamps = false;
}
