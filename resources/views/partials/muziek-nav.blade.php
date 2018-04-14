<div class="col-3 left-column">
    <a href="{{ route("muziek") }}" class="{{ Request::path() == 'muziek' ? 'active-nav-muz' : '' }}">Zoek</a>
    <a href="{{ route("muziek.radio") }}" class="{{ Request::path() == 'muziek/radio' ? 'active-nav-muz' : '' }}">Radio</a>
    <a href="#">Spotify</a>
    <a href="#">Smartphone</a>
</div>