<div id="bottom-section" class="row">
    <div class="col">
        {{ $klimaat->temperatuurLinks }}
        <img class="heat" src="{{ asset("img/ic-heat.svg") }}"/>
    </div>
    <div class="col-8"></div>
    <div class="col">
        <img class="heat-right" src="{{ asset("img/ic-heat.svg") }}"/>
        {{ $klimaat->temperatuurRechts }}
    </div>
</div>