import React from 'react'
import { projectType } from '../data/projects'
import ImageComponent from './Image'
import { isMobile } from "react-device-detect";

interface Props {
    project: projectType
}

export default function Project({ project }:Props) {

    const { title, image, dark, stack } = project
    
    return (
        <div 
            style={{backgroundColor: project.bgColor}} 
            className={`min-h-screen flex flex-col justify-between`}>

            <span/>

            <div className="max-w-full">
                <ImageComponent 
                    imageName={isMobile ? image.mobile : image.desktop} 
                />
            </div>

            <div className="about-project px-8 pb-10 md:px-24 md:pb-32">
                <h2 className={`text-3xl ${dark ? 'text-offwhite' : ''}`}>{title}</h2>

                <div className="stack flex flex-wrap">
                    {stack.map(item => (
                        <span
                            key={item} 
                            className={`text-xs pr-2 ${dark ? 'text-offwhite' : 'text-charcle'}`}>{item}</span>
                    ))}
                </div>

            </div>


        </div>
    )
}
