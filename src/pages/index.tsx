import React from "react"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import About from "../components/About"
import ProjectContainer from "../components/ProjectContainer"
import { Helmet } from "react-helmet"
import OtherProjects from "../components/OtherProjects"
import icon from "../images/code.png"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Gediminas Strumila</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href={icon} />
        {/* <link href={icon} rel="shortcut icon" type="image/x-icon"></link> */}
      </Helmet>

      <main className="w-full">
        <About />

        <div className="md:w-3/5 ml-auto ">
          <ProjectContainer />

          <OtherProjects />

          <Carousel />

          <Footer />
        </div>
      </main>
    </>
  )
}

export default IndexPage
