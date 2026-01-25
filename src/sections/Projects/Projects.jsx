import './Projects.scss'
import Section from '@/layouts/Section'
import projectsItems from './projectsItems'
import ProjectCard from '@/components/ProjectCard'

export default () => {
  return (
    <Section className="projects" title="Projects">
      <ul className="projects__list">
        {projectsItems.map((project) => {
          return (
            <li className="projects__item">
              <ProjectCard
                name={project.name}
                description={project.description}
                url={project.url}
                images={project.images}
                stack={project.stack}
              />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
