import React from "react"
import { projectType } from "../data/projects"
import ImageComponent from "./Image"
import { isMobile } from "react-device-detect"

interface Props {
  project: projectType
}

export default function Project({ project }: Props) {
  const { title, image, dark, stack, link } = project

  return (
    <div
      style={{ backgroundColor: project.bgColor }}
      className={`min-h-screen flex flex-col justify-between`}
    >
      <span />

      <div className="max-w-full">
        <div className="lg:hidden">
          <ImageComponent imageName={image.mobile} />
        </div>
        <div className="hidden lg:block">
          <ImageComponent imageName={image.desktop} />
        </div>
      </div>

      <div className="about-project px-8 pb-10 md:px-24 md:pb-32 max-w-4xl relative">
        <div className="flex items-center">
          <svg
            id="Layer_1"
            enableBackground="new 0 0 510.057 510.057"
            height="25"
            fill={dark ? "#FAFAFA" : "#4A4A4A"}
            viewBox="0 0 510.057 510.057"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 pop-up"
          >
            <path d="m435.311 74.688c-48.163-48.164-112.198-74.688-180.311-74.688-140.929 0-255 114.049-255 255 0 68.113 26.524 132.149 74.688 180.312 99.651 99.653 260.956 99.668 360.623 0 99.654-99.651 99.67-260.957 0-360.624zm-6.826 323.435c-15.427-14.351-32.426-26.635-50.816-36.723 6.61-27.974 10.653-58.778 11.606-91.4h90.213c-3.207 48.48-21.822 92.815-51.003 128.123zm-397.973-128.123h90.213c.953 32.622 4.996 63.426 11.606 91.399-18.391 10.089-35.39 22.372-50.816 36.724-29.181-35.308-47.796-79.643-51.003-128.123zm209.488 207.434c-20.457-6.936-40.3-27.736-56.073-59.414-6.185-12.421-11.568-26.05-16.107-40.623 22.697-9.528 46.999-15.263 72.18-16.895zm30-116.932c25.182 1.632 49.482 7.366 72.18 16.895-4.539 14.573-9.922 28.202-16.106 40.623-15.774 31.677-35.617 52.478-56.074 59.414zm79.855-12.256c-25.529-10.25-52.299-16.215-79.855-17.8v-60.446h89.259c-.858 27.363-4.054 53.765-9.404 78.246zm-79.855-108.246v-75.451c26.498-1.535 52.276-7.124 76.586-16.47 7.319 28.207 11.652 59.381 12.673 91.921zm0-105.504v-101.93c20.457 6.936 40.3 27.737 56.073 59.414 4.267 8.569 8.146 17.718 11.638 27.348-21.467 8.479-44.26 13.627-67.711 15.168zm60.845-91.328c25.228 9.06 48.378 22.503 68.536 39.411-10.788 9.047-22.309 16.987-34.408 23.783-9.25-24.818-20.808-46.224-34.128-63.194zm-146.918 48.813c15.773-31.678 35.616-52.479 56.073-59.415v101.93c-23.451-1.541-46.244-6.689-67.711-15.168 3.49-9.63 7.371-18.779 11.638-27.347zm-38.9 14.381c-12.1-6.795-23.621-14.736-34.408-23.783 20.157-16.908 43.309-30.352 68.536-39.411-13.32 16.97-24.878 38.376-34.128 63.194zm94.973 58.187v75.451h-89.26c1.02-32.54 5.355-63.714 12.674-91.921 24.311 9.346 50.089 14.935 76.586 16.47zm0 105.451v60.446c-27.556 1.585-54.325 7.55-79.855 17.799-5.35-24.48-8.546-50.882-9.404-78.245zm-99.356 121.061c9.874 30.194 22.992 55.999 38.512 75.772-28.853-10.361-54.988-26.458-77.035-46.911 11.92-11.083 24.82-20.74 38.523-28.861zm228.712-.001c13.702 8.122 26.602 17.779 38.523 28.861-22.048 20.453-48.184 36.55-77.035 46.911 15.52-19.772 28.639-45.577 38.512-75.772zm110.132-151.06h-90.213c-1.105-37.821-6.371-73.191-14.966-104.549 16.625-8.819 32.328-19.531 46.835-32.017 33.381 36.56 54.876 84.138 58.344 136.566zm-390.633-136.566c14.507 12.486 30.21 23.198 46.835 32.017-8.595 31.358-13.86 66.729-14.966 104.549h-90.212c3.468-52.428 24.963-100.006 58.343-136.566z" />
          </svg>
          <h2 className={`text-3xl md:text-5xl slide-left ${dark ? "text-offwhite" : ""}`}>
            {title}
          </h2>
        </div>

        <span
          style={{ height: "1px" }}
          className="w-24 md:w-36 bg-offwhite mb-2 ml-1 block slide-right"
        />

        <div className="stack flex flex-wrap slide-left ml-1">
          {stack.map((item) => (
            <span
              key={item}
              className={`text-xs md:text-sm pr-2 ${dark ? "text-offwhite" : "text-charcle"}`}
            >
              {item}
            </span>
          ))}
        </div>
        {link && (
          <div
            className={`pt-4 slide-left ${dark ? "text-white" : "text-charcle"} text-opacity-60`}
          >
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="ml-auto">
              {link.title}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
