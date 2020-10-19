// Get vakyes from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// Create optins to map
const options = {
  draggin: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Create Map - setView([Latitude, longitide], zoom);
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create amd Add TileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([lat, lng], {
  icon,
}) /* Quando o valor é igual a propriedade não há necessidade de duplicarmos */
  .addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // Atualizar o container de imagem
  imageContainer.src = image.src;

  // Adicionar a classe .active neste botão
  button.classList.add("active");
}
