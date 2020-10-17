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

/* Template literous */
function addMarker({ id, name, lat, lng }) {
  /* Desistruturar o obj */
  // Create popup Overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" ></a>`
  );

  // Create and add Marker
  L.marker([lat, lng], {
    icon,
  }) /* Quando o valor é igual a propriedade não há necessidade de duplicarmos */
    .addTo(map)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(orphanage);
});
