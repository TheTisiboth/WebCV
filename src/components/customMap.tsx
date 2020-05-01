import React, { useState, ReactElement, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Map, Marker, TileLayer, GeoJSON } from "react-leaflet";
import geoJsonData from '../assets/geoJsonData.json';
import { Layer, LeafletMouseEvent, LatLngLiteral } from 'leaflet';
import geojson from 'geojson';
import { TFunction } from 'i18next';
import { cities, countries } from './constant';
import L from "leaflet";

export interface position {
  latlng: LatLngLiteral,
  tooltip: string | string[]
}


interface state {
  zoom: number,
  display: position[] | any,
}

/**
 * Display a Leaflet Map, containing a GeoJson object, or a list of Markers, depending on the zoom
 */
export default function CustomMap(): ReactElement {
  const mapRef: any = useRef();
  const { t, i18n }: { t: TFunction; i18n: any } = useTranslation();

  const countryToString = (countries: string[]): string => countries.map(c => t(c)).join(", ");

  // Contains the json containing the polygons of the countries
  const data: geojson.FeatureCollection = geoJsonData as geojson.FeatureCollection;
  let geoJson: JSX.Element = <GeoJSON
    key='my-geojson'
    data={data}
    style={() => ({
      color: '#4a83ec',
      weight: 1,
      fillColor: "#1a1d62",
      fillOpacity: 0.25,
    })}
    onEachFeature={(feature: geojson.Feature<geojson.GeometryObject>, layer: Layer) => {
      layer.on({
        'mouseover': (e: LeafletMouseEvent) => {
          const country = countries[e.target.feature.properties.adm0_a3];
          layer.bindTooltip(countryToString(country.tooltip as string[]));
          layer.openTooltip(country.latlng);
        },
        'mouseout': () => {
          layer.unbindTooltip();
          layer.closeTooltip();
        },
      });
    }}
  />

  const [markersAdded, setMarkersAdded] = useState<boolean>(false);

  const [state, setState] = useState<state>({
    zoom: 3,
    display: geoJson,
  });

  i18n.on("languageChanged", (lng: any): void => {
    if (lng) {
      const map = mapRef.current;
      if (map && map.leafletElement.getZoom() >= 4 && markersAdded) {
        // In order to update all markers, we remove them
        map.leafletElement.eachLayer(function (layer: L.Layer) {
          if (layer instanceof L.Marker) map.leafletElement.removeLayer(layer);
        });
        // And we add them again, with the translated tooltip
        // It is the only we I found to update the tooltip
        cities.forEach((c: position, i: number) => {
          L.marker(c.latlng)
            .addTo(map.leafletElement)
            .bindTooltip(t(c.tooltip));
        });
      }
    }
  });

  // Update on zoom change
  function onZoom(e: LeafletMouseEvent): void {
    const zoom = e.target._zoom;
    const display = updateDisplay(zoom);
    setState({
      zoom,
      display
    });
  }

  // Called on every zoom change, in order to display either the GeoJson, or the cities Marker
  function updateDisplay(zoom: number): Marker[] | any {
    const map = mapRef.current;
    if (zoom >= 4) {
      return cities.forEach((c: position, i: number) => {
        // Add the city markers if they weren't already added
        if (map && !markersAdded) {
          L.marker(c.latlng)
            .addTo(map.leafletElement)
            .bindTooltip(t(c.tooltip));
          setMarkersAdded(true);
        }
      });
    } else {
      // Remove all markers
      map.leafletElement.eachLayer(function (layer: L.Layer) {
        if (layer instanceof L.Marker) map.leafletElement.removeLayer(layer);
      });
      setMarkersAdded(false);
      return geoJson;
    }
  }

  return (
    <Map
      ref={mapRef}
      style={{ height: "500px" }}
      center={[54.370138916189596, -29.918133437500003]}
      zoom={state.zoom}
      onZoomend={onZoom}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" />
      {state.display}
    </Map>
  );
}