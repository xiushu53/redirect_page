var ua = navigator.userAgent;
console.log(ua);

if (ua.match(/iPhone|iPad/)) {
             window.location.href = "comgooglemaps://?daddr=35.726700,139.716695&directionsmode=transit";
             }
else if (ua.match(/Android/)) {
  window.location.href = "http://maps.google.com/maps?daddr=35.726700,139.716695&directionsmode=transit";
             }
else {
  window.location.href = "https://maps.google.com/maps?daddr=35.726700,139.716695&directionsmode=transit"
};
