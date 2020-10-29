window.onload = setPosition;

function setPosition() {
  navigator.geolocation.getCurrentPosition(showPosition, showPositionDefault);
}

function showPositionDefault() {
  // Rio do Sul - Santa Catarina
  const defaultLatitude = -27.2077341;
  const defaultLongitude = -49.6384655;

  getLocation(defaultLatitude, defaultLongitude, true);
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  getLocation(lat, long);
}

async function getLocation(latitude, longitude, hasDefaultPosition = false) {
  // API - https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-27.2077341&lon=-49.6384655
  const url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&";
  const $city = document.getElementById("city");
  const $state = document.getElementById("state");

  const response = await fetch(`${url}lat=${latitude}&lon=${longitude}`);
  const body = await response.json();
  const location = await body.address;

  hasDefaultPosition
    ? ($city.innerText = location.town)
    : ($city.innerText = location.city);

  $state.innerText = location.state;
}
