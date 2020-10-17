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
});

// Create and Started a marker var empty
let marker;

// Add marker on map
map.on("click", putMark);

// Function capable of Add marker to map
function putMark(localization) {
  /* Parâmetro responsável por definir L e G */
  const lat = localization.latlng.lat;
  const lng = localization.latlng.lng;

  /* Buscando através do seletor de atribuito para ser enviado*/
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
}

// add photos fields
function addPhotoField() {
  // Pegar o container de photo #images
  const container = document.querySelector("#images");

  // Pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Realizar o clone da última imagem adicionada
  const lastFieldContainer = fieldsContainer.length - 1;
  const newFieldContainer = fieldsContainer[lastFieldContainer].cloneNode(true);

  // verificar se campo is empty - caso sim não adicionar
  const input = newFieldContainer.children[0];
  if (!input.value) {
    return;
  }

  // limpar o campo antes de add
  input.value = "";

  // Addicionar o clone ao container #images
  container.appendChild(newFieldContainer);
}

// Remove photos
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove(); /* Pegando o pai para ser removido */
}

// Select yes or no
function toggleSelect(event) {
  // retirar a class .active dos botões
  const buttons = document.querySelectorAll('.button-select button');
  buttons.forEach(button => button.classList.remove('active'));

  // colocar a class .active nesse botao clicado
  const button = event.currentTarget;
  button.classList.add('active');

  // Add the button value
  const input = document.querySelector('[name="open_on_weekends"]');

  // Verificar se Sim ou Não
  input.value = button.dataset.value;
}
