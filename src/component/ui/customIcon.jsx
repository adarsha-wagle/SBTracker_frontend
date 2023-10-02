import L from "leaflet";
import schoolIcon from "../../assets/schoolIcon.png";
export const markerIcon = new L.Icon({
  iconUrl: schoolIcon,
  iconRetinaUrl: schoolIcon,
  popupAnchor: [-0, -0],
  iconSize: [20, 20],
  className: "animate-marker",
});
