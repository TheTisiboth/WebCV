import React, { useState, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Map, Marker, Tooltip, TileLayer, GeoJSON } from "react-leaflet";
import geoJsonData from '../assets/geoJsonData.json';
import { Layer, LeafletMouseEvent } from 'leaflet';
import geojson from 'geojson';
import { TFunction } from 'i18next';
import { state, position, cities, countries } from './constant';

/**
 * Display a Leaflet Map, containing a GeoJson object, or a list of Markers, depending on the zoom
 */
export default function CustomMap(): ReactElement {
  const { t }: { t: TFunction } = useTranslation();

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

    // PROBLEM : does not update the tooltips when we switch languages
    // FIX ME
    onEachFeature={(feature: geojson.Feature<geojson.GeometryObject>, layer: Layer) => {
      layer.on({
        'mouseover': (e: LeafletMouseEvent) => {
          const country = state.countries[e.target.feature.properties.adm0_a3];
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

  const [state, setState] = useState<state>({
    markers: cities,
    zoom: 3,
    geoJson: geoJson,
    display: geoJson,
    countries: countries
  });


  // Update on zoom change
  function onZoom(e: LeafletMouseEvent): void {
    const zoom = e.target._zoom;
    const newDisplay = updateDisplay(zoom);
    setState({
      ...state,
      zoom,
      display: newDisplay,
    });
  }

  // Called on every zoom change, in order to display either the GeoJson, or the cities Marker
  function updateDisplay(zoom: number): Marker[] | any {
    if (zoom >= 4) {
      return (state.markers.map(
        (
          c: position,
          i: number
        ) => {
          return (
            <Marker key={c.latlng.lat + c.latlng.lng} position={c.latlng}>
              <Tooltip>{t(c.tooltip as string)}</Tooltip>
            </Marker>
          );
        }
      ));
    } else {
      return state.geoJson;
    }
  }


  return (
    <Map
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
