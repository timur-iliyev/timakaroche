import './Projects.scss'
import Section from '@/layouts/Section'
import projectsItems from './projectsItems'
import ProjectCard from '@/sections/Projects/components/ProjectCard'

export default () => {
  return (
    <Section
      className="projects"
      title="Projects"
      description="Here's what I've built"
    >
      <ul className="projects__list">
        {projectsItems.map((project) => {
          return (
            <li className="projects__item">
              <ProjectCard
                name={project.name}
                description={project.description}
                images={project.images}
                stack={project.stack}
                links={project.links}
              />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
