import React, { useState, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Map, Marker, Tooltip, TileLayer, GeoJSON } from "react-leaflet";
import geoJsonData from '../assets/geoJsonData.json';
import { LatLngLiteral, Layer, LeafletMouseEvent } from 'leaflet';
import geojson from 'geojson';

interface position {
  latlng: LatLngLiteral,
  tooltip: string
}

interface state {
  markers: position[],
  zoom: number,
  display: position[] | any,
  geoJson: any,
  countries: { [key: string]: position }
}

/**
 * Display a Leaflet Map, containing a GeoJson object, or a list of Markers, depending on the zoom
 */
export default function CustomMap(): ReactElement {
  const { t } = useTranslation();

  const countryToString = (countries: string[]): string => countries.join(", ");

  // List of position and label of tooltip for the GeoJson object, for each country
  const countries: { [key: string]: position } = {
    DEU: {
      latlng: {
        lat: 51.0834196,
        lng: 10.4234469,
      },
      tooltip: countryToString([
        t("travel.germany.munich"),
        t("travel.germany.berlin"),
        t("travel.germany.hamburg"),
        t("travel.germany.munster"),
        t("travel.germany.country"),
      ])
    },
    CZE: {
      latlng: {
        lat: 49.667628,
        lng: 15.326962,
      },
      tooltip: countryToString([
        t("travel.tchequie.prague"),
        t("travel.tchequie.country"),
      ])
    },
    BEL: {
      latlng: {
        lat: 50.6402809,
        lng: 4.6667145,
      },
      tooltip: countryToString([
        t("travel.belgium.brussels"),
        t("travel.belgium.liege"),
        t("travel.belgium.country"),
      ])
    },
    CAN: {
      latlng: {
        lat: 46.825754,
        lng: -71.20849,
      },
      tooltip: countryToString([
        t("travel.canada.montreal"),
        t("travel.canada.quebec"),
        t("travel.canada.sherbrooke"),
        t("travel.canada.tadoussac"),
        t("travel.canada.country"),
      ])
    },
    ESP: {
      latlng: {
        lat: 40.463669,
        lng: -3.749220,
      },
      tooltip: countryToString([
        t("travel.spain.barcelona"),
        t("travel.spain.palma"),
        t("travel.spain.country"),
      ])
    },
    ITA: {
      latlng: {
        lat: 42.6384261,
        lng: 12.674297,
      },
      tooltip: countryToString([
        t("travel.italy.roma"),
        t("travel.italy.naples"),
        t("travel.italy.pompei"),
        t("travel.italy.country"),
      ])
    },
    GRC: {
      latlng: {
        lat: 38.9953683,
        lng: 21.9877132,
      },
      tooltip: countryToString([
        t("travel.greece.athens"),
        t("travel.greece.corinth"),
        t("travel.greece.country"),
      ])
    },
    USA: {
      latlng: {
        lat: 42.92121887207031,
        lng: -75.62081909179688,
      },
      tooltip: countryToString(
        [t("travel.us.ny"),
        t("travel.us.country")
        ])
    },
    IRL: {
      latlng: {
        lat: 52.865196,
        lng: -7.9794599,
      },
      tooltip: countryToString([
        t("travel.uk.ireland"),
        t("travel.uk.country"),
      ])
    },
    FRA: {
      latlng: {
        lat: 43.2961743,
        lng: 5.3699525,
      },
      tooltip: countryToString([
        t("travel.fr.marseille"),
        t("travel.fr.country"),
      ])
    },
    SWE: {
      latlng: {
        lat: 59.6749712,
        lng: 14.5208584,
      },
      tooltip: countryToString([
        t("travel.sweden.stockholm"),
        t("travel.sweden.country"),
      ])
    }
  }

  // List of position and tooltip for the cities Markers
  const cities: position[] = [
    {
      latlng: {
        lat: 48.13825988769531,
        lng: 11.584508895874023,
      },
      tooltip: t("travel.germany.munich"),
    },
    {
      latlng: {
        lat: 52.51763153076172,
        lng: 13.40965747833252,
      },
      tooltip: t("travel.germany.berlin"),
    },
    {
      // germany
      latlng: {
        lat: 53.56729507446289,
        lng: 9.941673278808594,
      },
      tooltip: t("travel.germany.hamburg"),
    },
    {
      // germany
      latlng: {
        lat: 51.960906982421875,
        lng: 7.628866195678711,
      },
      tooltip: t("travel.germany.munster"),
    },
    {
      // tchequie
      latlng: {
        lat: 50.05708312988281,
        lng: 14.44813060760498,
      },
      tooltip: t("travel.tchequie.prague"),
    },
    {
      // belgium
      latlng: {
        lat: 50.6451381,
        lng: 5.5734203,
      },
      tooltip: t("travel.belgium.liege"),
    },
    {
      // belgium
      latlng: {
        lat: 50.8436709,
        lng: 4.3674367,
      },
      tooltip: t("travel.belgium.brussels"),
    },
    {
      // canada
      latlng: {
        lat: 45.509063720703125,
        lng: -73.55335998535156,
      },
      tooltip: t("travel.canada.montreal"),
    },
    {
      // canada
      latlng: {
        lat: 46.825754,
        lng: -71.20849,
      },
      tooltip: t("travel.canada.quebec"),
    },
    {
      // canada
      latlng: {
        lat: 48.1433429,
        lng: -69.7174574,
      },
      tooltip: t("travel.canada.tadoussac"),
    },
    {
      // canada
      latlng: {
        lat: 45.40139389038086,
        lng: -71.89034271240234,

      },
      tooltip: t("travel.canada.sherbrooke"),
    },
    {
      // spain
      latlng: {
        lat: 39.61391960090061,
        lng: 2.9746341705322266,

      },
      tooltip: t("travel.spain.palma"),
    },
    {
      // spain
      latlng: {
        lat: 41.39219284057617,
        lng: 2.164867401123047,

      },
      tooltip: t("travel.spain.barcelona"),
    },
    {
      // italy
      latlng: {
        lat: 41.8892936706543,
        lng: 12.493546485900879,

      },
      tooltip: t("travel.italy.roma"),
    },
    {
      // italy
      latlng: {
        lat: 40.83998489379883,
        lng: 14.252542495727539,
      },
      tooltip: t("travel.italy.naples"),
    },
    {
      // italy
      latlng: {
        lat: 40.74886703491211,
        lng: 14.501250267028809,

      },
      tooltip: t("travel.italy.pompei"),
    },
    {
      // greece
      latlng: {
        lat: 37.99076843261719,
        lng: 23.74122428894043,
      },
      tooltip: t("travel.greece.athens"),
    },
    {
      // greece
      latlng: {
        lat: 37.938621520996094,
        lng: 22.92695426940918,

      },
      tooltip: t("travel.greece.corinth"),
    },
    {
      // us
      latlng: {
        lat: 42.92121887207031,
        lng: -75.62081909179688,
      },
      tooltip: t("travel.us.ny"),
    },
    {
      // uk
      latlng: {
        lat: 52.865196,
        lng: -7.9794599,

      },
      tooltip: t("travel.uk.ireland"),
    },
    {
      // fr
      latlng: {
        lat: 43.2961743,
        lng: 5.3699525,
      },
      tooltip: t("travel.fr.marseille"),
    },
    {
      // sweden
      latlng: {
        lat: 59.32796859741211,
        lng: 18.05364227294922,
      },
      tooltip: t("travel.sweden.stockholm"),
    },
  ];

  // For each country, we display a tooltip on hover
  const onEachFeature = (feature: geojson.Feature<geojson.GeometryObject>, layer: Layer) => {
    layer.on({
      'mouseover': (e: LeafletMouseEvent) => {
        const country = state.countries[e.target.feature.properties.adm0_a3];
        layer.bindTooltip(country.tooltip);
        layer.openTooltip(country.latlng);
      },
      'mouseout': () => {
        layer.unbindTooltip();
        layer.closeTooltip();
      },
    });
  }



  // Contains the json containing the polygons of the countries
  const data: geojson.FeatureCollection = geoJsonData as geojson.FeatureCollection;
  const geoJson = <GeoJSON
    data={data}
    style={() => ({
      color: '#4a83ec',
      weight: 1,
      fillColor: "#1a1d62",
      fillOpacity: 0.25,
    })}
    onEachFeature={onEachFeature}
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
              <Tooltip>{c.tooltip}</Tooltip>
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
