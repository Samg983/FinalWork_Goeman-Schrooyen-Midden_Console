@extends("layouts.master")

@section("middle-content")
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
                        <button type="submit" class="btn">Go</button>
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
                <h3>Ophanging</h3>
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
                <div class="row contact-person">
                    <div class="col-2"><img src="img/contact-placeholder.svg"></div>
                    <div class="col-6">Sam Smith</div>
                    <div class="col-2"><img src="img/contact-call.svg"></div>
                    <div class="col-2"><img src="img/contact-fav.svg"></div>
                </div>
                <div class="row contact-person">
                    <div class="col-2"><img src="img/contact-placeholder.svg"></div>
                    <div class="col-6">Ethan Torp</div>
                    <div class="col-2"><img src="img/contact-call.svg"></div>
                    <div class="col-2"><img src="img/contact-fav.svg"></div>
                </div>
                <div class="row contact-person">
                    <div class="col-2"><img src="img/contact-placeholder.svg"></div>
                    <div class="col-6">Evans Barp</div>
                    <div class="col-2"><img src="img/contact-call.svg"></div>
                    <div class="col-2"><img src="img/contact-fav.svg"></div>
                </div>
            </div>
        </div>
    </div>
@endsection