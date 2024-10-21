import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button, Col, Row} from 'react-bootstrap'
import {computeAge} from '../../utils.tsx'

/**
 * LeftHeader, containing general info about author
 */
const LeftHeader: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Row>
        <Col md={12} className="pr-0 pl-0">
          <div className="name">
            <h1>Léo Jan</h1>
          </div>
          <div>
            <h5>{t('me.work')}</h5>
          </div>
          <div>
            <h5>{computeAge()} {t('me.years')}</h5>
          </div>
        </Col>
        <Col md={12} className="align-self-center pt-3 pt-md-0 pb-3 pb-md-0 mt-md-5 pr-0 pl-0">
          <div className="name">
            <h5>Polytech Grenoble</h5>
          </div>
          <div>
            <h5>{t('me.livesIn')}</h5>
          </div>
          <div>
            <a href="mailto:pro@leojan.fr" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">pro@leojan.fr</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default LeftHeader
