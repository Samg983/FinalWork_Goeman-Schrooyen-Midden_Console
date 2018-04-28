@extends("layouts.master")

@section("middle-content")

    {{--<ul>
        <li>mlkjmlk</li>
        <li>mkljmjlk</li>
    </ul>
    <div id="dropzone">
        <p>d</p>
    </div>--}}
    <div class="col-12 card nav-block">
        <div class="row">
            <div class="col-1 section__padding"><img class="drag-icon" src="img/drag-icon.svg" alt="drag icon">
            </div>
            <div id="map" class="col-3"></div>
            <div class="col-8 section__padding">
                <h2>Huidige route</h2>
                <p>Geen route ingegeven</p>
                <form>
                    <div class="row nav-form">
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Straat">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Huisnummer">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Gemeente">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="Land" value="België">
                        </div>
                        <div class="col-6"></div>
                        <div class="col-6">
                            <button type="submit" class="btn">Go</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-12 card music-block">
        <div class="row">
            <div class="col-1 section__padding"><img class="drag-icon" src="img/drag-icon.svg" alt="drag icon">
            </div>
            <div class="col-3 music-photo"></div>
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

    <div class="col-6 card suspension-block">
        <div class="row">
            <div class="col-1 section__padding"><img class="drag-icon" src="img/drag-icon.svg" alt="drag icon">
            </div>
            <div class="col-11 section__padding">
                <p>Sport</p>
                <p>Eco</p>
                <p>Normal</p>
            </div>

        </div>
    </div>

    <div class="col-6 card contacts-block">
        <div class="row">
            <div class="col-1 section__padding"><img class="drag-icon" src="img/drag-icon.svg" alt="drag icon">
            </div>
            <div class="col-11 section__padding">
                @foreach($contacts as $contact)
                    <div class="row contact-person">
                        <div class="col-2"><img class="img-contact" src="{{ asset("img/contacts/".$contact->imgPath) }}"></div>
                        <div class="col-6">{{ $contact->naam }}</div>
                        <div class="col-2"><img src="img/contact-call.svg"></div>
                        <div class="col-2"><img
                                    src="{{ $contact->isFavo ? "img/contact-fav-full.svg" : "img/contact-fav.svg" }}">
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </div>




@endsection

@section("scripts")
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHVcLxTOD5M2zYPnr-mYWtxOdqqEGasaI&callback=initMap"
            async defer></script>
@endsection