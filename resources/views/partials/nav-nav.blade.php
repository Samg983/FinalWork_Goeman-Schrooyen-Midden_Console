<div class="col-3 left-column">
    <a href="{{ route("navigatie") }}" class="{{ Request::path() == 'navigatie' ? 'active-nav-left-col' : '' }}">Adres invoeren</a>
    <a href="{{ route("navigatie.poi") }}" class="{{ Request::path() == 'navigatie/poi' ? 'active-nav-left-col' : '' }}">POI</a>
    <a href="{{ route("navigatie.instellingen") }}" class="{{ Request::path() == 'navigatie/instellingen' ? 'active-nav-left-col' : '' }}">Route instellingen</a>
</div>