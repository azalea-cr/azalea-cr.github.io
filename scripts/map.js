var mymap = L.map("mapid").setView([28.6648, -84.5158], 6);
var mapboxAccessToken =
  "pk.eyJ1IjoiY3Jvc3MxOTg5IiwiYSI6ImNrYW82bDlueTBjYXAydW80cmNpejN2YjIifQ.TkqWhxj4bjvQgv1H3TPE1Q";

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

//Adds county bourders from Florida_Counties.js
L.geoJson(flCounties).addTo(mymap);

//Mouseover Function
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}

var geojson;

function onEachFeature(feature,layer) {
  layer.on({
    mouseover: highlightFeature
  });
}

geoJson = L.geoJson(flCounties, {
  onEachFeature: onEachFeature
}).addTo(mymap);


/*
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
    mapboxAccessToken,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/light-v10",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

*/
