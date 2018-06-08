@extends("layouts.master")

@section("middle-content")
    <div class="row">
       @include("partials.afspraak-nav")

        <div class="col-9 right-column">
            @foreach($afspraken as $afspraak)

                <p class="col-12 afspraak">
                    {{  Carbon\Carbon::parse($afspraak->datum)->format("D d M Y") }} - {{ $afspraak->beschrijving }}
                    {!! $afspraak->adres ? "<small>Start navigatie</small>" : "" !!}
                </p>


                    <a class="btn btn-primary" data-toggle="collapse" href="#afspraak{{ $afspraak->afspraakId }}" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Link with href
                    </a>


                <div class="collapse" id="#afspraak{{ $afspraak->afspraakId }}">

                        {{ $afspraak->beschrijving }}

                </div>

            @endforeach
        </div>
    </div>
@endsection