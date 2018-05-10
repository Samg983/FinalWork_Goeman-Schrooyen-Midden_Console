@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.afspraak-nav")

        <div class="col-9 right-column">
            <div class="row">
                @foreach($afspraken as $afspraak)
                    <a href="#"
                       class="col-12 afspraak">{{  Carbon\Carbon::parse($afspraak->datum)->format("D d M Y") }} {{ $afspraak->beschrijving }}</a>
                @endforeach
            </div>
        </div>
    </div>
@endsection