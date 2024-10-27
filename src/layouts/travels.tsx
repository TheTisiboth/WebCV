import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {MapContainer, Marker, TileLayer, Tooltip} from 'react-leaflet'
import {cities} from '../fixtures/travels.ts'

/**
* Travel section, containing a leaflet map
*/
export const Travels: FC = () => {
  const { t } = useTranslation()

  return (
    <Container id="Travels" className="pt-5 pb-4" fluid>
      <Row className="mb-4 justify-content-center">
        <Col xs={8} className="pt-2 pb-2">
          <Badge className='mytitle titles'>
            <h2 className="rounded">{t('navbar.travel')}</h2>
          </Badge>
        </Col>
      </Row>
      <Row className="pt-5 mb-4 justify-content-center">
        <Col md={10}>
          <CustomMap />
        </Col>
      </Row>
    </Container>
  )
}

/**
 * Display a Leaflet Map containing a list of Markers per visited city
 */
const CustomMap = () => {
  const { t } = useTranslation()

  return (
    <MapContainer
      style={{ height: '500px' }}
      center={[54.370138916189596, -29.918133437500003]}
      zoom={3}
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cities.map(city => (
        <Marker position={city.latlng} key={`${city.latlng.lat}_${city.latlng.lng}`}>
          <Tooltip>{t(city.tooltip)}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}
