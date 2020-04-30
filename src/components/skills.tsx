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
import { TFunction } from 'i18next';
import { software, web, others, system, extraSkills} from './constant';

interface skill {
    image: string,
    href: string,
    tooltip: string,
    class?: string,
    size?: number
  }
  
  export interface skills {
    title: string,
    skills: skill[]
  }

/**
 * Display an image of a technology, with a link to its website, and a tooltip (on hover) 
 * @param props Info about the image to display
 */
function Skill(props: { skill: skill; }): ReactElement {
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
export function Skills(props?: { skill?: string; }): ReactElement {
    const { t }: { t: TFunction } = useTranslation();
    
    const list: skills[][] = [[system, software], [web, others]]

    // We want to display all the skills
    if (props === undefined || props.skill === undefined) {
        return (
            <div id="Skills" className="text-center pt-5 pt-md-2 pr-0 pr-md-5">
                <Row className=" justify-content-center">
                    <Col md={6} xs={8} className="pt-2 pb-2  rounded">
                        <Badge className="titleReverse pl-3 pr-3"><h2 >{t("navbar.skill")}</h2></Badge>
                    </Col>
                </Row>
                {/* <Row className="justify-content-center pt-4"> */}
                {list.map((row: skills[]) => {
                    return (
                        <Row key={row[0].title} className="justify-content-center pt-4">
                            {row.map((s: skills): ReactElement => {
                                return (
                                    <Col key={s.title} md={6}>
                                        <Row>
                                            <Col>
                                                <h5>{t(s.title)}</h5>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col xs={6} md={10}>
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
                            })}
                        </Row>
                    )
                })}
            </div>
        );
    } else {
        const arr = [...list[0], ...list[1], extraSkills];
        const skills = arr.map(({ skills }) => skills).flat()
        const mySkill: skill = skills.find(skill => skill.tooltip.includes(props!.skill as string)) as skill;

        return (<Skill skill={mySkill} />)
    }
}
