let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.352, lng: 74.792 },
        zoom: 18,
        mapId: 'd69f3b80d78a361e'
    });

    new google.maps.Marker({
        position: { lat: 13.352453, lng: 74.791403 },
        map: map,
        title: "Parking 1"
    });

    new google.maps.Marker({
        position: { lat: 13.352414, lng: 74.791417 },
        map: map,
        title: "Parking 2"
    });

    new google.maps.Marker({
        position: { lat: 13.352379, lng: 74.791427 },
        map: map,
        title: "Parking 3"
    });

    new google.maps.Marker({
        position: { lat: 13.352337, lng: 74.791440 },
        map: map,
        title: "Parking 4"
    });

    new google.maps.Marker({
        position: { lat: 13.352295, lng: 74.791455 },
        map: map,
        title: "Parking 5"
    });

    new google.maps.Marker({
        position: { lat: 13.352246, lng: 74.791470 },
        map: map,
        title: "Parking 6"
    });
    
    new google.maps.Marker({
        position: { lat: 13.3514447, lng: 74.7910974 },
        map: map,
        title: "Parking 7"
    });

    new google.maps.Marker({
        position: { lat: 13.351415, lng: 74.791129 },
        map: map,
        title: "Parking 8"
    });

    new google.maps.Marker({
        position: { lat: 13.351535, lng: 74.791228 },
        map: map,
        title: "Parking 9"
    });

    new google.maps.Marker({
        position: { lat: 13.351541, lng: 74.791273 },
        map: map,
        title: "Parking 9"
    });

    new google.maps.Marker({
        position: { lat: 13.351544, lng: 74.791364 },
        map: map,
        title: "Parking 10"
    });
}
