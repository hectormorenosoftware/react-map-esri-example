import React from "react";
import { withRouter } from "react-router-dom";
const token =
  "pk.eyJ1IjoiaG1zb2Z0d2FyZSIsImEiOiJja3dhdTVrajkzc3MxMzFsdDlmY3lyNmxlIn0.42tPdvzfSOmjptJzkrrNvA";
const locations = [
  [
    "Marine Corps Base Camp Pendleton California </br> Enlisted Marines: 250,000 </br> Marine Officers: 12,400 </br> Tank Count: 487,550 </br> F18 Count: 124,987 </br> ",
    33.291687,
    -117.392729,
  ],
  [
    "Marine Corps Base Quantico Virginia </br> Enlisted Marines: 158,000 </br> Marine Officers: 7,534 </br> Tank Count: 48,550 </br> F18 Count: 24,987 </br> ",
    38.5109,
    -77.309504,
  ],
  [
    "Marine Corps Base Cample Lejeune North Carolina </br> Enlisted Marines: 175,980 </br> Marine Officers: 5,759  </br> Tank Count: 98,550 </br> F18 Count: 44,987 </br> ",
    34.5836,
    -77.3604,
  ],
  [
    "U.S. Marine Corps Barracks </br> Washington D.C. </br> Enlisted Marines: 850 </br> Marine Officers: 48 ",
    38.879487,
    -76.994518,
  ],
];
var marker = null;

class Map extends React.PureComponent {
  componentDidMount() {
    var map = L.map("map").setView([33.095573, -117.276542], 10);
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`,
      {
        attribution:
          '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: `${token}`,
      }
    ).addTo(map);

    for (var i = 0; i < locations.length; i++) {
      marker = new L.marker([locations[i][1], locations[i][2]])
        .bindPopup(locations[i][0])
        .addTo(map);
    }

    let popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }

    map.on("click", onMapClick);
  }
  render() {
    return <div id="map"></div>;
  }
}

export default withRouter(Map);
