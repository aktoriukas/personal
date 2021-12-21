import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
    imageName: imageType;
}
export type imageType = 
    'investMobile' |
    'investDesktop' |
    'policyMobile' |
    'policyDesktop' |
    'revitiMobile' |
    'revitiDesktop' |
    'cremationDesktop' |
    'cremationMobile';

export default function ImageComponent({ imageName }:Props) {

    const headerImages = useStaticQuery(graphql`

        query headerImages {
            cremationMobile: imageSharp(fluid: { originalName: { eq: "cremation-mobile.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            cremationDesktop: imageSharp(fluid: { originalName: { eq: "cremation-desktop.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            investMobile: imageSharp(fluid: { originalName: { eq: "invest-mobile.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            investDesktop: imageSharp(fluid: { originalName: { eq: "invest-desktop.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            policyMobile: imageSharp(fluid: { originalName: { eq: "policyexperts-mobile.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            policyDesktop: imageSharp(fluid: { originalName: { eq: "policyexperts-desktop.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            revitiMobile: imageSharp(fluid: { originalName: { eq: "reviti-mobile.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
            revitiDesktop: imageSharp(fluid: { originalName: { eq: "reviti-desktop.png" } }) {
                gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                )
            }
        }
    `);

    return (
        <GatsbyImage
            image={headerImages[imageName].gatsbyImageData}
            alt="Gatsby Docs are awesome"
            className="m-auto"
        />
    )
}
