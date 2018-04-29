$(document).ready(function () {
    console.log(Cookies.getJSON());

    startTime();
    let $musicBlock = $(".music-block .row");
    let $navBlock = $(".nav-block .row");
    let musicBlockPos, navBlockPos;


    if(musicBlockPos = Cookies.getJSON("musicBlock")){
        $musicBlock.css({
            top: musicBlockPos.top,
            left: musicBlockPos.left
        });
    }

    if(navBlockPos = Cookies.getJSON("navBlock")){
        console.log("top nav " + navBlockPos.top);

        $navBlock.css({
            top: navBlockPos.top,
            left: navBlockPos.left
        });
    }

    $('#variaModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })


    $(".large-blocks").sortable({
        start: function (e, ui) {
            /*console.log("start");
            console.log(ui);
            console.log(ui.item[0].className);*/
        },
        stop: function (e, ui) {


        },
        update: function (e, ui) {
            console.log("update");



            Cookies.set("musicBlock", $musicBlock.position());
            Cookies.set("navBlock", $navBlock.position());

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


    /*card.draggable({
        containment: mainCanvas,


        start: function () {
            $(this).css({
                opacity: 1,
                "z-index": "20"
            });
            console.log("start");
            $(".card").css("z-index", "0");
        },

        stop: function () {
            $(this).css({
                opacity: 1,
                "box-shadow": "none",
            });
        }
    });

    card.droppable({
        accept: card,
        activeClass: "o-min",
        drop: function (event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);
            var dragPos = draggable.position();
            var dropPos = droppable.position();

            draggable.css({
                left: dropPos.left + "px",
                top: dropPos.top + "px",
                "z-index": 20
            });

            droppable.css("z-index", 10).animate({
                left: dragPos.left,
                top: dragPos.top
            });
        }
    });*/


    initMap();


});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    setTimeout(startTime, 500);
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
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#4a3974"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#333333"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#8c8c8c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]

    });
}

