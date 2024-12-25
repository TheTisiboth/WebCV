import C from '../../public/c.png'
import ARM from '../../public/arm2.png'
import ARDUINO from '../../public/arduino.svg'
import JAVA from '../../public/java.png'
import PYTHON from '../../public/python.png'
import OCAML from '../../public/ocaml.jpg'
import REACT from '../../public/react.svg'
import MUI from '../../public/mui.png'
import BOOTSTRAP from '../../public/bootstrap.png'
import ANGULAR from '../../public/angular.png'
import MONGODB from '../../public/mongodb.png'
import JQUERY from '../../public/jquery.png'
import PHP from '../../public/php.png'
import SQL from '../../public/sql.png'
import GIT from '../../public/git.png'
import LINUX from '../../public/linux.svg'
import NODE from '../../public/node.png'
import JHIPSTER from '../../public/jhipster.png'
import SPRING from '../../public/spring.png'
import POSTGRES from '../../public/postgres.webp'
import HTML from '../../public/html.png'
import CSS from '../../public/css.png'
import { SkillImage, SkillInfos } from '../types'

export const system: SkillInfos = {
    title: 'skills.system',
    skills: [
        {
            image: C,
            href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
            tooltip: 'C'
        },
        {
            image: ARM,
            href: 'https://www.arm.com/products/silicon-ip-cpu',
            tooltip: 'ARM'
        },
        {
            image: ARDUINO,
            href: 'https://www.arduino.cc/',
            tooltip: 'Arduino'
        }
    ]
}

export const software: SkillInfos = {
    title: 'skills.software',
    skills: [
        {
            image: JAVA,
            href: 'https://www.java.com/fr/',
            tooltip: 'Java'
        },
        {
            image: PYTHON,
            href: 'https://www.python.org/',
            tooltip: 'Python'
        },
        {
            image: OCAML,
            href: 'https://ocaml.org/',
            tooltip: 'Ocaml'
        }
    ]
}

export const web: SkillInfos = {
    title: 'skills.web',
    skills: [
        {
            image: REACT,
            href: 'https://reactjs.org/',
            tooltip: 'React'
        },
        {
            image: MUI,
            href: 'https://mui.com/',
            tooltip: 'Material UI'
        },
        {
            image: BOOTSTRAP,
            href: 'https://getbootstrap.com/',
            tooltip: 'Bootstrap'
        },
        {
            image: ANGULAR,
            href: 'https://angular.io/',
            tooltip: 'Angular'
        },
        {
            image: MONGODB,
            href: 'https://www.mongodb.com/',
            tooltip: 'MongoDB'
        },
        {
            image: JQUERY,
            href: 'https://jquery.com/',
            tooltip: 'JQuery'
        },
        {
            image: PHP,
            href: 'https://www.php.net/',
            tooltip: 'PHP',
            size: 42
        },
        {
            image: SQL,
            href: 'https://en.wikipedia.org/wiki/SQL',
            tooltip: 'SQL',
            size: 25
        }
    ]
}

export const others: SkillInfos = {
    title: 'skills.other',
    skills: [
        {
            image: GIT,
            href: 'https://git-scm.com/',
            tooltip: 'Git',
            class: 'iconToWhite'
        },
        {
            image: LINUX,
            href: 'https://www.linux.org/',
            tooltip: 'Linux'
        }
    ]
}

export const extraSkills: SkillInfos = {
    title: 'Extra Skills',
    skills: [
        {
            image: NODE,
            href: 'https://nodejs.org/',
            tooltip: 'Node.js',
        },
        {
            image: JHIPSTER,
            href: 'https://www.jhipster.tech/',
            tooltip: 'JHipster',
        },
        {
            image: SPRING,
            href: 'https://spring.io/',
            tooltip: 'Spring',
        },
        {
            image: POSTGRES,
            href: 'https://www.postgresql.org/',
            tooltip: 'Postgres SQL',
        },
        {
            image: HTML,
            href: 'https://en.wikipedia.org/wiki/HTML',
            tooltip: 'HTML'
        },
        {
            image: CSS,
            href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            tooltip: 'CSS'
        },
    ]
}

export const allSkillImages: SkillImage[] = [ system.skills, software.skills, web.skills, others.skills, extraSkills.skills ].flat()
