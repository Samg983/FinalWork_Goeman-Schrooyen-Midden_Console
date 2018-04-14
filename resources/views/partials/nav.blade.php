<div id="nav" class="row">
    <a href="{{ route("navigatie") }}" class="col-2 icon {{ Request::path() == 'navigatie' || Request::path() == '/' ? 'active-nav' : '' }}"><img src="{{ asset('img/nav-icon.svg') }}" alt="nav icon"></a>
    <a href="{{ route("muziek") }}" class="col-2 icon {{ Request::path() == 'muziek' || Request::path() == '/' || Request::path() == 'muziek/radio' ? 'active-nav' : '' }}"><img src="{{ asset('img/music-icon.svg') }}" alt="muziek icon"></a>
    <a href="{{ route("apps") }}" class="col-2 icon {{ Request::path() == 'apps' || Request::path() == '/' ? 'active-nav' : '' }}"><img src="{{ asset('img/apps-icon.svg') }}" alt="apps icon"></a>
    <a href="{{ route("telefoon") }}" class="col-2 icon {{ Request::path() == 'telefoon' || Request::path() == '/' ? 'active-nav' : '' }}"><img src="{{ asset('img/phone-icon.svg') }}" alt="telefoon icon"></a>
    <a href="{{ route("kalender") }}" class="col-2 icon {{ Request::path() == 'kalender' || Request::path() == '/' ? 'active-nav' : '' }}"><img src="{{ asset('img/cal-icon.svg') }}" alt="kalender icon"></a>
    <a href="{{ route("stats") }}" class="col-2 icon {{ Request::path() == 'stats' || Request::path() == '/' ?  'active-nav' : '' }}"><img src="{{ asset('img/graph-icon.svg') }}" alt="stats icon"></a>
</div>