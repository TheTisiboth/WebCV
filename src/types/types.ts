export type Project = {
    title: string,
    description: string
    codeRepository: {
        name: string,
        link: string,
    },
    skills:{
        name: string
    }[],
    picture: {
        url: string
    },
    year: string,
    duration: string
}

export type City = {
    name: string,
    coordinate: {
        lat: number,
        lng: number
    }
}

export type History = {
    title: string,
    description: string,
    type: 'job'|'education',
    picture:{
        url: string
    },
    link: string,
    dates: {
        startDate: string,
        endDate?: string
    }
}

export type Dictionary = {
    title: string,
    top: string,
    navbar: {
        presentation: string,
        education: string,
        experience: string,
        skill: string,
        travel: string,
        projects: string,
        cv: string,
        hobbies: string,
        history: string,
    },
    me: {
        work: string,
        livesIn: string,
        years: string,
    },
    translationTooltip: string,
    cvFrTooltip: string,
    cvEnTooltip: string,
    cvDeTooltip: string,
    languages:
        {
            french: string,
            english: string,
            german: string,
        },
    history: {
        id: number,
        date: string,
        title: string,
        body: string,
        job: boolean,
    }[],
    skills: {
        system: string,
        software: string,
        web: string,
        other: string,
    },
    wip: {
        title: string,
        body: string,
    },
    hobbies: {
        it: string,
        read: string,
        music: string,
        frisbee: string,
        badminton: string,
        basketball: string,
        pingpong: string,
    },
    projects: {
        0:
            {
                title: string,
                body: string,
            },
        1:
            {
                title: string,
                body: string,
            },
        2:
            {
                title: string,
                body: string,
            },
        3:
            {
                title: string,
                body: string,
            },
    },
    travel: {
        germany: {
            country: string,
            munich: string,
            munster: string,
            hamburg: string,
            berlin: string,
        },
        tchequie: {
            country: string,
            prague: string,
        },
        belgium: {
            country: string,
            brussels: string,
            liege: string,
        },
        canada: {
            country: string,
            montreal: string,
            tadoussac: string,
            sherbrooke: string,
            quebec: string,
        },
        spain: {
            country: string,
            barcelona: string,
            palma: string,
        },
        italy: {
            country: string,
            roma: string,
            naples: string,
            pompei: string,
        },
        greece: {
            country: string,
            athens: string,
            corinth: string,
        },
        us: {
            country: string,
            ny: string,
        },
        uk: {
            country: string,
            ireland: string,
        },
        fr: {
            country: string,
            marseille: string,
        },
        sweden: {
            country: string,
            stockholm: string,
        },
    },
}
