/*
import {FC} from 'react'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react'
import type {HistoryItem, HistoryPicture} from '../types'
import {historyItems, pictures} from '../fixtures/history'
import Link from '../components/icon'
import {useTranslations} from 'next-intl'

type HistoryItemProps = {
    historyItem: HistoryItem
    idx: number
    picture?: HistoryPicture
}
const HistoryItem: FC<HistoryItemProps> = ({historyItem, idx, picture}) => {
    const t = useTranslations('history')

    return (
        <TimelineItem
            key={idx}
            dateText={t(`${idx}.date`)}
            style={historyItem.job ? {color: '#e86971'} : {color: '#61b8ff'}}
            dateInnerStyle={historyItem.job ? {} : {background: '#61b8ff', color: '#000'}}
            bodyContainerStyle={historyItem.job ? {
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            } : {}}
            className="longDate"
        >
            <h4>{t(`${idx}.title`)}</h4>
            {picture &&
                <Link href={picture.url}>
                    <Link.Image margin='mt-4' image={picture.icon} size={picture.height} alt={picture.name}/>
                </Link>
            }
            <p className="text-left">
                {t.rich(`${idx}.body`, {
                    tag: (children) => <strong>{children}</strong>
                })
                }
            </p>
        </TimelineItem>
    )
}

/!**
 * Contains Education and professionnal experience
 *!/
export const History: FC = () => {
    const t = useTranslations('navbar')

    return (
        <Container id="History" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge className='mytitle titles'><h2 className="rounded ">{t('history')}</h2></Badge>
                </Col>
            </Row>
            <Timeline lineColor={'#ddd'}>
                {historyItems.map((historyItem, idx) => {
                    const picture = pictures.find(picture => picture.historyItemId === historyItem.id)
                    return <HistoryItem key={idx} historyItem={historyItem} idx={idx} picture={picture}/>
                })}
            </Timeline>
        </Container>
    )
}
*/
