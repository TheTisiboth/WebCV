import { FC } from 'react';
import { Badge, Col, Container, Figure, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import deliveroo from '../assets/deliveroo.png';
import enovacom from '../assets/enovacom.png';
import greendelta from '../assets/greendelta.png';
import mcdonalds from '../assets/mcdonalds.png';
import mpaa from '../assets/mpaa.png';
import peip from '../assets/peip.png';
import polytech from '../assets/polytech.png';
import sebben from '../assets/sebben.png';

type HistoryItem = {
    date: string,
    title: string,
    body: string,
    job: boolean
}

type PictureInfo = {
    icon: string,
    url?: string,
    width: string,
    height: string,
    name: string
}

/**
* Contains Education and professionnal experience
*/
export const History: FC = () => {
    const { t } = useTranslation()

    const pictures = new Map<number, PictureInfo>(
        [
            [0, {
                icon: greendelta,
                url: "https://www.greendelta.com/",
                height: "120px",
                width: "120px",
                name: "Greendelta"
            }],
            [1, {
                icon: enovacom,
                url: "https://www.enovacom.fr/",
                height: "120px",
                width: "120px",
                name: "Enovacom"
            }],
            [2, {
                icon: mpaa,
                url: "https://www.motionpictures.org/",
                height: "80px",
                width: "80px",
                name: "MPAA"
            }],
            [3, {
                icon: polytech,
                url: "https://www.polytech-grenoble.fr/",
                height: "160px",
                width: "160px",
                name: "Polytech Grenoble"
            }],
            [4, {
                icon: mcdonalds,
                url: "https://www.mcdonalds.fr/",
                height: "80px",
                width: "80px",
                name: "McDonald's"
            }],
            [5, {
                icon: deliveroo,
                url: "https://deliveroo.fr",
                height: "80px",
                width: "80px",
                name: "Deliveroo"
            }],
            [6, {
                icon: peip,
                url: "https://polytech.univ-amu.fr/formations/cycle-preparatoire",
                height: "80px",
                width: "80px",
                name: "PEIP"
            }],
            [7, {
                icon: sebben,
                height: "80px",
                width: "80px",
                name: "Sebben"
            }],
        ]
    )
    const historyItems: HistoryItem[] = t("history", { returnObjects: true })
    return (
        <Container id="History" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge className='mytitle titles'><h2 className="rounded ">{t('navbar.history')}</h2></Badge>
                </Col>
            </Row>
            <Timeline lineColor={'#ddd'}>
                {historyItems.map((historyItem, idx) => {
                    const picture = pictures.get(idx)
                    return (
                        <TimelineItem
                            key={idx}
                            dateText={historyItem.date}
                            style={historyItem.job ? { color: '#e86971' } : { color: '#61b8ff' }}
                            dateInnerStyle={historyItem.job ? {} : { background: '#61b8ff', color: '#000' }}
                            bodyContainerStyle={historyItem.job ? {
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            } : {}}
                            className="longDate"
                        >
                            <h4>{historyItem.title}</h4>
                            {picture &&
                                <a href={picture.url} target="_blank" rel="noopener noreferrer">
                                    <Figure className="mt-4">
                                        <Figure.Image
                                            height={picture.height}
                                            width={picture.width}
                                            alt={picture.name}
                                            src={picture.icon}
                                        />
                                    </Figure>
                                </a>
                            }
                            <p className="text-left">
                                <Trans i18nKey={`history[${idx}].body`}>
                                    <strong></strong> {historyItem.body}
                                </Trans>
                            </p>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </Container>
    )
}
