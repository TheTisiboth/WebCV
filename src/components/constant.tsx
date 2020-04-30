import { LatLngLiteral } from 'leaflet';
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

export interface position {
  latlng: LatLngLiteral,
  tooltip: string | string[]
}

export interface state {
  markers: position[],
  zoom: number,
  display: position[] | any,
  geoJson: JSX.Element,
  countries: { [key: string]: position }
}


export interface skill {
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

export const system: skills =
    {
        title: "skills.system",
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

    export const software: skills =
    {
        title: "skills.software",
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

    export const web: skills =
    {
        title: "skills.web",
        skills: [
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
                size: 25
            }
        ]
    };

    export const others: skills =
    {
        title: "skills.other",
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

    export const extraSkills: skills =
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
            },
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
                image: REACT,
                href: "https://reactjs.org/",
                tooltip: "React"
            },
        ]
    }



// List of position and label of tooltip for the GeoJson object, for each country
export let countries: { [key: string]: position } = {
  DEU: {
    latlng: {
      lat: 51.0834196,
      lng: 10.4234469,
    },
    tooltip: [
      "travel.germany.munich",
      "travel.germany.berlin",
      "travel.germany.hamburg",
      "travel.germany.munster",
      "travel.germany.country",
    ]
  },
  CZE: {
    latlng: {
      lat: 49.667628,
      lng: 15.326962,
    },
    tooltip: [
      "travel.tchequie.prague",
      "travel.tchequie.country",
    ]
  },
  BEL: {
    latlng: {
      lat: 50.6402809,
      lng: 4.6667145,
    },
    tooltip: [
      "travel.belgium.brussels",
      "travel.belgium.liege",
      "travel.belgium.country",
    ]
  },
  CAN: {
    latlng: {
      lat: 46.825754,
      lng: -71.20849,
    },
    tooltip: [
      "travel.canada.montreal",
      "travel.canada.quebec",
      "travel.canada.sherbrooke",
      "travel.canada.tadoussac",
      "travel.canada.country",
    ]
  },
  ESP: {
    latlng: {
      lat: 40.463669,
      lng: -3.749220,
    },
    tooltip: [
      "travel.spain.barcelona",
      "travel.spain.palma",
      "travel.spain.country",
    ]
  },
  ITA: {
    latlng: {
      lat: 42.6384261,
      lng: 12.674297,
    },
    tooltip: [
      "travel.italy.roma",
      "travel.italy.naples",
      "travel.italy.pompei",
      "travel.italy.country",
    ]
  },
  GRC: {
    latlng: {
      lat: 38.9953683,
      lng: 21.9877132,
    },
    tooltip: [
      "travel.greece.athens",
      "travel.greece.corinth",
      "travel.greece.country",
    ]
  },
  USA: {
    latlng: {
      lat: 42.92121887207031,
      lng: -75.62081909179688,
    },
    tooltip:
      ["travel.us.ny",
        "travel.us.country"
      ]
  },
  IRL: {
    latlng: {
      lat: 52.865196,
      lng: -7.9794599,
    },
    tooltip: [
      "travel.uk.ireland",
      "travel.uk.country",
    ]
  },
  FRA: {
    latlng: {
      lat: 43.2961743,
      lng: 5.3699525,
    },
    tooltip: [
      "travel.fr.marseille",
      "travel.fr.country",
    ]
  },
  SWE: {
    latlng: {
      lat: 59.6749712,
      lng: 14.5208584,
    },
    tooltip: [
      "travel.sweden.stockholm",
      "travel.sweden.country",
    ]
  }
}


// List of position and tooltip for the cities Markers
export let cities: position[] = [
  {
    latlng: {
      lat: 48.13825988769531,
      lng: 11.584508895874023,
    },
    tooltip: "travel.germany.munich",
  },
  {
    latlng: {
      lat: 52.51763153076172,
      lng: 13.40965747833252,
    },
    tooltip: "travel.germany.berlin",
  },
  {
    // germany
    latlng: {
      lat: 53.56729507446289,
      lng: 9.941673278808594,
    },
    tooltip: "travel.germany.hamburg",
  },
  {
    // germany
    latlng: {
      lat: 51.960906982421875,
      lng: 7.628866195678711,
    },
    tooltip: "travel.germany.munster",
  },
  {
    // tchequie
    latlng: {
      lat: 50.05708312988281,
      lng: 14.44813060760498,
    },
    tooltip: "travel.tchequie.prague",
  },
  {
    // belgium
    latlng: {
      lat: 50.6451381,
      lng: 5.5734203,
    },
    tooltip: "travel.belgium.liege",
  },
  {
    // belgium
    latlng: {
      lat: 50.8436709,
      lng: 4.3674367,
    },
    tooltip: "travel.belgium.brussels",
  },
  {
    // canada
    latlng: {
      lat: 45.509063720703125,
      lng: -73.55335998535156,
    },
    tooltip: "travel.canada.montreal",
  },
  {
    // canada
    latlng: {
      lat: 46.825754,
      lng: -71.20849,
    },
    tooltip: "travel.canada.quebec",
  },
  {
    // canada
    latlng: {
      lat: 48.1433429,
      lng: -69.7174574,
    },
    tooltip: "travel.canada.tadoussac",
  },
  {
    // canada
    latlng: {
      lat: 45.40139389038086,
      lng: -71.89034271240234,

    },
    tooltip: "travel.canada.sherbrooke",
  },
  {
    // spain
    latlng: {
      lat: 39.61391960090061,
      lng: 2.9746341705322266,

    },
    tooltip: "travel.spain.palma",
  },
  {
    // spain
    latlng: {
      lat: 41.39219284057617,
      lng: 2.164867401123047,

    },
    tooltip: "travel.spain.barcelona",
  },
  {
    // italy
    latlng: {
      lat: 41.8892936706543,
      lng: 12.493546485900879,

    },
    tooltip: "travel.italy.roma",
  },
  {
    // italy
    latlng: {
      lat: 40.83998489379883,
      lng: 14.252542495727539,
    },
    tooltip: "travel.italy.naples",
  },
  {
    // italy
    latlng: {
      lat: 40.74886703491211,
      lng: 14.501250267028809,

    },
    tooltip: "travel.italy.pompei",
  },
  {
    // greece
    latlng: {
      lat: 37.99076843261719,
      lng: 23.74122428894043,
    },
    tooltip: "travel.greece.athens",
  },
  {
    // greece
    latlng: {
      lat: 37.938621520996094,
      lng: 22.92695426940918,

    },
    tooltip: "travel.greece.corinth",
  },
  {
    // us
    latlng: {
      lat: 42.92121887207031,
      lng: -75.62081909179688,
    },
    tooltip: "travel.us.ny",
  },
  {
    // uk
    latlng: {
      lat: 52.865196,
      lng: -7.9794599,

    },
    tooltip: "travel.uk.ireland",
  },
  {
    // fr
    latlng: {
      lat: 43.2961743,
      lng: 5.3699525,
    },
    tooltip: "travel.fr.marseille",
  },
  {
    // sweden
    latlng: {
      lat: 59.32796859741211,
      lng: 18.05364227294922,
    },
    tooltip: "travel.sweden.stockholm",
  },
];