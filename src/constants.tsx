import React, { useState, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Map, Marker, Tooltip, TileLayer } from 'react-leaflet';

export default function CustomMap() {

    const { t } = useTranslation();

    function countryToString(countrys: Array<string>) {
        const country = countrys.shift();
        let s = '';
        countrys.forEach(c => {
            s += c + ', ';
        });
        s += country;
        return s;
    }

    const countries =
        [
            {
                // germany
                lat: 51.0834196,
                lon: 10.4234469,
                tooltip: countryToString([
                    t('travel.germany.country'),
                    t('travel.germany.munich'),
                    t('travel.germany.berlin'),
                    t('travel.germany.hamburg'),
                    t('travel.germany.munster')
                ])
            },
            {
                // tchequie
                lat: 50.05708312988281,
                lon: 14.44813060760498,
                tooltip: countryToString([
                    t('travel.tchequie.country'),
                    t('travel.tchequie.prague'),
                ])
            },
            {
                // belgium
                lat: 50.6402809,
                lon: 4.6667145,
                tooltip: countryToString([
                    t('travel.belgium.country'),
                    t('travel.belgium.brussels'),
                    t('travel.belgium.liege')
                ])
            },
            {
                // canada
                lat: 53.291587829589844,
                lon: -71.51642608642578,
                tooltip: countryToString([
                    t('travel.canada.country'),
                    t('travel.canada.montreal'),
                    t('travel.canada.quebec'),
                    t('travel.canada.sherbrooke'),
                    t('travel.canada.tadoussac')
                ])
            },
            {
                // spain
                lat: 39.3262345,
                lon: -4.8380649,
                tooltip: countryToString([
                    t('travel.spain.country'),
                    t('travel.spain.barcelona'),
                    t('travel.spain.palma'),
                ])
            },
            {
                // italy
                lat: 42.6384261,
                lon: 12.674297,
                tooltip: countryToString([
                    t('travel.italy.country'),
                    t('travel.italy.roma'),
                    t('travel.italy.naples'),
                    t('travel.italy.pompei')
                ])
            },
            {
                // greece
                lat: 38.9953683,
                lon: 21.9877132,
                tooltip: countryToString([
                    t('travel.greece.country'),
                    t('travel.greece.athens'),
                    t('travel.greece.corinth'),
                ])
            },
            {
                // us
                lat: 42.92121887207031,
                lon: -75.62081909179688,
                tooltip: countryToString([
                    t('travel.us.country'),
                    t('travel.us.ny')
                ])
            },
            {
                // uk
                lat: 52.865196,
                lon: -7.9794599,
                tooltip: countryToString([
                    t('travel.uk.country'),
                    t('travel.uk.ireland')
                ])
            },
            {
                // fr
                lat: 43.2961743,
                lon: 5.3699525,
                tooltip: countryToString([
                    t('travel.fr.country'),
                    t('travel.fr.marseille')
                ])
            },
            {
                // sweden
                lat: 59.32796859741211,
                lon: 18.05364227294922,
                tooltip: countryToString([
                    t('travel.sweden.country'),
                    t('travel.sweden.stockholm')
                ])
            },
        ];

    const cities =
        [
            {
                lat: 48.13825988769531,
                lon: 11.584508895874023,
                tooltip: t('travel.germany.munich')
            },
            {
                lat: 52.51763153076172,
                lon: 13.40965747833252,
                tooltip: t('travel.germany.berlin')
            },
            {
                // germany
                lat: 53.56729507446289,
                lon: 9.941673278808594,
                tooltip: t('travel.germany.hamburg')
            },
            {
                // germany
                lat: 51.960906982421875,
                lon: 7.628866195678711,
                tooltip: t('travel.germany.munster')
            },
            {
                // tchequie
                lat: 50.05708312988281,
                lon: 14.44813060760498,
                tooltip: t('travel.tchequie.prague')
            },
            {
                // belgium
                lat: 50.6451381,
                lon: 5.5734203,
                tooltip: t('travel.belgium.liege')
            },
            {
                // belgium
                lat: 50.8436709,
                lon: 4.3674367,
                tooltip: t('travel.belgium.brussels')
            },
            {
                // canada
                lat: 45.509063720703125,
                lon: -73.55335998535156,
                tooltip: t('travel.canada.montreal')
            },
            {
                // canada
                lat: 46.825754,
                lon: -71.208490,
                tooltip: t('travel.canada.quebec')
            },
            {
                // canada
                lat: 48.1433429,
                lon: -69.7174574,
                tooltip: t('travel.canada.tadoussac')
            },
            {
                // canada
                lat: 45.40139389038086,
                lon: -71.89034271240234,
                tooltip: t('travel.canada.sherbrooke')
            },
            {
                // spain
                lat: 39.61391960090061,
                lon: 2.9746341705322266,
                tooltip: t('travel.spain.palma')
            },
            {
                // spain
                lat: 41.39219284057617,
                lon: 2.164867401123047,
                tooltip: t('travel.spain.barcelona')
            },
            {
                // italy
                lat: 41.8892936706543,
                lon: 12.493546485900879,
                tooltip: t('travel.italy.roma')
            },
            {
                // italy
                lat: 40.83998489379883,
                lon: 14.252542495727539,
                tooltip: t('travel.italy.naples')
            },
            {
                // italy
                lat: 40.74886703491211,
                lon: 14.501250267028809,
                tooltip: t('travel.italy.pompei')
            },
            {
                // greece
                lat: 37.99076843261719,
                lon: 23.74122428894043,
                tooltip: t('travel.greece.athens'),
            },
            {
                // greece
                lat: 37.938621520996094,
                lon: 22.92695426940918,
                tooltip: t('travel.greece.corinth'),
            },
            {
                // us
                lat: 42.92121887207031,
                lon: -75.62081909179688,
                tooltip: t('travel.us.ny')
            },
            {
                // uk
                lat: 52.865196,
                lon: -7.9794599,
                tooltip: t('travel.uk.ireland')
            },
            {
                // fr
                lat: 43.2961743,
                lon: 5.3699525,
                tooltip: t('travel.fr.marseille')
            },
            {
                // sweden
                lat: 59.32796859741211,
                lon: 18.05364227294922,
                tooltip: t('travel.sweden.stockholm')
            },
        ];

    const [state, setState] = useState({
        markers: countries,
        zoom: 3
    });

    function onZoom(e: any) {
        const zoom = e.target._zoom;
        console.log(zoom);
        if (zoom >= 6) {
            setState({
                markers: cities,
                zoom: zoom
            })
        } else {
            setState({
                markers: countries,
                zoom: zoom
            })
        }
    }

    return (
        <Map style={{ width: '100%', height: '500px' }} center={[54.370138916189596, -29.918133437500003]} zoom={state.zoom} onZoomend={onZoom}>
            <TileLayer
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            />
            {state.markers.map(c => {
                return <Marker key={c.tooltip} position={[c.lat, c.lon]} >
                    <Tooltip>{c.tooltip}</Tooltip>
                </Marker>
            })}
        </Map>
    );
}
