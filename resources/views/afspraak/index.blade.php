@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.afspraak-nav")

        <div class="col-9 right-column">
            <div class="row">
                @foreach($afspraken as $afspraak)

                        <p class="col-12 afspraak">
                            {{  Carbon\Carbon::parse($afspraak->datum)->format("D d M Y") }} - {{ $afspraak->beschrijving }}
                            {!! $afspraak->adres ? "<small>Get directions</small>" : "" !!}
                        </p>



                @endforeach
            </div>
        </div>
    </div>
@endsection