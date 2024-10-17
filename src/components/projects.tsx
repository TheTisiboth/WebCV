import { FC } from 'react'
import { Badge, Col, Container, Figure, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { IconContext } from 'react-icons'
import { FaGithub, FaGitlab } from 'react-icons/fa'
import coloricm from '../assets/projects/coloricm.png'
import guc from '../assets/projects/guc.png'
import kine from '../assets/projects/kine.png'
import webCV from '../assets/projects/webCV.png'
import { Skills } from './skills'

/**
* Projects section
*/
export const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <Container id="Projects" className="pt-5">
      <Row className="mb-4 justify-content-center">
        <Col xs={true} md={8} className="pt-2 pb-2">
          <Badge className="mytitle titles "><h2 className=" rounded ">{t('navbar.projects')}</h2></Badge>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={webCV}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.0.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.0.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://github.com/TheTisiboth/WebCV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skillName="React" />
              <Skills skillName="Bootstrap" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={kine}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.1.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.1.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://gitlab.com/Eva_B/reeducation_kine_connecte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skillName="Angular" />
              <Skills skillName="MongoDB" />
              <Skills skillName="Node" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={guc}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.2.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.2.body')}</p>
          <Row>
            <Col xs={3}>
              <a
                href="https://gitlab.com/Polytech-INFO5-2019-2020/g3/2019-2020-ecom-info5-root"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGitlab />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-0 pr-md-5">
              <Skills skillName="JHipster" />
              <Skills skillName="Angular" />
              <Skills skillName="Spring" />
              <Skills skillName="Postgre" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center pt-5 pb-5 mt-3 mb-3">
        <Col xs={12} md={true}>
          <Figure>
            <Figure.Image
              height="75%"
              width="75%"
              alt="171x180"
              src={coloricm}
            />
          </Figure>
        </Col>
        <Col xs={12} md={true} className="align-self-center pr-5">
          <h3>
            <Trans i18nKey="projects.3.title">
              <strong></strong>
            </Trans>
          </h3>
          <p className="text-left">{t('projects.3.body')}</p>
          <Row>
            <Col xs={4}>
              <a
                href="https://github.com/TheTisiboth/PLA_2018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </a>
            </Col>
            <Col className="text-right pr-md-5">
              <Skills skillName="Java" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
