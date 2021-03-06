import React from "react"

export default function Carousel() {
  const stack = [
    "yarn",
    "wordpress",
    "vuedotjs",
    "visualstudiocode",
    "ubuntu",
    "typescript",
    "tailwindcss",
    "styledcomponents",
    "sass",
    "react",
    "php",
    "npm",
    "nodedotjs",
    "mysql",
    "mongodb",
    "microsoftazure",
    "laravel",
    "javascript",
    "html5",
    "githubactions",
    "gatsby",
    "figma",
    "express",
    "bitbucket",
    "azurefunctions",
    "awsamplify",
    "asana",
    "apache",
    "amazonaws",
    "adobephotoshop",
    "adobeindesign",
    "github",
  ]

  return (
    <div className="slider bg-charcle">
      <div className="slide-track">
        {stack.map((item) => {
          return (
            <div key={item} className="slide">
              <i className={`icon-${item} text-offwhite`} />
            </div>
          )
        })}
        {stack.map((item) => {
          return (
            <div key={`2-${item}`} className="slide">
              <i className={`icon-${item} text-offwhite`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
