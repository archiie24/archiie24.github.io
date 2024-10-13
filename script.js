let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.352, lng: 74.792 },
        zoom: 18,
        mapId: 'd69f3b80d78a361e'
    });

    new google.maps.Marker({
        position: { lat: 13.3520398, lng: 74.791274 },
        map: map,
        title: "Parking 1"
    });

    new google.maps.Marker({
        position: { lat: 13.3520150, lng: 74.7913036 },
        map: map,
        title: "Parking 2"
    });

    new google.maps.Marker({
        position: { lat: 13.3519556, lng: 74.7913324 },
        map: map,
        title: "Parking 3"
    });

    new google.maps.Marker({
        position: { lat: 13.3518509, lng: 74.7912094 },
        map: map,
        title: "Parking 4"
    });

    new google.maps.Marker({
        position: { lat: 13.3518989, lng: 74.7913267 },
        map: map,
        title: "Parking 5"
    });

    new google.maps.Marker({
        position: { lat: 13.3519002, lng: 74.7912804 },
        map: map,
        title: "Parking 6"
    });
    
    new google.maps.Marker({
        position: { lat: 13.3514447, lng: 74.7910974 },
        map: map,
        title: "Parking 7"
    });
}
