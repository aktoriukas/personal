import { imageType } from "../components/Image"
import digitalLabs from "../images/digital-labs.png"

export interface projectType {
  nr: string
  title: string
  bgColor: string
  image: {
    mobile: imageType
    desktop: imageType
  }
  stack: string[]
  dark: boolean
  link: linkType | null
}

type linkType = {
  title: string
  link: string
}

export const projects: projectType[] = [
  {
    nr: "01",
    title: "Hashy",
    bgColor: "#221E22",
    image: {
      mobile: "hashyMobile",
      desktop: "hashyDesktop",
    },
    stack: ["gatsby", "typescript", "react", "tailwind"],
    dark: true,
    link: {
      title: "hash.aktoriukas.com",
      link: "https://hash.aktoriukas.com/",
    },
  },
  {
    nr: "02",
    title: "Pure Cremation",
    bgColor: "#702D90",
    image: {
      mobile: "cremationMobile",
      desktop: "cremationDesktop",
    },
    stack: ["jQuery", "bootstrap", "laravel", "mysql"],
    dark: true,
    link: null,
  },
  {
    nr: "03",
    title: "Policy Expert",
    bgColor: "#AA4465",
    image: {
      mobile: "policyMobile",
      desktop: "policyDesktop",
    },
    stack: ["react", "gatsby", "typescript", "tailwind"],
    dark: true,
    link: {
      title: "www.policyexpert.com",
      link: "https://www.policyexpert.co.uk/",
    },
  },
  {
    nr: "04",
    title: "Reviti",
    bgColor: "#258351",
    image: {
      mobile: "revitiMobile",
      desktop: "revitiDesktop",
    },
    stack: ["react", "gatsby", "typescript", "tailwind", "azure", "mongoDb", "rest API"],
    dark: true,
    link: null,
  },
  {
    nr: "05",
    title: "Invest Guide Africa",
    bgColor: "#2F97C1",
    image: {
      mobile: "investMobile",
      desktop: "investDesktop",
    },
    stack: ["drupal", "sass"],
    dark: true,
    link: {
      title: "www.investguideafrica.com",
      link: "https://www.investguideafrica.com/",
    },
  },
]

export interface supportProjectsType {
  nr: string
  title: string
  color: string
  link: string
  dark: boolean
  img?: any
}

export const supportProjects: supportProjectsType[] = [
  {
    nr: "003",
    title: "Wirebox",
    color: "#092948",
    link: "https://www.wirebox.co.uk",
    dark: true,
  },
  {
    nr: "004",
    title: "Good Caesar",
    color: "#D4B000",
    link: "https://www.goodcaesar.com",
    dark: false,
  },
  {
    nr: "005",
    title: "Digital Labs",
    color: "#030303",
    link: "https://www.digital-labs.co.uk",
    dark: true,
    img: digitalLabs,
  },
]
