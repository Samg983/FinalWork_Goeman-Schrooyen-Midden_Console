/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var interval = 1000; // 1000 = 1 second, 3000 = 3 seconds
var prevCount = void 0;
var $computerIP = "192.168.0.134";
var $raspberryIP = "192.168.0.179";
var bar = void 0;
$(document).ready(function () {
    console.log(Cookies.getJSON());

    startTime();
    setTimeout(getRapport, interval);
    createCircularVolume();

    var $musicBlock = $(".music-block");
    var $navBlock = $(".nav-block");
    var musicBlockPos = void 0,
        navBlockPos = void 0;

    if (musicBlockPos = Cookies.getJSON("musicBlock")) {
        $musicBlock.css({
            top: musicBlockPos.top,
            left: musicBlockPos.left
        });
    }

    if (navBlockPos = Cookies.getJSON("navBlock")) {
        console.log("top nav " + navBlockPos.top);

        $navBlock.css({
            top: navBlockPos.top,
            left: navBlockPos.left
        });
    }

    $('#variaModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('whatever'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('New message to ' + recipient);
        modal.find('.modal-body input').val(recipient);
    });

    $(".large-blocks").sortable({
        update: function update(e, ui) {
            console.log("update");

            console.log($musicBlock.position());
            console.log($navBlock.position());

            Cookies.remove("musicBlock");
            Cookies.remove("navBlock");
            /*Cookies.set("musicBlock", $musicBlock.position());
            Cookies.set("navBlock", $navBlock.position());*/

            if (musicBlockPos = Cookies.getJSON("musicBlock")) {
                console.log("musicBlockPos");
                console.log(musicBlockPos.top);
                console.log(musicBlockPos.left);

                $musicBlock.css({
                    top: musicBlockPos.top,
                    left: musicBlockPos.left
                });
            }

            if (navBlockPos = Cookies.getJSON("navBlock")) {
                console.log("navBlockPos");
                console.log(navBlockPos.top);
                console.log(navBlockPos.left);

                $navBlock.css({
                    top: navBlockPos.top,
                    left: navBlockPos.left
                });
            }

            console.log(Cookies.getJSON("musicBlock"));
            console.log(Cookies.getJSON("navBlock"));
        }
    });
    $(".small-blocks").sortable();

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
            alert("Not implemented yet");
        }
    });

    initMap();
});

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
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);

    document.getElementById('time').innerHTML = h + ":" + m;

    greeting(h);

    setTimeout(startTime, 500);
}

function greeting(hour) {
    var greeting = "";

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
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}

var map = void 0;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.0543, lng: 3.7174 },
        zoom: 8,
        disableDefaultUI: true,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#263c3f"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6b9a76"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#38414e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#212a37"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9ca5b3"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#1f2835"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#f3d19c"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2f3948"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#17263c"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#515c6d"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#17263c"
            }]
        }]

    });

    new AutocompleteDirectionsHandler(map);
}

function getRapport() {
    $.ajax({
        type: 'GET',
        url: 'http://' + $raspberryIP + ':8080/Rapport/getRapport',
        dataType: 'json',
        success: function success(data) {
            checkButtonCounter(data.buttonCounter);
            setTemp(data.temperatuurLinks);
            checkVolume(data.temperatuurLinks);
        },
        complete: function complete(data) {
            setTimeout(getRapport, interval);
        }
    });
}

function checkButtonCounter(count) {
    var oldCount = Cookies.get("buttonCounter");

    if (parseInt(count) !== parseInt(oldCount)) {
        Cookies.set("buttonCounter", count);
        window.location.replace("http://" + $computerIP + "/car-dash/public");
    }
}

function checkVolume(value) {
    var oldValue = Cookies.get("vol");
    var $geluid = $(".geluid");

    if (parseInt(value) >= parseInt(oldValue) + 5 || parseInt(value) <= parseInt(oldValue) - 5) {

        Cookies.set("vol", value);

        $geluid.css("opacity", 1);
        $geluid.css("display", "block");

        drawVolume(mapNumber(value, 0, 255, 0, 100));
    }
}

function setTemp(left) {
    var tempLeft = mapNumber(left, 0, 255, 16, 28);
    //let tempRight = mapNumber(right, 0, 255, 16, 28);


    $("#tempLeft").html(tempLeft.toFixed(1) + "°C");
    $("#tempRight").html(tempLeft.toFixed(1) + "°C");
}

function mapNumber(val, in_min, in_max, out_min, out_max) {
    //https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function drawVolume(e) {
    var volume = e / 100;

    bar.setText(Math.round(e));

    bar.animate(volume.toFixed(1), {}, function () {
        setTimeout(function () {
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
        from: { color: '#aaa', width: 2 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function step(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            console.log(circle.value());

            var value = circle.value() * 100;
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
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(map);

    var originAutocomplete = new google.maps.places.Autocomplete(originInput, { placeIdOnly: true });
    var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, { placeIdOnly: true });

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
        origin: { 'placeId': this.originPlaceId },
        destination: { 'placeId': this.destinationPlaceId },
        travelMode: this.travelMode
    }, function (response, status) {
        if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);