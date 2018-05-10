<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function update(Request $request)
    {
        $contact = Contact::where("contactId", $request->contact)->first();

        if($contact->isFavo){
            $contact->isFavo = false;
        } else {
            $contact->isFavo = true;
        }

        $contact->save();


        return redirect()->back();
    }
}
