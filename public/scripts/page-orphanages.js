// Localization orphanage
const orphanageSbo = [-22.743384, -47.4111377];

// Create Map - setView([Latitude, longitide], zoom);
const map = L.map("mapid").setView(orphanageSbo, 15);

// Create amd Add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create popup Overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Casa da Criança <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" ></a>'
);

// Create and add Marker
L.marker(orphanageSbo, {
  icon,
}) /* Quando o valor é igual a propriedade não há necessidade de duplicarmos */
  .addTo(map)
  .bindPopup(popup);
