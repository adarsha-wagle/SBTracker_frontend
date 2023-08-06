import L from "leaflet";
import reactIcon from "../../assets/reactIcon.png";
export const markerIcon = new L.Icon({
  iconUrl: reactIcon,
  iconRetinaUrl: reactIcon,
  popupAnchor: [-0, -0],
  iconSize: [20, 20],
  className: "animate-marker",
});
