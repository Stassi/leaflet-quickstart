(({
  circle,
  map: createLeafletMap,
  marker,
  polygon,
  tileLayer
}) => {
  function addCircle({
    latitudeLongitude
  }) {
    return circle(latitudeLongitude, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  }

  function addMarker({
    latitudeLongitude,
    map
  }) {
    return marker(latitudeLongitude).addTo(map);
  }

  function addPolygon({
    latitudeLongitudes,
    map
  }) {
    return polygon(latitudeLongitudes).addTo(map);
  }

  function addTileLayer({
    attribution,
    map,
    urlTemplate,
    zoomMax: maxZoom,
  }) {
    return tileLayer(urlTemplate, {
      attribution,
      maxZoom
    }).addTo(map);
  }

  function createMap({
    center,
    id,
    zoom
  }) {
    return createLeafletMap(id, {
      center,
      zoom
    });
  }

  const map = createMap({
    center: [51.505, -0.09],
    id: 'map',
    zoom: 13
  });

  addTileLayer({
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    map,
    urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoomMax: 19,
  });

  addMarker({
    latitudeLongitude: [51.5, -0.09],
    map
  }).bindPopup(
    "<b>Hello world!</b><br>I am a popup."
  ).openPopup();

  addCircle({
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    latitudeLongitude: [51.508, -0.11],
    map,
    radius: 500
  }).bindPopup("I am a circle.");

  addPolygon({
    latitudeLongitudes: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ],
    map
  }).bindPopup("I am a polygon.");
})(window.leaflet)
