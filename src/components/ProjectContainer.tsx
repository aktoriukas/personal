import React from "react"
import Project from "./Project"

import { projects } from "../data/projects"

export default function ProjectContainer() {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.nr} project={project} />
      ))}
    </div>
  )
}
