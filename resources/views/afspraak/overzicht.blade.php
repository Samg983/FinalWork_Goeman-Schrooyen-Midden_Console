@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.afspraak-nav")

        <div class="col-9 right-column">
            <div class="row appointments">
                @foreach($afspraken as $afspraak)
                    <a href="#"
                       class="col-12 afspraak"><b>{{  Carbon\Carbon::parse($afspraak->datum)->format("D d M Y") }}</b> - {{ $afspraak->beschrijving }}   {!! $afspraak->adres ? "<small>Start navigatie</small>" : "" !!}</a>
                @endforeach
            </div>
        </div>
    </div>
@endsection