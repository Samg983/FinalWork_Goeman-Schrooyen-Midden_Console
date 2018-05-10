@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.nav-nav")
        <div class="col-9">
            <input id="origin-input" class="controls" type="text"
                   placeholder="Enter an origin location">

            <input id="destination-input" class="controls" type="text"
                   placeholder="Enter a destination location">


            <div id="map" style="height: 70vh"></div>
        </div>


    </div>
@endsection

@section("scripts")

@endsection