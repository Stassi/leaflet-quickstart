(({ map: createMap, tileLayer }) => {
  function setupTileLayer({
    attribution,
    center,
    id,
    urlTemplate,
    zoom,
    zoomMax
  }) {
    const createdMap = createMap(id, {
      center,
      zoom
    });

    tileLayer(urlTemplate, {
      attribution,
      maxZoom: zoomMax
    }).addTo(createdMap)

    return createdMap
  }

  setupTileLayer({
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    center: [51.505, -0.09],
    id: 'map',
    urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    zoom: 13,
    zoomMax: 19
  })
})(window.leaflet)
