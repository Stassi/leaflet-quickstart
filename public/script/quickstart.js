(({
  circle,
  map: createLeafletMap,
  marker,
  polygon,
  popup,
  tileLayer
}) => {
  function addCircle({
    color,
    fillColor,
    fillOpacity,
    latitudeLongitude,
    map,
    popupContent,
    radius
  }) {
    return circle(latitudeLongitude, {
      color,
      fillColor,
      fillOpacity,
      radius
    }).addTo(map)
      .bindPopup(popupContent);
  }

  function addMarker({
    latitudeLongitude,
    map,
    popupContent
  }) {
    return marker(latitudeLongitude)
      .addTo(map)
      .bindPopup(popupContent);
  }

  function addPolygon({
    latitudeLongitudes,
    map,
    popupContent
  }) {
    return polygon(latitudeLongitudes)
      .addTo(map)
      .bindPopup(popupContent);
  }

  function addPopup({
    htmlContent,
    latitudeLongitude,
    map
  }) {
    return popup()
      .setLatLng(latitudeLongitude)
      .setContent(htmlContent)
      .openOn(map);
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
    map,
    popupContent: '<b>Hello world!</b><br>I am a popup.'
  });

  addCircle({
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    latitudeLongitude: [51.508, -0.11],
    map,
    popupContent: 'I am a circle.',
    radius: 500
  });

  addPolygon({
    latitudeLongitudes: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ],
    map,
    popupContent: "I am a polygon."
  });

  addPopup({
    htmlContent: "I am a standalone popup.",
    latitudeLongitude: [51.513, -0.09],
    map
  });
})(window.leaflet)
