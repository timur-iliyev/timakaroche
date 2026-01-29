import './About.scss'
import Section from '@/layouts/Section'
import Tabs from '@/components/Tabs'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import Button from '@/components/Button'
import getIdFromString from '@/utils/getIdFromString'

export default () => {
  const title = 'About me'
  const titleId = getIdFromString(title)
  const tabsNavigationId = 'about-tabs-navigation'

  const tabsItems = [
    {
      title: 'Hard Skills',
      buttonLabel: 'Hard Skills',
      isActive: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis consectetur incidunt fugiat nulla quaerat sequi magni! Voluptates vero quae eos aperiam labore quibusdam corporis blanditiis culpa ratione qui. Nesciunt quibusdam minus tenetur nulla nemo facere natus! Consequatur ipsum saepe repudiandae vitae distinctio mollitia numquam, magni reprehenderit atque dolorum. Beatae voluptate cum necessitatibus, voluptatum corporis nam id laboriosam eligendi minus sint accusantium optio illum quaerat vitae ipsa, amet repellat, ratione perspiciatis odit eos quia officiis dolorem doloremque dolor. At laudantium deleniti tempora rem vero nihil quidem aperiam dolore aspernatur laborum. Assumenda aliquam sunt porro a explicabo nemo libero, sit dolor laudantium nisi similique! Molestiae similique cumque ab perferendis commodi officia error inventore. Dolorem odit quod pariatur cumque accusantium unde ab libero rerum est distinctio. Quod laudantium quia itaque odit tempore expedita magni accusamus cupiditate. Qui itaque quisquam eaque aspernatur minus voluptatibus blanditiis tempora magnam dolorem eos, sequi unde nesciunt molestias ipsum quam similique eligendi, atque accusamus dolorum? Inventore porro totam voluptatum veritatis repellat id blanditiis commodi, natus quam, cupiditate recusandae quidem reiciendis fugiat labore odio non. Sed beatae quas incidunt nemo, accusantium vel nobis unde corporis nisi est dolore iste deleniti necessitatibus, dolores error earum fugit, quidem libero aliquid. Deleniti veritatis maxime illo fugit neque ipsa laudantium natus voluptatem blanditiis nihil sit reiciendis labore corrupti impedit, eligendi ea voluptates veniam accusamus iure asperiores sint similique expedita debitis. Ipsum facilis minus dolorem eius quos accusantium dolore, nisi laborum error vero voluptatum assumenda corporis velit adipisci fugit quam vel quidem quasi corrupti fuga officia cumque? Dolorum maiores quod labore tenetur quidem culpa, voluptates officiis natus magni cupiditate atque aliquid quas numquam nisi, beatae sunt ex ipsum dignissimos eos voluptate optio totam asperiores praesentium? Cum minima voluptatum beatae consequatur odio molestias, ea officiis, nulla pariatur sunt reprehenderit eveniet incidunt ratione. Dolores, libero nemo!',
    },
    {
      title: 'Soft Skills',
      buttonLabel: 'Soft Skills',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, dolore neque sapiente ratione nobis laboriosam recusandae incidunt quo accusantium facilis! Maxime, iste aut distinctio odit iusto at sequi ea. Similique exercitationem id mollitia ad qui adipisci quidem vitae doloribus iure illo deleniti accusamus maxime excepturi est tempore aliquid fugiat distinctio ratione, temporibus necessitatibus placeat. Quos sint deserunt vero modi dolorem et aut! Cum pariatur, dicta necessitatibus excepturi consequuntur numquam amet voluptatibus totam asperiores exercitationem rerum eos quos nisi maiores sequi saepe, architecto est error odit reiciendis natus quae consequatur inventore dolorem. Assumenda, labore hic! Laborum praesentium dolorum et pariatur, eaque ab nostrum dignissimos quae rerum repudiandae doloremque, obcaecati ducimus. Consequuntur deserunt, ut quae alias dicta quis soluta deleniti dolorem fugit id neque obcaecati fuga nam perspiciatis architecto quo? Quae quam facere est consequatur dolor amet dignissimos voluptates exercitationem excepturi, reprehenderit nulla ducimus fugiat ratione ipsam tempore accusamus provident porro natus ea itaque quas voluptate veritatis placeat. Itaque, aliquid esse pariatur fugit tempora consequuntur doloribus aperiam est! Esse ipsam pariatur corrupti voluptatem architecto aliquid voluptates dolorum eligendi possimus? Odio dicta neque harum numquam eum nihil doloribus ex. Repellat similique officiis id cumque consequuntur magnam, quas sint nostrum veritatis voluptatum soluta numquam explicabo hic asperiores molestiae rem? Repellat, in consectetur, saepe aut voluptatem blanditiis reiciendis, vitae quos quis quod neque. Rem voluptatum ut quas nemo earum perferendis numquam atque voluptates saepe repudiandae, dicta quos voluptatem nostrum corporis deserunt accusamus. Explicabo consequatur incidunt, praesentium deleniti necessitatibus magni eum iure, est ut itaque ratione dicta neque? Odio odit voluptatem a, fugit minima fugiat magni!',
    },
  ]

  return (
    <Section
      className="about"
      title={title}
      titleId={titleId}
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt velit libero eum animi aut"
      actions={
        <TabsNavigation
          className="about-tabs__navigation visible-tablet"
          id={tabsNavigationId}
          titleId={titleId}
          items={tabsItems}
        />
      }
    >
      <div className="about-split hidden-tablet" data-js-split="">
        <div
          className="about__side about__side--left"
          data-js-split-left=""
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias veritatis consectetur incidunt fugiat nulla
          quaerat sequi magni! Voluptates vero quae eos aperiam labore
          quibusdam corporis blanditiis culpa ratione qui. Nesciunt
          quibusdam minus tenetur nulla nemo facere natus! Consequatur
          ipsum saepe repudiandae vitae distinctio mollitia numquam,
          magni reprehenderit atque dolorum. Beatae voluptate cum
          necessitatibus, voluptatum corporis nam id laboriosam
          eligendi minus sint accusantium optio illum quaerat vitae
          ipsa, amet repellat, ratione perspiciatis odit eos quia
          officiis dolorem doloremque dolor. At laudantium deleniti
          tempora rem vero nihil quidem aperiam dolore aspernatur
          laborum. Assumenda aliquam sunt porro a explicabo nemo
          libero, sit dolor laudantium nisi similique! Molestiae
          similique cumque ab perferendis commodi officia error
          inventore. Dolorem odit quod pariatur cumque accusantium
          unde ab libero rerum est distinctio. Quod laudantium quia
          itaque odit tempore expedita magni accusamus cupiditate. Qui
          itaque quisquam eaque aspernatur minus voluptatibus
          blanditiis tempora magnam dolorem eos, sequi unde nesciunt
          molestias ipsum quam similique eligendi, atque accusamus
          dolorum? Inventore porro totam voluptatum veritatis repellat
          id blanditiis commodi, natus quam, cupiditate recusandae
          quidem reiciendis fugiat labore odio non. Sed beatae quas
          incidunt nemo, accusantium vel nobis unde corporis nisi est
          dolore iste deleniti necessitatibus, dolores error earum
          fugit, quidem libero aliquid. Deleniti veritatis maxime illo
          fugit neque ipsa laudantium natus voluptatem blanditiis
          nihil sit reiciendis labore corrupti impedit, eligendi ea
          voluptates veniam accusamus iure asperiores sint similique
          expedita debitis. Ipsum facilis minus dolorem eius quos
          accusantium dolore, nisi laborum error vero voluptatum
          assumenda corporis velit adipisci fugit quam vel quidem
          quasi corrupti fuga officia cumque? Dolorum maiores quod
          labore tenetur quidem culpa, voluptates officiis natus magni
          cupiditate atque aliquid quas numquam nisi, beatae sunt ex
          ipsum dignissimos eos voluptate optio totam asperiores
          praesentium? Cum minima voluptatum beatae consequatur odio
          molestias, ea officiis, nulla pariatur sunt reprehenderit
          eveniet incidunt ratione. Dolores, libero nemo!
        </div>

        <div
          className="about__divider"
          data-js-split-divider=""
        ></div>

        <div
          className="about__side about__side--right"
          data-js-split-right=""
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Magni, dolore neque sapiente ratione nobis laboriosam
          recusandae incidunt quo accusantium facilis! Maxime, iste
          aut distinctio odit iusto at sequi ea. Similique
          exercitationem id mollitia ad qui adipisci quidem vitae
          doloribus iure illo deleniti accusamus maxime excepturi est
          tempore aliquid fugiat distinctio ratione, temporibus
          necessitatibus placeat. Quos sint deserunt vero modi dolorem
          et aut! Cum pariatur, dicta necessitatibus excepturi
          consequuntur numquam amet voluptatibus totam asperiores
          exercitationem rerum eos quos nisi maiores sequi saepe,
          architecto est error odit reiciendis natus quae consequatur
          inventore dolorem. Assumenda, labore hic! Laborum
          praesentium dolorum et pariatur, eaque ab nostrum
          dignissimos quae rerum repudiandae doloremque, obcaecati
          ducimus. Consequuntur deserunt, ut quae alias dicta quis
          soluta deleniti dolorem fugit id neque obcaecati fuga nam
          perspiciatis architecto quo? Quae quam facere est
          consequatur dolor amet dignissimos voluptates exercitationem
          excepturi, reprehenderit nulla ducimus fugiat ratione ipsam
          tempore accusamus provident porro natus ea itaque quas
          voluptate veritatis placeat. Itaque, aliquid esse pariatur
          fugit tempora consequuntur doloribus aperiam est! Esse ipsam
          pariatur corrupti voluptatem architecto aliquid voluptates
          dolorum eligendi possimus? Odio dicta neque harum numquam
          eum nihil doloribus ex. Repellat similique officiis id
          cumque consequuntur magnam, quas sint nostrum veritatis
          voluptatum soluta numquam explicabo hic asperiores molestiae
          rem? Repellat, in consectetur, saepe aut voluptatem
          blanditiis reiciendis, vitae quos quis quod neque. Rem
          voluptatum ut quas nemo earum perferendis numquam atque
          voluptates saepe repudiandae, dicta quos voluptatem nostrum
          corporis deserunt accusamus. Explicabo consequatur incidunt,
          praesentium deleniti necessitatibus magni eum iure, est ut
          itaque ratione dicta neque? Odio odit voluptatem a, fugit
          minima fugiat magni!
        </div>
      </div>
      <Tabs
        className="about-tabs visible-tablet"
        navigationTargetElementId={tabsNavigationId}
        items={tabsItems.map((item) => ({
          ...item,
          children: (
            <>
              <p>{item.description}</p>
            </>
          ),
        }))}
      />
      <div className="about__footer">
        <Button
          className="about__button"
          label="Download CV"
          mode="accent"
        />
      </div>
    </Section>
  )
}
