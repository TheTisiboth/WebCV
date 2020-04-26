import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
    Row,
    Col,
    Figure,
    OverlayTrigger,
    Badge
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
import PHP from "../assets/php.png";
import SQL from "../assets/sql.png";
import REACT from "../assets/react.svg";
import GIT from "../assets/git.png";
import LINUX from "../assets/linux.svg";
import ARDUINO from "../assets/arduino.svg";
import NODE from "../assets/node.png";
import JHIPSTER from "../assets/jhipster.png";
import SPRING from "../assets/spring.png";
import POSTGRES from "../assets/postgres.webp";

interface skill {
    image: string,
    href: string,
    tooltip: string,
    class?: string,
    size?: number
}

interface skills {
    title: string,
    skills: skill[]
}

/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover) 
 * @param props Info about the image to display
 */
function Skill(props: any): ReactElement {
    const skill = props.skill;

    return (
        <a
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
        >
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip(skill.tooltip)}
            >
                <Figure>
                    <Figure.Image
                        className={(skill.class ? skill.class : "")}
                        width={(skill.size) ? skill.size : 32}
                        height={(skill.size) ? skill.size : 32}
                        alt="171x180"
                        src={skill.image}
                    />
                </Figure>
            </OverlayTrigger>
        </a>
    );
}

/**
 * Display a list of skill
 */
export function Skills(props: { skill: string; }): ReactElement {
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
                tooltip: "Python"
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
                tooltip: "PHP",
                size: 42
            },
            {
                image: SQL,
                href: "https://en.wikipedia.org/wiki/SQL",
                tooltip: "SQL",
            }
        ]
    };

    const others: skills =
    {
        title: t("skills.other"),
        skills: [
            {
                image: GIT,
                href: "https://git-scm.com/",
                tooltip: "Git",
                class: "iconToWhite"
            },
            {
                image: LINUX,
                href: "https://www.linux.org/",
                tooltip: "Linux"
            }
        ]
    };

    const extraSkills: skills =
    {
        title: "Extra Skills",
        skills: [
            {
                image: NODE,
                href: "https://nodejs.org/",
                tooltip: "Node.js",
            },
            {
                image: JHIPSTER,
                href: "https://www.jhipster.tech/",
                tooltip: "JHipster",
            },
            {
                image: SPRING,
                href: "https://spring.io/",
                tooltip: "Spring",
            },
            {
                image: POSTGRES,
                href: "https://www.postgresql.org/",
                tooltip: "Postgres SQL",
            }
        ]
    }

    const row1: skills[] = [system, software];
    const row2: skills[] = [web, others];
    if (props.skill === "") {
        return (
            <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
                <Row className=" justify-content-center">
                    <Col md={6} xs={8} className="pt-2 pb-2  rounded">
                        <Badge className="titleReverse pl-3 pr-3"><h2 >{t("navbar.skill")}</h2></Badge>
                    </Col>
                </Row>
                <Row className="justify-content-center pt-4">
                    {row1.map((s: skills): ReactElement => {
                        return (

                            <Col key={s.title} md={6}>
                                <Row>
                                    <Col>
                                        <h5>{s.title}</h5>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col>
                                        {s.skills.map((skill: skill): ReactElement => {
                                            return (

                                                <Skill
                                                    skill={skill}
                                                    key={skill.href}
                                                />
                                            );
                                        }
                                        )}
                                    </Col>
                                </Row>
                            </Col>

                        );
                    })
                    }
                </Row>
                <Row >
                    {row2.map((s: skills): ReactElement => {
                        return (

                            <Col key={s.title} md={6}>
                                <Row>
                                    <Col>
                                        <h5>{s.title}</h5>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={6} md>
                                        {s.skills.map((skill: skill, index: number): ReactElement => {
                                            return (
                                                <Skill
                                                    skill={skill}
                                                    key={skill.href}
                                                />
                                            );
                                        }
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        );
                    })
                    }
                </Row>
            </div>
        );
    } else {
        const arr = [...row1, ...row2, extraSkills];
        let mySkill = null;
        arr.map(skills => {
            skills.skills.map(skill => {
                if (skill.tooltip.includes(props!.skill))
                    mySkill = skill;
            })
        })
        return (<Skill skill={mySkill} />)
    }
}