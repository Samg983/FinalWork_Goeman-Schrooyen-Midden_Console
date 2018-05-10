<div id="top-section" class="row">
    <div class="col">
        <img src="{{ asset('img/ic_bluetooth.svg') }}">
        <img src="{{ asset('img/ic_wifi.svg') }}">
        <img src="{{ asset('img/ic_nav_klein.svg') }}">
    </div>
    <div class="col-8">
        <button id="greeting" class="no-btn" data-toggle="modal" data-target="#variaModal"><span id="topGreeting">Goedenavond</span> <span>{{ $huidigeBestuurder->naam }} </span> <span
                    class="fas fa-caret-down"></span></button>
    </div>
    <div id="time" class="col"><p>14:20</p></div>
</div>


