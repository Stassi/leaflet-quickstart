(({
  circle,
  map: createLeafletMap,
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

  addCircle({
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    latitudeLongitude: [51.508, -0.11],
    map,
    radius: 500
  });
})(window.leaflet)
