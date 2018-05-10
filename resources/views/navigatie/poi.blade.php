@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.nav-nav")
        <div class="col-9">
           @foreach($pois as $poi)

               <div class="poi">
                   <h5> {{ $poi->naam }}</h5>
                   <small> {{ $poi->soortPoi }}</small><br>
                  {{-- <small>Lat: {{ $poi->lat }}, Lng: {{ $poi->lng }}</small> --}}
               </div>

            @endforeach
        </div>


    </div>
@endsection

@section("scripts")

@endsection