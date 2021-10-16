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
    'revitiDesktop'

export default function ImageComponent({ imageName }:Props) {

    const headerImages = useStaticQuery(graphql`

        query headerImages {
            investMobile: imageSharp(fluid: { originalName: { eq: "invest-mobile.png" } }) {
                gatsbyImageData(
                quality: 70
                )
            }
            investDesktop: imageSharp(fluid: { originalName: { eq: "invest-desktop.png" } }) {
                gatsbyImageData(
                quality: 70
                )
            }
            policyMobile: imageSharp(fluid: { originalName: { eq: "policyexperts-mobile.png" } }) {
                gatsbyImageData(
                quality: 70
                )
            }
            policyDesktop: imageSharp(fluid: { originalName: { eq: "policyexperts-desktop.png" } }) {
                gatsbyImageData(
                quality: 70
                )
            }
            revitiMobile: imageSharp(fluid: { originalName: { eq: "reviti-mobile.png" } }) {
                gatsbyImageData(
                quality: 70
                )
            }
            revitiDesktop: imageSharp(fluid: { originalName: { eq: "reviti-desktop.png" } }) {
                gatsbyImageData(
                quality: 70
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
