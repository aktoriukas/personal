import React from 'react'

export default function About() {
    return (
        <div className="relative md:fixed px-8 py-10 md:w-2/5 md:px-24 md:py-32 h-screen bg-offwhite">
            <h1>Name</h1>
            <p>Something about</p>
            
            <div className="social-media text-charcle text-2xl pt-10 absolute bottom-24 left-25 w-1/2 grid grid-cols-4 h-20 text-center">

                <a className="pr-3" href="emai:gediminas@aktoriukas.com">
                    <i className="icon-protonmail"/>
                </a>
                <a className="pr-3" href="https://www.linkedin.com/in/strumila/">
                    <i className="icon-linkedin"/>
                </a>
                <a className="pr-3" href="https://github.com/aktoriukas">
                    <i className="icon-github"/>
                </a>
                <a href="https://www.instagram.com/aktoriukas/">
                    <i className="icon-instagram"/>
                </a>
            </div>
        </div>
    )
}
