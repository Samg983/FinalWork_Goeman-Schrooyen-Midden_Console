<div id="bottom-section" class="row">
    <div class="col">
        <span id="tempLeft">{{ number_format($klimaat->temperatuurLinks *0.15,1)}}°C</span>
        <img class="heat" src="{{ asset("img/ic-heat.svg") }}"/>
    </div>
    <div class="col-6"></div>
    <div class="col">
        <img class="heat-right" src="{{ asset("img/ic-heat.svg") }}"/>
        <span id="tempRight">{{ number_format($klimaat->temperatuurLinks *0.15,1)}}°C</span>
    </div>
</div>