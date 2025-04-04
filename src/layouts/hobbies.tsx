import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {FaBasketballBall, FaTableTennis} from 'react-icons/fa'
import {GiFrisbee} from 'react-icons/gi'
import Badminton from '../../public/badminton.png'
import Image from 'next/image'
import {useTranslations} from 'next-intl'


export const Hobbies: FC = () => {
    const t = useTranslations()
    return (
        <Container>
            <Row className="pt-5 mb-4 justify-content-center">
                <Col xs={true} className="pt-2 pb-2">
                    <Badge className='mytitle rounded'>
                        <h2 id="longTitle">{t('navbar.hobbies')}</h2>
                    </Badge>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col md={4}/>
                <Col md={4}>
                    <div className="text-left">
                        <ul className='list-unstyled'>
                            <li>
                                <h5>{t('hobbies.it')}</h5>
                            </li>
                            <li className="">
                                <h5>Sports</h5>
                                <ul>
                                    <li style={{listStyleType: 'none'}}>
                                        {' '}
                                        <GiFrisbee/>{' '}
                                        <span className="ml-2 ">{t('hobbies.frisbee')}</span>
                                    </li>
                                    <li style={{listStyleType: 'none'}}>
                                        {' '}
                                        <Image src={Badminton} alt='badminton' width={20} height={20}/>{' '}
                                        <span className="ml-2 ">
                                            {t('hobbies.badminton')}
                                        </span>
                                    </li>
                                    <li style={{listStyleType: 'none'}}>
                                        {' '}
                                        <FaBasketballBall/>{' '}
                                        <span className="ml-2 ">Basket-ball</span>
                                    </li>
                                    <li style={{listStyleType: 'none'}}>
                                        {' '}
                                        <FaTableTennis/>{' '}
                                        <span className="ml-2 ">{t('hobbies.pingpong')}</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>{t('hobbies.read')}</h5>
                            </li>
                            <li>
                                <h5>{t('hobbies.music')}</h5>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={4}/>
            </Row>
        </Container>
    )
}
