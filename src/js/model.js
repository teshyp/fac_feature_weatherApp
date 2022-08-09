export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// BRING PULLED DATA FROM API HERE

function showPosition(position) {
  console.log(position);
  // need to return location as string
}
