import React from "react"

export default function About() {
  return (
    <div className="relative md:fixed px-8 py-10 md:w-2/5 lg:px-24 md:py-32 h-screen bg-offwhite z-50 ">
      <div className="h-full flex flex-col justify-end pb-36 md:pb-16 about-content md:max-w-2xl">
        <div className="about-title">
          {/* <h1>Web</h1> */}
          <p className="text-xl font-extralight about-sub-text">Hi, my name is </p>
          <h1 className="mt-4 uppercase text-4xl font-bold">Gediminas.</h1>
          {/* <h1>Creator</h1> */}
          <p className="mt-4 text-xl font-extralight about-sub-text">
            I'm developer who's passionate about building digital solutions that can improve lives for those who use them.
          </p>
        </div>
      </div>

      <div className="social-media text-charcle text-2xl pt-10 absolute bottom-28 left-7 md:left-20 w-1/2 grid grid-cols-4 h-20 text-left pl-3">
        <a target="_blank" className="pr-3" href="emai:gediminas@aktoriukas.com">
          <i className="icon-protonmail" />
        </a>
        <a target="_blank" className="pr-3" href="https://www.linkedin.com/in/strumila/">
          <i className="icon-linkedin" />
        </a>
        <a target="_blank" className="pr-3" href="https://github.com/aktoriukas">
          <i className="icon-github" />
        </a>
        <a target="_blank" href="https://www.instagram.com/aktoriukas/">
          <i className="icon-instagram" />
        </a>
      </div>
    </div>
  )
}
