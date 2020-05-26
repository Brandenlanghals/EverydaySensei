$(document).ready(function () {

    //listens for geolocate click
    $(document).on("click", "#geoCheck", getLocation);
    $(document).on("submit", "#senseiSign", geocodeAddress);

//geolocation function
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//setting position to SQL serverdb
function showPosition(position) {
    localStorage.setItem(position.coords.latitude, position.coords.longitude);
    

};


//set lat & long by pulling from document and setting our API key with queryurl 
function geocodeAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = $('.location').val();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            //need to update to set location to SQL serverdb
            localStorage.setItem("searchLat", results[0].geometry.location.lat(), results[0].geometry.location.lng());
        };
    });
    setTimeout(function () { choices(); }, 500);
    //you can adjust the timeout if the page isn't loading correctly
};
getLocation();
geocodeAddress();
});