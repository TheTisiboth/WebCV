import {getLocale, getTranslations} from 'next-intl/server'
import {Badge, Col, Container, Row} from 'react-bootstrap'
import {FC} from 'react'
import {fetchAPI} from '../utils/fetch-api'
import {History} from '../types/generated/History'
import Link, {StyledImage} from '../components/icon'
import {StrapiRoute} from '../types/generated/routes/StrapiRoute'

type HistoryItemProps = History

const HistoryItem: FC<HistoryItemProps> = async ({
    picture,
    type,
    description,
    title,
    link,
    dates: {startDate, endDate}
}) => {
    const locale = await getLocale()
    const t = await getTranslations()
    const start = new Date(startDate).toLocaleDateString(locale, { year: 'numeric', month: 'numeric' })
    const end = endDate ? new Date(endDate).toLocaleDateString(locale, { year: 'numeric', month: 'numeric' }) : t('now')

    return (
        <div>
            <h3>{title}</h3>
            <p>{start} - {end}</p>
            <p>Type: {type}</p>
            {picture &&
                <Link href={link}>
                    <Link.Image margin='mt-4' url={picture.url} alt={title}/>
                </Link>
            }
            <p>{description}</p>
        </div>
    )
}


/**
 * Contains Education and professional experience
 */
export const Histories: FC = async () => {
    const t = await getTranslations('navbar')
    const locale = await getLocale()
    const histories = await fetchAPI<History[]>({resource: StrapiRoute.History, locale})
    return (
        <Container id="History" className="pt-5">
            <Row className="mb-4 justify-content-center">
                <Col xs={true} md={8} className="pt-2 pb-2">
                    <Badge className='mytitle titles'><h2 className="rounded ">{t('history')}</h2></Badge>
                </Col>
            </Row>
            {histories.map(history =>
                <HistoryItem {...history} key={history.title}/>
            )}
        </Container>
    )
}

