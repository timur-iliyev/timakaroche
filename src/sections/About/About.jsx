import './About.scss'
import Section from '@/layouts/Section'
import Card from '@/components/Card'
import JsonViewer from '@/components/JsonViewer'
import Accordion from '@/components/Accordion'
import Typewriter from '@/components/Typewriter'

export default () => {
  return (
    <Section
      className="about"
      title="About me"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt velit libero eum animi aut"
    >
      <Typewriter
        tag="h2"
        text="I'm TimaKaroche"
      />
      <Accordion className="about__body" title="timakaroche.json">
        <Card className="about__card" layer={0}>
          <JsonViewer
            data={{
              whoAmI: {
                firstName: {
                  full: 'Timur',
                  short: 'Tima',
                },
                lastName: 'Iliyev',
                nickName: 'timakaroche',
              },
              role: 'Frontend Developer',
              readyForWork: true,
              config: {
                webMustBe: ['responsive', 'accessible', 'modern'],
              },
            }}
          />
        </Card>
      </Accordion>
    </Section>
  )
}
