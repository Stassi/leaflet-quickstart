(({ map: createMap, tileLayer }) => {
  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(createMap('map', { center: [51.505, -0.09], zoom: 13 }))
})(window.leaflet)
