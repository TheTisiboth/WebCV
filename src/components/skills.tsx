import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col,
    Container,
    Figure,
    OverlayTrigger
} from "react-bootstrap";
import { renderTooltip } from "../utils";
import C from "../assets/c.png";
import JAVA from "../assets/java.png";
import PYTHON from "../assets/python.png";
import OCAML from "../assets/ocaml.jpg";
import ARM from "../assets/arm2.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JQUERY from "../assets/jquery.png";
import MONGODB from "../assets/mongodb.png";
import ANGULAR from "../assets/angular.png";
import PHP from "../assets/php.svg";
import SQL from "../assets/sql.png";
import REACT from "../assets/react.svg";
import GIT from "../assets/git.png";
import LINUX from "../assets/linux.svg";
import ARDUINO from "../assets/arduino.svg";


interface skill {
    image: string,
    href: string,
    tooltip: string
}

interface skills {
    title: string,
    skills: skill[]
}

/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover) 
 * @param props Info about the image to display
 */
function Skill(props: {
    href: string | undefined;
    tooltip: any;
    image: string | undefined;
}): ReactElement {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
        >
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(props.tooltip)}
            >
                <Figure>
                    <Figure.Image
                        width={40}
                        height={40}
                        alt="171x180"
                        src={props.image}
                    />
                </Figure>
            </OverlayTrigger>
        </a>
    );
}

/**
 * Display a list of skill
 */
export function Skills(): ReactElement {
    const { t } = useTranslation();

    const system: skills =
    {
        title: t("skills.system"),
        skills: [
            {
                image: C,
                href: "https://en.wikipedia.org/wiki/C_(programming_language)",
                tooltip: "C"
            },
            {
                image: ARM,
                href: "https://www.arm.com/products/silicon-ip-cpu",
                tooltip: "ARM"
            },
            {
                image: ARDUINO,
                href: "https://www.arduino.cc/",
                tooltip: "Arduino"
            }
        ]
    };

    const software: skills =
    {
        title: t("skills.software"),
        skills: [
            {
                image: JAVA,
                href: "https://www.java.com/fr/",
                tooltip: "Java"
            },
            {
                image: PYTHON,
                href: "https://www.python.org/",
                tooltip: "Pyhton"
            },
            {
                image: OCAML,
                href: "https://ocaml.org/",
                tooltip: "Ocaml"
            }
        ]
    };

    const web: skills =
    {
        title: t("skills.web"),
        skills: [
            {
                image: HTML,
                href: "https://en.wikipedia.org/wiki/HTML",
                tooltip: "HTML"
            },
            {
                image: CSS,
                href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
                tooltip: "CSS"
            },
            {
                image: BOOTSTRAP,
                href: "https://getbootstrap.com/",
                tooltip: "Bootstrap"
            },
            {
                image: ANGULAR,
                href: "https://angular.io/",
                tooltip: "Angular"
            },
            {
                image: REACT,
                href: "https://reactjs.org/",
                tooltip: "React"
            },
            {
                image: MONGODB,
                href: "https://www.mongodb.com/",
                tooltip: "MongoDB"
            },
            {
                image: JQUERY,
                href: "https://jquery.com/",
                tooltip: "JQuery"
            },
            {
                image: PHP,
                href: "https://www.php.net/",
                tooltip: "PHP"
            },
            {
                image: SQL,
                href: "https://en.wikipedia.org/wiki/SQL",
                tooltip: "SQL"
            }
        ]
    };

    const others: skills =
    {
        title: t("skills.others"),
        skills: [
            {
                image: GIT,
                href: "https://git-scm.com/",
                tooltip: "Git"
            },
            {
                image: LINUX,
                href: "https://www.linux.org/",
                tooltip: "Linux"
            }
        ]
    };


    const skillsList: skills[] = [system, software, web, others];

    return (
        <Container >
            <Row id="Skills" className=" justify-content-center">
                <Col md={4} xs={8} className="pt-2 pb-2 title rounded">
                    <h2 >{t("navbar.skill")}</h2>
                </Col>
            </Row>
            <Row>
                {skillsList.map((skills: skills): ReactElement => {
                    return (
                        <Col key={skills.title} sm={12} md={3}>
                            <Row>
                                <Col>
                                    <h3>{skills.title}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {skills.skills.map((skill: skill): ReactElement => {
                                        return (<Skill
                                            key={skill.href}
                                            image={skill.image}
                                            href={skill.href}
                                            tooltip={skill.tooltip}
                                        />);
                                    })}
                                </Col>
                            </Row>
                        </Col>
                    );
                })}
            </Row>
        </Container >
    );
}