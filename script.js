
    /* Note: This example requires that you consent to location sharing when
     * prompted by your browser. If you see the error "Geolocation permission
     * denied.", it means you probably did not give permission for the browser * to locate you. */

    /* TODO: Step 2, Geolocate your user
     * Replace the code from here to the END TODO comment with new code from
     * codelab instructions. */
    let pos;
    let map;
    function initMap() {
        // Set the default location and initialize all variables
        pos = {lat: -33.857, lng: 151.213};
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15
        });
    }
    /* END TODO: Step 2, Geolocate your user */

