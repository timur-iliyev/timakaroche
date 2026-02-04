import './About.scss'
import Section from '@/layouts/Section'
import Tabs from '@/components/Tabs'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import Button from '@/components/Button'
import getIdFromString from '@/utils/getIdFromString'
import skillGroups from './skillGroups'
import SkillList from './components/SkillList'

export default () => {
  const title = 'About me'
  const titleId = getIdFromString(title)
  const tabsNavigationId = 'about-tabs-navigation'

  const [hardSkills, softSkills] = skillGroups

  const tabsItemsWithChildren = skillGroups.map((skillGroup) => ({
    ...skillGroup,
    children: <SkillList skills={skillGroup.skills} />,
  }))

  return (
    <Section
      className="about"
      title={title}
      titleId={titleId}
      description="My name is Timur Iliyev and here's my approach to development"
      actions={
        <TabsNavigation
          className="about-tabs__navigation visible-tablet"
          id={tabsNavigationId}
          titleId={titleId}
          items={skillGroups}
        />
      }
    >
      <div className="about-split hidden-tablet">
        <div className="about__side about__side--left">
          <h3 className="about__side-title">{hardSkills.title}</h3>
          <SkillList skills={hardSkills.skills} />
        </div>

        <div className="about__divider"></div>

        <div className="about__side about__side--right">
          <h3 className="about__side-title">{softSkills.title}</h3>
          <SkillList skills={softSkills.skills} />
        </div>
      </div>

      <Tabs
        className="about-tabs visible-tablet"
        navigationTargetElementId={tabsNavigationId}
        items={tabsItemsWithChildren}
      />

      <footer className="about__footer">
        <Button
          className="about__button"
          label="Download CV"
          href="https://www.linkedin.com/in/timur-iliyev/"
          mode="accent"
        />
      </footer>
    </Section>
  )
}
