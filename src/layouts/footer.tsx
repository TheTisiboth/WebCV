import { FC } from 'react'
import { Button, Col, Container, ListGroup, Row, Nav } from 'react-bootstrap'
import { animateScroll } from 'react-scroll'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { LinkTooltip } from '../components/icon'

const Footer: FC = () => {
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
                    <Nav.Link className="mt-2" onClick={() => animateScroll.scrollToTop(scrollOptions)}>
                        <LinkTooltip tooltipLabel='top' placement="right">
                            <Button variant="outline-light">
                                <FaArrowAltCircleUp className="mb-1"/>
                            </Button>
                        </LinkTooltip>
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
