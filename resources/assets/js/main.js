let prevCount;

//Aanpassen naargelang het wifi netwerk waarop je zit!!!!
let $computerIP = "192.168.0.134";
let $raspberryIP = "192.168.0.179";
let interval = 500;  // 1000 = 1 second, 3000 = 3 seconds
let bar;
let musicBlockPos, navBlockPos, contactsBlockPos, susBlockPos;
let $musicBlock, $navBlock, $contactsBlock, $susBlock;
let oldValue = 0;
let oldVolValue = 0;

$(document).ready(function () {
    //console.log(Cookies.getJSON());


    startTime();
    setTimeout(getRapport, interval);
    createCircularVolume();

    $musicBlock = $(".music-block");
    $navBlock = $(".nav-block");
    $contactsBlock = $(".contacts-block");
    $susBlock = $(".suspension-block");


    checkPositionBlocks("static");

    $(".large-blocks").sortable({
        update: function (e, ui) {
            console.log("update");


            Cookies.remove("musicBlock");
            Cookies.remove("navBlock");

            Cookies.set("musicBlock", $musicBlock.position());
            Cookies.set("navBlock", $navBlock.position());

            checkPositionBlocks("absolute");
            // console.log(Cookies.getJSON("musicBlock"));
            // console.log(Cookies.getJSON("navBlock"));
        },
        stop: function (e, ui) {
            console.log('stop');
            checkPositionBlocks("static");
        }
    });

    $(".small-blocks").sortable({
        update: function (e, ui) {
            Cookies.remove("contactsBlock");
            Cookies.remove("susBlock");

            Cookies.set("contactsBlock", $contactsBlock.position());
            Cookies.set("susBlock", $susBlock.position());

            checkPositionBlocks("absolute");

        },
        stop: function (e, ui) {
            console.log('stop');
            checkPositionBlocks("static");
        }
    });

    $('input[type=radio]').click(function () {
        //$("#changeProfile").submit();
    });


    if (Cookies.getJSON("musicTrack")) {
        console.log(Cookies.getJSON("musicTrack"));
        setTrack(Cookies.getJSON("musicTrack"));
    }

    $(".track").click(function (e) {
        e.preventDefault();

        $data = $(this).data("content");

        setTrack($data);
    });


    $(".updateContact").on("click", function () {
        $(this).closest("form").submit();
    });

    $(".not-imp").click(function () {

        if ($data = $(this).data("message")) {
            console.log($data);
            alert($data);
        } else {
            alert("Niet geïmplementeerd omwille van prototype");
        }

    });

    $('#variaModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })


    initMap();


});

function checkPositionBlocks(position) {
    if (musicBlockPos = Cookies.getJSON("musicBlock")) {
        $musicBlock.css({
            top: musicBlockPos.top,
            left: musicBlockPos.left,
            position: position
        });
    }


    if (navBlockPos = Cookies.getJSON("navBlock")) {
        $navBlock.css({
            top: navBlockPos.top,
            left: navBlockPos.left,
            position: position
        });

    }

    if (contactsBlockPos = Cookies.getJSON("contactsBlock")) {
        console.log(contactsBlockPos);
        $contactsBlock.css({
            top: contactsBlockPos.top,
            left: contactsBlockPos.left,
            position: position
        });
    }

    if (susBlockPos = Cookies.getJSON("susBlock")) {
        console.log(susBlockPos);
        $susBlock.css({
            top: susBlockPos.top,
            left: susBlockPos.left,
            position: position
        });
    }
}

function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function setTrack($data) {

    $track = $(".track");
    $track.removeClass("active");

    $track.each(function () {

        if (jsonEqual($(this).data("content"), $data)) {
            $(this).addClass("active");
        }
    });


    Cookies.set("musicTrack", $data);


    $(".playerAuthor").html($data.auteur);
    $(".playerTitle").html($data.naam);
}


function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    m = checkTime(m);

    document.getElementById('time').innerHTML =
        h + ":" + m;

    greeting(h);

    setTimeout(startTime, 500);
}

function greeting(hour) {
    let greeting = "";

    if (hour < 12) {
        greeting = "Goedemorgen";
    } else if (hour > 17) {
        greeting = "Goedenavond";
    } else {
        greeting = "Goedemiddag";
    }

    $("#topGreeting").html(greeting);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }  // add zero in front of numbers < 10
    return i;
}


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.0543, lng: 3.7174},
        zoom: 8,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
        ]

    });

    new AutocompleteDirectionsHandler(map);
}


function getRapport() {
    $.ajax({
        type: 'GET',
        url: 'http://' + $raspberryIP + ':8080/Rapport/getRapport',
        dataType: 'json',
        success: function (data) {
            console.log(data);

            checkButtonCounter(data.homeCounter);


            if (parseInt(data.volume) !== 128) {

                checkVolume(data.volume);
                setTemp(data.temperatuurLinks);
            }
        },
        complete: function (data) {
            setTimeout(getRapport, interval);
        }
    });
}

function checkButtonCounter(count) {
    let oldCount = Cookies.get("buttonCounter");

    if (parseInt(count) !== parseInt(oldCount)) {
        Cookies.set("buttonCounter", count);
        window.location.replace("http://" + $computerIP + "/car-dash/public");
    }
}

function checkVolume(value) {

    let $geluid = $(".geluid");

    if (Cookies.get("vol")) {
        oldVolValue = Math.round(Cookies.get("vol"));

    }

    if (parseInt(value) >= (parseInt(oldVolValue) + 8) || parseInt(value) <= (parseInt(oldVolValue) - 8)) {

        Cookies.set("vol", Math.round(value));

        $geluid.css("opacity", 1);
        $geluid.css("display", "block");

        drawVolume(mapNumber(value, 0, 255, 0, 100));

    }

}

function setTemp(left) {


    if (Cookies.get("oldTemp")) {

        oldValue = parseInt(Cookies.get("oldTemp")).toFixed(1);
        console.log("oldvalue " + oldValue);
    }

    if (parseInt(left) >= (oldValue + 8) || parseInt(left) <= (oldValue - 8)) {
        console.log("ja");

        Cookies.set("oldTemp", left);

        $("#tempLeft").html(mapNumber(left, 0, 255, 16, 28).toFixed(1) + "°C");
        $("#tempRight").html(mapNumber(left, 0, 255, 16, 28).toFixed(1) + "°C");

    }


}

function mapNumber(val, in_min, in_max, out_min, out_max) {
    //https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function drawVolume(e) {
    let volume = e / 100;

    bar.setText(Math.round(e));

    bar.animate(volume.toFixed(1), {}, function () {
        setTimeout(
            function () {
                $(".geluid").css("display", "none");
            }, 5000);
    });


}

function createCircularVolume() {
    bar = new ProgressBar.Circle("#geluid", {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 2,
        text: {
            autoStyleContainer: false
        },
        from: {color: '#aaa', width: 2},
        to: {color: '#333', width: 4},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);


            let value = circle.value() * 100;
            if (value === 0) {
                circle.setText('0');
            } else {
                circle.setText(Math.round(value));
            }

        },
        warnings: true
    });

    bar.text.style.fontFamily = '"Open Sans", sans-serif';
    bar.text.style.fontSize = '2rem';


}


/**
 * @constructor
 */
function AutocompleteDirectionsHandler(map) {
    this.map = map;
    this.originPlaceId = null;
    this.destinationPlaceId = null;
    this.travelMode = 'DRIVING';
    var originInput = document.getElementById('origin-input');
    var destinationInput = document.getElementById('destination-input');
    var modeSelector = document.getElementById('mode-selector');
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(map);

    var originAutocomplete = new google.maps.places.Autocomplete(
        originInput, {placeIdOnly: true});
    var destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput, {placeIdOnly: true});


    this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

/*// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function (id, mode) {
    var radioButton = document.getElementById(id);
    var me = this;
    radioButton.addEventListener('click', function () {
        me.travelMode = mode;
        me.route();
    });
};*/

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
    var me = this;
    autocomplete.bindTo('bounds', this.map);
    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
        }
        if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
        } else {
            me.destinationPlaceId = place.place_id;
        }
        me.route();
    });

};

AutocompleteDirectionsHandler.prototype.route = function () {
    if (!this.originPlaceId || !this.destinationPlaceId) {
        return;
    }
    var me = this;

    this.directionsService.route({
        origin: {'placeId': this.originPlaceId},
        destination: {'placeId': this.destinationPlaceId},
        travelMode: this.travelMode
    }, function (response, status) {
        if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};


