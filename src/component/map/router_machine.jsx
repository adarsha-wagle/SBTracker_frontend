// import L from "leaflet";
// import "leaflet-routing-machine";
// import { createControlComponent } from "@react-leaflet/core";

// const point1 = {
//   lat: -3.9945,
//   lng: -79.2012,
// };

// const point2 = {
//   lat: -3.9905,
//   lng: -79.2001,
// };

// const createRoutineMachineLayer = (props) => {
//   const instance = L.Routing.control({
//     waypoints: [L.latLng(point1), L.latLng(point2)],
//     lineOptions: {
//       styles: [{ color: "#6FA1EC", weight: 4 }],
//     },
//     show: true,
//     collapsible: true,
//     addWaypoints: false,
//     routeWhileDragging: true,
//     draggableWaypoints: true,
//     fitSelectedRoutes: true,
//     showAlternatives: false,
//     language: "es",
//     createMarker: () => false,
//   });

//   return instance;
// };

// const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// export default RoutingMachine;
