(({ circle: createLeafletCircle, map: createLeafletMap, tileLayer }) => {
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

  function createTileLayer({
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

  function createCircle({
    latitudeLongitude
  }) {
    return createLeafletCircle(latitudeLongitude, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  }

  const map = createMap({
    center: [51.505, -0.09],
    id: 'map',
    zoom: 13
  });

  createTileLayer({
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    map,
    urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoomMax: 19,
  });

  createCircle({
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    latitudeLongitude: [51.508, -0.11],
    map,
    radius: 500
  });
})(window.leaflet)
