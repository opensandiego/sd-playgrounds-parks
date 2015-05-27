

var parkMap = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
    maxZoom: 18
  });

$.getJSON("data/sample_osm_points.geojson", function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    });
    var map = L.map('map').fitBounds(geojson.getBounds());
    parkMap.addTo(map);
    geojson.addTo(map);
  });