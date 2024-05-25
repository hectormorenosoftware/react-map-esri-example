import React from "react";
import { withRouter } from "react-router-dom";
const token =
  "pk.eyJ1IjoiaG1zb2Z0d2FyZSIsImEiOiJja3dhdTVrajkzc3MxMzFsdDlmY3lyNmxlIn0.42tPdvzfSOmjptJzkrrNvA";
const locations = [
  ["LOCATION_1", 11.8166, 122.0942],
  ["LOCATION_2", 11.9804, 121.9189],
  ["LOCATION_3", 10.7202, 122.5621],
  ["LOCATION_4", 11.3889, 122.6277],
  ["LOCATION_5", 10.5929, 122.6325],
];
var marker = null;

class Map extends React.PureComponent {
  componentDidMount() {
    var map = L.map("map").setView([10.53852, 122.558085], 10);
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
