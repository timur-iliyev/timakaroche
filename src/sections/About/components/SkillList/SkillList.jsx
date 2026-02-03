import './SkillList.scss'

export default (props) => {
  const { skills = [] } = props

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li className="skill-list__item">
          <div className="skill-list__skill">
            <h4 className="skill-list__skill-title">{skill.title}</h4>
            <p className="skill-list__skill-description">
              {skill.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
