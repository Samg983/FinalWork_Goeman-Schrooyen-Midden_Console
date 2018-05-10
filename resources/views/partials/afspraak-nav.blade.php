<div class="col-3 left-column">
    <a href="{{ route("kalender") }}" class="{{ Request::path() == 'kalender' ? 'active-nav-left-col' : '' }}">Vandaag</a>
    <a href="{{ route("kalender.morgen") }}" class="{{ Request::path() == 'kalender/morgen' ? 'active-nav-left-col' : '' }}">Morgen</a>
    <a href="{{ route("kalender.overzicht") }}" class="{{ Request::path() == 'kalender/overzicht' ? 'active-nav-left-col' : '' }}">Overzicht</a>
</div>