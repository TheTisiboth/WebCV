'use client'
import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {MapContainer, Marker, TileLayer, Tooltip} from 'react-leaflet'
import {useTranslations} from 'next-intl'
import {City} from '../../types/types'

type TravelsProps = {
    cities: City[]
}
/**
 * Travel section, containing a leaflet map
 */
export const Travels: FC<TravelsProps> = ({cities}) => {
    const t = useTranslations('navbar')

    return (
        <Container id="Travels" className="pt-5 pb-4" fluid>
            <Row className="mb-4 justify-content-center">
                <Col xs={8} className="pt-2 pb-2">
                    <Badge className='mytitle titles'>
                        <h2 className="rounded">{t('travel')}</h2>
                    </Badge>
                </Col>
            </Row>
            <Row className="pt-5 mb-4 justify-content-center">
                <Col md={10}>
                    <CustomMap cities={cities}/>
                </Col>
            </Row>
        </Container>
    )
}


/**
 * Display a Leaflet Map containing a list of Markers per visited city
 */
const CustomMap: FC<TravelsProps> = ({cities}) => {
    return (
        <MapContainer
            style={{height: '500px'}}
            center={[54.370138916189596, -29.918133437500003]}
            zoom={3}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {cities.map(city => (
                <Marker position={city.coordinate} key={`${city.coordinate.lat}_${city.coordinate.lng}`}>
                    <Tooltip>{city.name}</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    )
}
