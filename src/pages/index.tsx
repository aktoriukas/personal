import React, { lazy, Suspense } from "react"
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Loading from "../components/Loading"
const About = lazy(() => import('../components/About'));
const ProjectContainer = lazy(() => import('../components/ProjectContainer'));
import { Helmet } from "react-helmet";
import icon from '../images/icon.png'

// markup
const IndexPage = () => {
  return (

    <>
      <Helmet>
        <title>My Awesome Website</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet"></link>
        <link href={icon} rel="shortcut icon" type="image/x-icon"></link>
      </Helmet>
    
      <main className="w-full">

        <Suspense fallback={<Loading />}>

          <About />

          <div className="md:w-3/5 ml-auto ">

            <ProjectContainer />

            <Carousel />

            <Footer />

          </div>

        </Suspense>

      </main>
    </>
  )
}

export default IndexPage