/**
 * Created by Sulav on 7/5/17.
 */
$(function () {
    if (geo_position_js.init()) {
        geo_position_js.getCurrentPosition(function (loc) {
            $('#longitude').text(loc.coords.longitude);
            $('#latitude').text(loc.coords.latitude);

        }, function (err) {
            alert(err.message);

        }, {enableHighAccuracy: true});
    } else {
        alert('Geolocation functionality not available!');
    }
});