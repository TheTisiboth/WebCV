import C from '../assets/c.png'
import ARM from '../assets/arm2.png'
import ARDUINO from '../assets/arduino.svg'
import JAVA from '../assets/java.png'
import PYTHON from '../assets/python.png'
import OCAML from '../assets/ocaml.jpg'
import REACT from '../assets/react.svg'
import MUI from '../assets/mui.png'
import BOOTSTRAP from '../assets/bootstrap.png'
import ANGULAR from '../assets/angular.png'
import MONGODB from '../assets/mongodb.png'
import JQUERY from '../assets/jquery.png'
import PHP from '../assets/php.png'
import SQL from '../assets/sql.png'
import GIT from '../assets/git.png'
import LINUX from '../assets/linux.svg'
import NODE from '../assets/node.png'
import JHIPSTER from '../assets/jhipster.png'
import SPRING from '../assets/spring.png'
import POSTGRES from '../assets/postgres.webp'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import {SkillImage, SkillInfos} from '../types'

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

export const allSkillImages: SkillImage[] = [system.skills, software.skills, web.skills, others.skills, extraSkills.skills].flat()
