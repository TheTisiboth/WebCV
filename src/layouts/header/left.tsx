import {FC} from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import {computeAge} from '../../utils'
import {useTranslations} from 'next-intl'
import Link from "next/link";

/**
 * LeftHeader, containing general info about author
 */
const LeftHeader: FC = () => {
    const t = useTranslations('me')
    return (
        <div>
            <Row>
                <Col md={12} className="pr-0 pl-0">
                    <div className="name">
                        <h1>Léo Jan</h1>
                    </div>
                    <div>
                        <h5>{t('work')}</h5>
                    </div>
                    <div>
                        <h5>{computeAge()} {t('years')}</h5>
                    </div>
                </Col>
                <Col md={12} className="align-self-center pt-3 pt-md-0 pb-3 pb-md-0 mt-md-5 pr-0 pl-0">
                    <div className="name">
                        <h5>Polytech Grenoble</h5>
                    </div>
                    <div>
                        <h5>{t('livesIn')}</h5>
                    </div>
                    <div>
                        <Link href="mailto:pro@leojan.fr" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">pro@leojan.fr</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default LeftHeader
