import webCV from '../../public/projects/webCV.png'
import {FaGithub, FaGitlab} from 'react-icons/fa'
import kine from '../../public/projects/kine.png'
import guc from '../../public/projects/guc.png'
import coloricm from '../../public/projects/coloricm.png'
import {Project} from '../types'

export const projects: Project[] = [
    {
        image: webCV,
        title: 'projects.0.title',
        body: 'projects.0.body',
        skills: ['React', 'Bootstrap'],
        repository: {
            Icon: FaGithub,
            href: 'https://github.com/TheTisiboth/WebCV'
        },
    },
    {
        image: kine,
        title: 'projects.1.title',
        body: 'projects.1.body',
        skills: ['Angular', 'MongoDB', 'Node'],
        repository: {
            Icon: FaGitlab,
            href: 'https://gitlab.com/Eva_B/reeducation_kine_connecte'
        },
    },
    {
        image: guc,
        title: 'projects.2.title',
        body: 'projects.2.body',
        skills: ['JHipster', 'Angular', 'Spring', 'Postgre'],
        repository: {
            Icon: FaGitlab,
            href: 'https://gitlab.com/Polytech-INFO5-2019-2020/g3/2019-2020-ecom-info5-root'
        },
    },
    {
        image: coloricm,
        title: 'projects.3.title',
        body: 'projects.3.body',
        skills: ['Java'],
        repository: {
            Icon: FaGithub,
            href: 'https://github.com/TheTisiboth/PLA_2018'
        },
    },
]
