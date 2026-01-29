import './Tabs.scss'
import clsx from 'clsx'
import TabsNavigation from './components/TabsNavigation/TabsNavigation'
import getTabsElementsIdsFromButtonLabel from './utils/getTabsElementsIdsFromButtonLabel'

export default (props) => {
  const {
    className,
    /**
     * [
     *   {
     *     title: string,
     *     buttonLabel: string,
     *     isActive: boolean,
     *     children: ...
     *   },
     * ]
     */
    items = [],
    navigationTargetElementId = null,
    titleId,
  } = props

  return (
    <div
      className={clsx(className, 'tabs')}
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && (
        <div>
          <TabsNavigation items={items} titleId={titleId} />
        </div>
      )}

      <div className="tabs__body">
        {items.map((item) => {
          const {
            buttonLabel,
            title: tabTitle,
            isActive,
            children,
          } = item

          const { buttonId, contentId, headingId } =
            getTabsElementsIdsFromButtonLabel(buttonLabel)

          return (
            <div
              id={contentId}
              aria-labelledby={`${buttonId} ${headingId}`}
              className={clsx('tabs__tab', isActive && 'is-active')}
              aria-hidden={!isActive}
              data-js-tabs-content=""
            >
              <h3 className="tabs__tab-title " id={headingId}>
                {tabTitle}
              </h3>
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}
