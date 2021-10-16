import { imageType } from "../components/Image";

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
        dark: true
    },
    {
        nr: '02',
        title: "Reviti",
        bgColor: '#AEFFD8',
        image: {
            mobile: "revitiMobile",
            desktop: "revitiDesktop"
        },
        stack:[
            'typescript', 'tailwind', 'npm', 'gatsby', 'express', 'azure', 'axios', 'mongoDb'
        ],
        dark: false
    },
    {
        nr: '03',
        title: "Invest Guide Africa",
        bgColor: '#1B9AAA',
        image: {
            mobile: "investMobile",
            desktop: "investDesktop"
        },
        stack:[
            'sass', 'php'
        ],
        dark: true
    }
];
