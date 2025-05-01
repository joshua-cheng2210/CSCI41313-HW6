// const APIKEY = "demo"

// let myscheduleDB = [
//   {
//       "Day": "Monday",
//       "Event": "CSCI 4131 lec",
//       "start hour": 11,
//       "start minute": 15,
//       "end hour": 12,
//       "end minute": 30,
//       "Event Location (Virtual or Physical)": "257 S 19th Ave, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/7906541",
//       "data-thumbnail": "/img/Anderson.jpg",
//       "data-thumbnail-alt": "web dev"
//   },
//   {
//       "Day": "Monday",
//       "Event": "Jour 3765 lec",
//       "start hour": 13,
//       "start minute": 0,
//       "end hour": 14,
//       "end minute": 15,
//       "Event Location (Virtual or Physical)": "222 Pleasant St SE, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/0002431",
//       "data-thumbnail": "/img/Bruininks.jpg",
//       "data-thumbnail-alt": "social media journalism"
//   },
//   {
//       "Day": "Monday",
//       "Event": "CSCI 4211 lec",
//       "start hour": 13,
//       "start minute": 0,
//       "end hour": 14,
//       "end minute": 15,
//       "Event Location (Virtual or Physical)": "222 Pleasant St SE, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/7906551",
//       "data-thumbnail": "/img/Bruininks.jpg",
//       "data-thumbnail-alt": "computer networking"
//   },
//   {
//       "Day": "Tuesday",
//       "Event": "PE 1033",
//       "start hour": 10,
//       "start minute": 10,
//       "end hour": 11,
//       "end minute": 0,
//       "Event Location (Virtual or Physical)": "1900 University Ave SE, Minneapolis, MN 55455 308",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/0026611",
//       "data-thumbnail": "/img/rec.jpg",
//       "data-thumbnail-alt": "fencing"
//   },
//   {
//       "Day": "Wednesday",
//       "Event": "CSCI 4131 lec",
//       "start hour": 11,
//       "start minute": 15,
//       "end hour": 12,
//       "end minute": 30,
//       "Event Location (Virtual or Physical)": "257 S 19th Ave, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/7906541",
//       "data-thumbnail": "/img/Anderson.jpg",
//       "data-thumbnail-alt": "web dev"
//   },
//   {
//       "Day": "Wednesday",
//       "Event": "Jour 3765 lec",
//       "start hour": 13,
//       "start minute": 0,
//       "end hour": 14,
//       "end minute": 15,
//       "Event Location (Virtual or Physical)": "222 Pleasant St SE, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/0002431",
//       "data-thumbnail": "/img/Bruininks.jpg",
//       "data-thumbnail-alt": "social media journalism"
//   },
//   {
//       "Day": "Wednesday",
//       "Event": "CSCI 4211 lec",
//       "start hour": 13,
//       "start minute": 0,
//       "end hour": 14,
//       "end minute": 15,
//       "Event Location (Virtual or Physical)": "222 Pleasant St SE, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/7906551",
//       "data-thumbnail": "/img/Bruininks.jpg",
//       "data-thumbnail-alt": "computer networking"
//   },
//   {
//       "Day": "Thursday",
//       "Event": "PE 1033",
//       "start hour": 10,
//       "start minute": 10,
//       "end hour": 11,
//       "end minute": 0,
//       "Event Location (Virtual or Physical)": "1900 University Ave SE, Minneapolis, MN 55455 308",
//       "Phone Number": "No Phone number",
//       "link": "https://umtc.catalog.prod.coursedog.com/courses/0026611",
//       "data-thumbnail": "/img/rec.jpg",
//       "data-thumbnail-alt": "fencing"
//   },
//   {
//       "Day": "Friday",
//       "Event": "lab work",
//       "start hour": 10,
//       "start minute": 10,
//       "end hour": 14,
//       "end minute": 0,
//       "Event Location (Virtual or Physical)": "410 Church St SE, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://mcrlab.umn.edu",
//       "data-thumbnail": "/img/childrens_rehab.jpg",
//       "data-thumbnail-alt": "lab work"
//   },
//   {
//       "Day": "Saturday",
//       "Event": "gym-exercise",
//       "start hour": 17,
//       "start minute": 0,
//       "end hour": 18,
//       "end minute": 0,
//       "Event Location (Virtual or Physical)": "123 SE Harvard St, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://recwell.umn.edu/",
//       "data-thumbnail": "/img/rec.jpg",
//       "data-thumbnail-alt": "gym"
//   },
//   {
//       "Day": "Sunday",
//       "Event": "at home resting",
//       "start hour": 0,
//       "start minute": 0,
//       "end hour": 23,
//       "end minute": 59,
//       "Event Location (Virtual or Physical)": "Coffman Memorial Union, 300 Washington Ave SE 4th Floor, Minneapolis, MN 55455",
//       "Phone Number": "No Phone number",
//       "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpQcGixfQ-RibVNI4BxS1YfufI7vVxOxH5Q&s",
//       "data-thumbnail": "https://media0.giphy.com/media/iAn1Wh7Fdnh6rKg4Tq/200w.gif?cid=6c09b9528p187pu5bulvo529naj5l6diawpnvn6q3crycci8&ep=v1_gifs_search&rid=200w.gif&ct=g",
//       "data-thumbnail-alt": "resting"
//   }
// ];

// ((g) => {
//   var h,
//     a,
//     k,
//     p = "The Google Maps JavaScript API",
//     c = "google",
//     l = "importLibrary",
//     q = "__ib__",
//     m = document,
//     b = window;
//   b = b[c] || (b[c] = {});
//   var d = b.maps || (b.maps = {}),
//     r = new Set(),
//     e = new URLSearchParams(),
//     u = () =>
//       h ||
//       (h = new Promise(async (f, n) => {
//         await (a = m.createElement("script"));
//         e.set("libraries", [...r] + "");
//         for (k in g)
//           e.set(
//             k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
//             g[k],
//           );
//         e.set("callback", c + ".maps." + q);
//         a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
//         d[q] = f;
//         a.onerror = () => (h = n(Error(p + " could not load.")));
//         a.nonce = m.querySelector("script[nonce]")?.nonce || "";
//         m.head.append(a);
//       }));
//   d[l]
//     ? console.warn(p + " only loads once. Ignoring:", g)
//     : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
// })({
//   key: APIKEY,
//   v: "weekly",
//   // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//   // Add other bootstrap parameters as needed, using camel case.
// });

// let geocoder;
// let Place;
// let myPos;
// let address;
// let map;
// // requesting directions API
// let directionsService
// let directionsRenderer


// let InfoWindow;
// let AdvancedMarkerElement 
// let PlaceAutocompleteElement;

// async function initMap() {

//   // create the map
//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("maps"), {
//     center: new google.maps.LatLng(44.9727, -93.23540000000003),
//     zoom: 15,
//     mapId: "HW3_DEMO2",
//   });

//   directionsService = new google.maps.DirectionsService();
//   directionsRenderer = new google.maps.DirectionsRenderer({
//     draggable: true,
//     map,
//     panel: document.getElementById('directionsPanel'),
//   });

//   // Get the geocoder in place
//   if (!geocoder) {
//     const { Geocoder } = await google.maps.importLibrary("geocoding");
//     geocoder = new Geocoder();
//   }

//   myscheduleDB.forEach((schedule) =>{
//     address = schedule["Event Location (Virtual or Physical)"]; 
//     const day = schedule.Day;
//     const time = `${schedule["start hour"]}:${schedule["start minute"].toString().padStart(2, '0')} - ${schedule["end hour"]}:${schedule["end minute"].toString().padStart(2, '0')}`
  
//     // https://developers.google.com/maps/documentation/javascript/geocoding
//     geocoder.geocode({ "address" : address }, (results, status) => {
//       if (status !== "OK") {
//         if (status === "ZERO_RESULTS") {
//           return;
//         }
//         console.error(
//           "Geocoder was not successful for the following reason: " + status,
//         );
//       }

//       const markerIMG= document.createElement("img");
//       markerIMG.src = "https://i.pinimg.com/736x/c6/8b/8b/c68b8b12ff46e35bcd57194caf668222.jpg"
//       markerIMG.style.width = "32px";
//       markerIMG.style.height = "32px";
            
//       createMarker({
//         position: results[0].geometry.location,
//         windowContent: `<strong>${schedule.Event} </strong> <br><br> ${day}, ${time} <br><br> location: ${address}`,
//         markerContent: markerIMG,  // this is where to include a graphic marker - see comment below
//       });
//     });
//   })

//   // See the following link for information on how to create an image to be used within an AdvancedMarkerElement
//   // https://developers.google.com/maps/documentation/javascript/advanced-markers/graphic-markers#custom-graphic-file

//   // getting current position location
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         myPos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };
//       },
//       () => {
//         console.warn("Current location unavailable");
//       },
//     );
//   }

//   // adding searching for route feature
//   document.getElementById("directionRequestSubmit").addEventListener("click", () => {
//     const destination = document.getElementById("destination").value;
//     const mode = document.querySelector('input[name="mode"]:checked').value;
//     calculateAndDisplayRoute(destination, mode);
//   });
// }

// function calculateAndDisplayRoute(destination, mode) {
//   if (!myPos) {
//     console.error("Current location not available");
//     return;
//   }
  
//   const routeRequestInputs = {
//     origin: myPos,
//     destination: destination,
//     travelMode: google.maps.TravelMode[mode],
//   }
//   directionsService.route(
//     routeRequestInputs,
//     (response, status) => {
//       if (status === "OK") {
//         directionsRenderer.setDirections(response);
//       } else {
//         console.error("Directions request failed due to " + status);
//       }
//     }
//   );
// }
// async function createMarker({ windowContent, markerContent, position }) {
//   if (!InfoWindow) {
//     const maps = await google.maps.importLibrary("maps");
//     InfoWindow = maps.InfoWindow;
//   }

//   if (!AdvancedMarkerElement) {
//     const marker = await google.maps.importLibrary("marker");
//     AdvancedMarkerElement = marker.AdvancedMarkerElement;
//   }

//   // See the following link for discussion about advanced markers and adding a marker
//   // https://developers.google.com/maps/documentation/javascript/advanced-markers/add-marker#javascript
//   const marker = new AdvancedMarkerElement({
//               map,
//               position,
//               content: markerContent,
//             });

//   if (windowContent) {
//     const infoWindow = new InfoWindow({
//         content: windowContent,
//         maxWidth: 300,
//       });

//     marker.addListener("gmp-click", () => {
//       infoWindow.close();
//       infoWindow.setContent(windowContent);
//       infoWindow.open(map, marker);
//     });
//   }
// } // end createMarker

// initMap();