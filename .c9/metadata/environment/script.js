{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":31,"position":31,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["c"],"id":1},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["o"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["n"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"remove","lines":["cons"],"id":2},{"start":{"row":0,"column":0},"end":{"row":0,"column":7},"action":"insert","lines":["console"]}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["."],"id":3},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["l"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":10},"action":"remove","lines":["lo"],"id":4},{"start":{"row":0,"column":8},"end":{"row":0,"column":13},"action":"insert","lines":["log()"]}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":14},"action":"insert","lines":["\"\""],"id":5}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["H"],"id":6},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["e"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["l"]},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["l"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":[" "],"id":7},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["w"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["o"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["r"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["l"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["d"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["!"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":27},"action":"remove","lines":["console.log(\"Hello world!\")"],"id":8},{"start":{"row":0,"column":0},"end":{"row":19,"column":9},"action":"insert","lines":["<script>","    /* Note: This example requires that you consent to location sharing when","     * prompted by your browser. If you see the error \"Geolocation permission","     * denied.\", it means you probably did not give permission for the browser * to locate you. */","","    /* TODO: Step 2, Geolocate your user","     * Replace the code from here to the END TODO comment with new code from","     * codelab instructions. */","    let pos;","    let map;","    function initMap() {","        // Set the default location and initialize all variables","        pos = {lat: -33.857, lng: 151.213};","        map = new google.maps.Map(document.getElementById('map'), {","            center: pos,","            zoom: 15","        });","    }","    /* END TODO: Step 2, Geolocate your user */","</script>"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["<script>"],"id":9}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":9},"action":"remove","lines":["</script>"],"id":10}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":17,"column":5},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":4},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":16,"column":11},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":23,"column":0},"end":{"row":86,"column":51},"action":"insert","lines":["let pos;","let map;","let bounds;","let infoWindow;","let currentInfoWindow;","let service;","let infoPane;","function initMap() {","    // Initialize variables","    bounds = new google.maps.LatLngBounds();","    infoWindow = new google.maps.InfoWindow;","    currentInfoWindow = infoWindow;","    /* TODO: Step 4A3: Add a generic sidebar */","","    // Try HTML5 geolocation","    if (navigator.geolocation) {","    navigator.geolocation.getCurrentPosition(position => {","        pos = {","        lat: position.coords.latitude,","        lng: position.coords.longitude","        };","        map = new google.maps.Map(document.getElementById('map'), {","        center: pos,","        zoom: 15","        });","        bounds.extend(pos);","","        infoWindow.setPosition(pos);","        infoWindow.setContent('Location found.');","        infoWindow.open(map);","        map.setCenter(pos);","","        /* TODO: Step 3B2, Call the Places Nearby Search */","    }, () => {","        // Browser supports geolocation, but user has denied permission","        handleLocationError(true, infoWindow);","    });","    } else {","    // Browser doesn't support geolocation","    handleLocationError(false, infoWindow);","    }","}","","// Handle a geolocation error","function handleLocationError(browserHasGeolocation, infoWindow) {","    // Set default location to Sydney, Australia","    pos = {lat: -33.856, lng: 151.215};","    map = new google.maps.Map(document.getElementById('map'), {","    center: pos,","    zoom: 15","    });","","    // Display an InfoWindow at the map center","    infoWindow.setPosition(pos);","    infoWindow.setContent(browserHasGeolocation ?","    'Geolocation permissions denied. Using default location.' :","    'Error: Your browser doesn\\'t support geolocation.');","    infoWindow.open(map);","    currentInfoWindow = infoWindow;","","    /* TODO: Step 3B3, Call the Places Nearby Search */","}","/* END TODO: Step 2, Geolocate your user */","/* TODO: Step 3B1, Call the Places Nearby Search */"],"id":34}],[{"start":{"row":23,"column":0},"end":{"row":86,"column":51},"action":"remove","lines":["let pos;","let map;","let bounds;","let infoWindow;","let currentInfoWindow;","let service;","let infoPane;","function initMap() {","    // Initialize variables","    bounds = new google.maps.LatLngBounds();","    infoWindow = new google.maps.InfoWindow;","    currentInfoWindow = infoWindow;","    /* TODO: Step 4A3: Add a generic sidebar */","","    // Try HTML5 geolocation","    if (navigator.geolocation) {","    navigator.geolocation.getCurrentPosition(position => {","        pos = {","        lat: position.coords.latitude,","        lng: position.coords.longitude","        };","        map = new google.maps.Map(document.getElementById('map'), {","        center: pos,","        zoom: 15","        });","        bounds.extend(pos);","","        infoWindow.setPosition(pos);","        infoWindow.setContent('Location found.');","        infoWindow.open(map);","        map.setCenter(pos);","","        /* TODO: Step 3B2, Call the Places Nearby Search */","    }, () => {","        // Browser supports geolocation, but user has denied permission","        handleLocationError(true, infoWindow);","    });","    } else {","    // Browser doesn't support geolocation","    handleLocationError(false, infoWindow);","    }","}","","// Handle a geolocation error","function handleLocationError(browserHasGeolocation, infoWindow) {","    // Set default location to Sydney, Australia","    pos = {lat: -33.856, lng: 151.215};","    map = new google.maps.Map(document.getElementById('map'), {","    center: pos,","    zoom: 15","    });","","    // Display an InfoWindow at the map center","    infoWindow.setPosition(pos);","    infoWindow.setContent(browserHasGeolocation ?","    'Geolocation permissions denied. Using default location.' :","    'Error: Your browser doesn\\'t support geolocation.');","    infoWindow.open(map);","    currentInfoWindow = infoWindow;","","    /* TODO: Step 3B3, Call the Places Nearby Search */","}","/* END TODO: Step 2, Geolocate your user */","/* TODO: Step 3B1, Call the Places Nearby Search */"],"id":37}],[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["","    /* Note: This example requires that you consent to location sharing when","     * prompted by your browser. If you see the error \"Geolocation permission","     * denied.\", it means you probably did not give permission for the browser * to locate you. */","","    /* TODO: Step 2, Geolocate your user","     * Replace the code from here to the END TODO comment with new code from","     * codelab instructions. */","    let pos;","    let map;","    function initMap() {","        // Set the default location and initialize all variables","        pos = {lat: -33.857, lng: 151.213};","        map = new google.maps.Map(document.getElementById('map'), {","            center: pos,","            zoom: 15","        });","        ","    }","    ","    ","    /* END TODO: Step 2, Geolocate your user */","",""],"id":38},{"start":{"row":0,"column":0},"end":{"row":63,"column":51},"action":"insert","lines":["let pos;","let map;","let bounds;","let infoWindow;","let currentInfoWindow;","let service;","let infoPane;","function initMap() {","    // Initialize variables","    bounds = new google.maps.LatLngBounds();","    infoWindow = new google.maps.InfoWindow;","    currentInfoWindow = infoWindow;","    /* TODO: Step 4A3: Add a generic sidebar */","","    // Try HTML5 geolocation","    if (navigator.geolocation) {","    navigator.geolocation.getCurrentPosition(position => {","        pos = {","        lat: position.coords.latitude,","        lng: position.coords.longitude","        };","        map = new google.maps.Map(document.getElementById('map'), {","        center: pos,","        zoom: 15","        });","        bounds.extend(pos);","","        infoWindow.setPosition(pos);","        infoWindow.setContent('Location found.');","        infoWindow.open(map);","        map.setCenter(pos);","","        /* TODO: Step 3B2, Call the Places Nearby Search */","    }, () => {","        // Browser supports geolocation, but user has denied permission","        handleLocationError(true, infoWindow);","    });","    } else {","    // Browser doesn't support geolocation","    handleLocationError(false, infoWindow);","    }","}","","// Handle a geolocation error","function handleLocationError(browserHasGeolocation, infoWindow) {","    // Set default location to Sydney, Australia","    pos = {lat: -33.856, lng: 151.215};","    map = new google.maps.Map(document.getElementById('map'), {","    center: pos,","    zoom: 15","    });","","    // Display an InfoWindow at the map center","    infoWindow.setPosition(pos);","    infoWindow.setContent(browserHasGeolocation ?","    'Geolocation permissions denied. Using default location.' :","    'Error: Your browser doesn\\'t support geolocation.');","    infoWindow.open(map);","    currentInfoWindow = infoWindow;","","    /* TODO: Step 3B3, Call the Places Nearby Search */","}","/* END TODO: Step 2, Geolocate your user */","/* TODO: Step 3B1, Call the Places Nearby Search */"]}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":51},"action":"remove","lines":["/* TODO: Step 3B1, Call the Places Nearby Search */"],"id":39}],[{"start":{"row":0,"column":0},"end":{"row":63,"column":0},"action":"remove","lines":["let pos;","let map;","let bounds;","let infoWindow;","let currentInfoWindow;","let service;","let infoPane;","function initMap() {","    // Initialize variables","    bounds = new google.maps.LatLngBounds();","    infoWindow = new google.maps.InfoWindow;","    currentInfoWindow = infoWindow;","    /* TODO: Step 4A3: Add a generic sidebar */","","    // Try HTML5 geolocation","    if (navigator.geolocation) {","    navigator.geolocation.getCurrentPosition(position => {","        pos = {","        lat: position.coords.latitude,","        lng: position.coords.longitude","        };","        map = new google.maps.Map(document.getElementById('map'), {","        center: pos,","        zoom: 15","        });","        bounds.extend(pos);","","        infoWindow.setPosition(pos);","        infoWindow.setContent('Location found.');","        infoWindow.open(map);","        map.setCenter(pos);","","        /* TODO: Step 3B2, Call the Places Nearby Search */","    }, () => {","        // Browser supports geolocation, but user has denied permission","        handleLocationError(true, infoWindow);","    });","    } else {","    // Browser doesn't support geolocation","    handleLocationError(false, infoWindow);","    }","}","","// Handle a geolocation error","function handleLocationError(browserHasGeolocation, infoWindow) {","    // Set default location to Sydney, Australia","    pos = {lat: -33.856, lng: 151.215};","    map = new google.maps.Map(document.getElementById('map'), {","    center: pos,","    zoom: 15","    });","","    // Display an InfoWindow at the map center","    infoWindow.setPosition(pos);","    infoWindow.setContent(browserHasGeolocation ?","    'Geolocation permissions denied. Using default location.' :","    'Error: Your browser doesn\\'t support geolocation.');","    infoWindow.open(map);","    currentInfoWindow = infoWindow;","","    /* TODO: Step 3B3, Call the Places Nearby Search */","}","/* END TODO: Step 2, Geolocate your user */",""],"id":40}],[{"start":{"row":0,"column":0},"end":{"row":66,"column":43},"action":"insert","lines":["let pos;","let map;","let bounds;","let infoWindow;","let currentInfoWindow;","let service;","let infoPane;","","function initMap() {","    // Initialize variables","    bounds = new google.maps.LatLngBounds();","    infoWindow = new google.maps.InfoWindow;","    currentInfoWindow = infoWindow;","    /* TODO: Step 4A3: Add a generic sidebar */","","    // Try HTML5 geolocation","    if (navigator.geolocation) {","        navigator.geolocation.getCurrentPosition(position => {","            pos = {","                lat: position.coords.latitude,","                lng: position.coords.longitude","            };","            map = new google.maps.Map(document.getElementById('map'), {","                center: pos,","                zoom: 15","            });","            bounds.extend(pos);","","            infoWindow.setPosition(pos);","            infoWindow.setContent('Location found.');","            infoWindow.open(map);","            map.setCenter(pos);","","            /* TODO: Step 3B2, Call the Places Nearby Search */","        }, () => {","            // Browser supports geolocation, but user has denied permission","            handleLocationError(true, infoWindow);","        });","    } else {","        // Browser doesn't support geolocation","        handleLocationError(false, infoWindow);","    }","}","","// Handle a geolocation error","function handleLocationError(browserHasGeolocation, infoWindow) {","    // Set default location to Sydney, Australia","    pos = {","        lat: -33.856,","        lng: 151.215","    };","    map = new google.maps.Map(document.getElementById('map'), {","        center: pos,","        zoom: 15","    });","","    // Display an InfoWindow at the map center","    infoWindow.setPosition(pos);","    infoWindow.setContent(browserHasGeolocation ?","        'Geolocation permissions denied. Using default location.' :","        'Error: Your browser doesn\\'t support geolocation.');","    infoWindow.open(map);","    currentInfoWindow = infoWindow;","","    /* TODO: Step 3B3, Call the Places Nearby Search */","}","/* END TODO: Step 2, Geolocate your user */"],"id":41}],[{"start":{"row":66,"column":43},"end":{"row":67,"column":0},"action":"insert","lines":["",""],"id":42},{"start":{"row":67,"column":0},"end":{"row":68,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":68,"column":0},"end":{"row":87,"column":56},"action":"insert","lines":["// Perform a Places Nearby Search Request","function getNearbyPlaces(position) {","    let request = {","    location: position,","    rankBy: google.maps.places.RankBy.DISTANCE,","    keyword: 'sushi'","    };","","    service = new google.maps.places.PlacesService(map);","    service.nearbySearch(request, nearbyCallback);","}","","// Handle the results (up to 20) of the Nearby Search","function nearbyCallback(results, status) {","    if (status == google.maps.places.PlacesServiceStatus.OK) {","    createMarkers(results);","    }","}","","/* TODO: Step 3C, Generate markers for search results */"],"id":43}],[{"start":{"row":73,"column":14},"end":{"row":73,"column":19},"action":"remove","lines":["sushi"],"id":44},{"start":{"row":73,"column":14},"end":{"row":73,"column":15},"action":"insert","lines":["g"]},{"start":{"row":73,"column":15},"end":{"row":73,"column":16},"action":"insert","lines":["y"]},{"start":{"row":73,"column":16},"end":{"row":73,"column":17},"action":"insert","lines":["m"]}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["    currentInfoWindow = infoWindow;",""],"id":45}],[{"start":{"row":32,"column":63},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":33,"column":0},"end":{"row":33,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":33,"column":12},"end":{"row":35,"column":21},"action":"insert","lines":["/* TODO: Step 3B2, Call the Places Nearby Search */","// Call Places Nearby Search on user's location","getNearbyPlaces(pos);"],"id":48}],[{"start":{"row":35,"column":21},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":49}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":63},"action":"remove","lines":["            /* TODO: Step 3B2, Call the Places Nearby Search */"],"id":50},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":66,"column":55},"end":{"row":67,"column":0},"action":"insert","lines":["",""],"id":51},{"start":{"row":67,"column":0},"end":{"row":67,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":67,"column":4},"end":{"row":68,"column":21},"action":"insert","lines":["// Call Places Nearby Search on the default location","getNearbyPlaces(pos);"],"id":52}],[{"start":{"row":91,"column":56},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":53},{"start":{"row":92,"column":0},"end":{"row":93,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":92,"column":0},"end":{"row":93,"column":0},"action":"remove","lines":["",""],"id":54}],[{"start":{"row":92,"column":0},"end":{"row":111,"column":57},"action":"insert","lines":["// Set markers at the location of each place result","function createMarkers(places) {","    places.forEach(place => {","    let marker = new google.maps.Marker({","        position: place.geometry.location,","        map: map,","        title: place.name","    });","","    /* TODO: Step 4B: Add click listeners to the markers */","","    // Adjust the map bounds to include the location of this marker","    bounds.extend(place.geometry.location);","    });","    /* Once all the markers have been placed, adjust the bounds of the map to","    * show all the markers within the visible area. */","    map.fitBounds(bounds);","}","","/* TODO: Step 4C: Show place details in an info window */"],"id":55}]]},"ace":{"folds":[],"scrolltop":762,"scrollleft":0,"selection":{"start":{"row":66,"column":55},"end":{"row":66,"column":55},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":53,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1587413661182,"hash":"923d905a3aabbe717a232d8247cc51f3004ca25a"}