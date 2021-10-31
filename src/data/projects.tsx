import { imageType } from "../components/Image";
import digitalLabs from '../images/digital-labs.png'

export interface projectType {
    nr: string;
    title: string;
    bgColor: string
    image: {
        mobile: imageType
        desktop: imageType
    },
    stack: string[]
    dark: boolean
    link: string
}

export const projects:projectType[] = [
    {
        nr: '01',
        title: "Policy Expert",
        bgColor: '#AA4465',
        image: {
            mobile: "policyMobile",
            desktop: "policyDesktop"
        },
        stack:[
            'typescript', 'tailwind', 'npm', 'gatsby'
        ],
        dark: true,
        link: "https://www.policyexpert.co.uk/"
    },
    {
        nr: '02',
        title: "Reviti",
        bgColor: '#258351',
        image: {
            mobile: "revitiMobile",
            desktop: "revitiDesktop"
        },
        stack:[
            'typescript', 'tailwind', 'npm', 'gatsby', 'express', 'azure', 'axios', 'mongoDb', 'azure'
        ],
        dark: true,
        link: "https://revitilife.com/"
    },
    {
        nr: '03',
        title: "Invest Guide Africa",
        bgColor: '#2F97C1',
        image: {
            mobile: "investMobile",
            desktop: "investDesktop"
        },
        stack:[
            'sass', 'php', 'git'
        ],
        dark: true,
        link: "https://investmentguide.africa"
    }
];

export interface supportProjectsType {
    nr: string;
    title: string;
    color: string
    link: string;
    dark: boolean
    img ?: any,
}

export const supportProjects:supportProjectsType[] = [
    // {
    //     nr: '001',
    //     title: "Islamic Development Bank",
    //     color: '#EAF8E8',
    //     link: 'https://www.isdb.org/',
    //     dark: false
    // },
    // {
    //     nr: '002',
    //     title: "On The Edge",
    //     color: '#508330',
    //     link: 'https://www.ontheedge.org',
    //     dark: true
    // },
    {
        nr: '003',
        title: "Wirebox",
        color: '#092948',
        link: 'https://www.wirebox.co.uk',
        dark: true
    },
    {
        nr: '004',
        title: "Good Caesar",
        color: '#D4B000',
        link: 'https://www.goodcaesar.com',
        dark: false,
    },
    {
        nr: '005',
        title: "Digital Labs",
        color: '#030303',
        link: 'https://www.digitallabs.co.uk',
        dark: true,
        img: digitalLabs
    }
]
