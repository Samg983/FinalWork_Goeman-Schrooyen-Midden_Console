@extends("layouts.master")

@section("middle-content")
    <div class="row">
        <div class="col-3 left-column">
            <a href="#">Adres invoeren</a>
            <a href="#">POI</a>
            <a href="#">Route instellingen</a>
        </div>
        <div id="map" class="col-9"></div>
    </div>
@endsection

@section("scripts")
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHVcLxTOD5M2zYPnr-mYWtxOdqqEGasaI&callback=initMap"
            async defer></script>
@endsection