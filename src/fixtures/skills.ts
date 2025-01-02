import { SkillImage, SkillInfos } from '../types'

export const system: SkillInfos = {
    title: 'skills.system',
    skills: [
        {
            image: 'c',
            href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
            tooltip: 'C',
            width: 32,
            height: 35
        },
        {
            image: 'arm',
            href: 'https://www.arm.com/products/silicon-ip-cpu',
            tooltip: 'ARM',
            width: 32,
            height: 10
        },
        {
            image: 'arduino',
            href: 'https://www.arduino.cc/',
            tooltip: 'Arduino',
            width: 32,
            height: 22
        }
    ]
}

export const software: SkillInfos = {
    title: 'skills.software',
    skills: [
        {
            image: 'java',
            href: 'https://www.java.com/fr/',
            tooltip: 'Java',
            width: 32,
            height: 60
        },
        {
            image: 'python',
            href: 'https://www.python.org/',
            tooltip: 'Python'
        },
        {
            image: 'ocaml',
            href: 'https://ocaml.org/',
            tooltip: 'Ocaml'
        }
    ]
}

export const web: SkillInfos = {
    title: 'skills.web',
    skills: [
        {
            image: 'react',
            href: 'https://reactjs.org/',
            tooltip: 'React',
            width: 32,
            height: 29
        },
        {
            image: 'mui',
            href: 'https://mui.com/',
            tooltip: 'Material UI'
        },
        {
            image: 'bootstrap',
            href: 'https://getbootstrap.com/',
            tooltip: 'Bootstrap'
        },
        {
            image: 'angular',
            href: 'https://angular.io/',
            tooltip: 'Angular',
            width: 32,
            height: 34
        },
        {
            image: 'mongodb',
            href: 'https://www.mongodb.com/',
            tooltip: 'MongoDB'
        },
        {
            image: 'jquery',
            href: 'https://jquery.com/',
            tooltip: 'JQuery',
            width: 32,
            height: 36
        },
        {
            image: 'php',
            href: 'https://www.php.net/',
            tooltip: 'PHP',
            width: 42,
            height: 22
        },
        {
            image: 'sql',
            href: 'https://en.wikipedia.org/wiki/SQL',
            tooltip: 'SQL',
            width: 25,
            height: 33
        }
    ]
}

export const others: SkillInfos = {
    title: 'skills.other',
    skills: [
        {
            image: 'git',
            href: 'https://git-scm.com/',
            tooltip: 'Git',
            class: 'iconToWhite'
        },
        {
            image: 'linux',
            href: 'https://www.linux.org/',
            tooltip: 'Linux',
            width: 32,
            height: 38
        }
    ]
}

export const extraSkills: SkillInfos = {
    title: 'Extra Skills',
    skills: [
        {
            image: 'node',
            href: 'https://nodejs.org/',
            tooltip: 'Node.js',
        },
        {
            image: 'jhipster',
            href: 'https://www.jhipster.tech/',
            tooltip: 'JHipster',
        },
        {
            image: 'spring',
            href: 'https://spring.io/',
            tooltip: 'Spring',
        },
        {
            image: 'postgres',
            href: 'https://www.postgresql.org/',
            tooltip: 'Postgres SQL',
        },
        {
            image: 'html',
            href: 'https://en.wikipedia.org/wiki/HTML',
            tooltip: 'HTML'
        },
        {
            image: 'css',
            href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            tooltip: 'CSS'
        },
    ]
}

export const allSkillImages: SkillImage[] = [ system.skills, software.skills, web.skills, others.skills, extraSkills.skills ].flat()
