<div class="col-3 left-column">
    <a href="{{ route("muziek") }}" class="{{ Request::path() == 'muziek' ? 'active-nav-left-col' : '' }}">Smartphone</a>
    <a href="{{ route("muziek.radio") }}" class="{{ Request::path() == 'muziek/radio' ? 'active-nav-left-col' : '' }}">Radio</a>
    <a href="#" class="not-imp" data-message="Design van Spotify">Spotify</a>

</div>