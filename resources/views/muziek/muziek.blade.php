@extends("layouts.master")

@section("middle-content")
    <div class="row">
        @include("partials.muziek-nav")
        <div class="col-9 right-column">
            <div class="row tracks">
                @foreach($nummers as $nummer)
                    <a class="col-12 track">

                        {{ $nummer->naam }}
                    </a>
                @endforeach
            </div>
            <div class="row justify-content-center">
                <div class="col-8 section__padding text-center">
                    <h2>Crazy</h2>
                    <p>Gnarls Barkley</p>
                    <div class="row">
                        <div class="col player"><img src="img/music-back.svg"></div>
                        <div class="col player"><img src="img/music-play.svg"></div>
                        <div class="col player"><img src="img/music-forward.svg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

