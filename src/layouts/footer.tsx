import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button, Col, Container, ListGroup, OverlayTrigger, Row, Nav, Tooltip} from 'react-bootstrap'
import {animateScroll} from 'react-scroll'
import {FaArrowAltCircleUp} from 'react-icons/fa'

const Footer: FC = () => {
  const { t } = useTranslation()
  const scrollOptions = {
    duration: 200
  }

  return (
    <Container>
      <ListGroup horizontal={true} className="justify-content-center copyright pt-2">
        <ListGroup.Item className="copyright" variant="dark">© 2020 Copyright: Léo Jan</ListGroup.Item>
      </ListGroup>
      <Row className="justify-content-center">
        <Col md={3}>
          <Nav.Link className="mt-2" onClick={() => animateScroll.scrollToTop(scrollOptions)} >
            <OverlayTrigger
              placement="right"
              delay={{ show: 0, hide: 0 }}
              overlay={<Tooltip>{t('top')}</Tooltip>}
            >
              <Button variant="outline-light">
                <FaArrowAltCircleUp className="mb-1" />
              </Button>
            </OverlayTrigger>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
