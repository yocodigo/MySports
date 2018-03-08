var map;
var infowindow;

var request;
var service;
var markers = [];


function GetLatlong(){
  var geocoder = new google.maps.Geocoder();
  var address = $('#city').data('city');
  geocoder.geocode({ 'address': address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        var coordinates = {lat: latitude, long: longitude}
        initialize(latitude, longitude);
        // return coordinates;     
      }
  });
 }

function initialize(lat, long) {
  var center = new google.maps.LatLng(lat, long);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });

  var request = {
    location: center,
    radius: 8047,
    keyword: "sports bar"
  };
  infowindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, callback);
  
  google.maps.event.addListener(map, 'rightclick', function(event) {
    map.setCenter(event.latLng)
    clearResults(markers)
    
    var request = {
      location: event.latLng,
      radius: 8047,
      keyword: "sports bar"
    };
    service.nearbySearch(request, callback);
      
  })
}

function callback(results, status) {
  if(status == google.maps.places.PlacesServiceStatus.OK){
    var venues = "";
    for (var i = 0; i < results.length; i++) {
      markers.push(createMarker(results[i]));
      venues = i + 1 + ". " + results[i].name;
      vicinity = results[i].vicinity;
      rating = results[i].rating;
      $('#venues').append(venues + "<br>" + "Address: " + vicinity + "<br>" + "Rating: " + rating + "<br>" + "<br>");
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });
  
  google.maps.event.addListener(marker, 'click', function() {
   
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  return marker;

}

function clearResults(markers) {
  for (var m in markers) {
    markers[m].setMap(null)
  }
  markers = []
}

google.maps.event.addDomListener(window, "load", GetLatlong);
