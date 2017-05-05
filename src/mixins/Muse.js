import 'muse-components/styles/base.less'
import muPaper from 'muse-components/paper'
import muAppbar from 'muse-components/appbar'
import muBottomNav from 'muse-components/bottomNav/bottomNav'
import muBottomNavItem from 'muse-components/bottomNav/bottomNavItem'
import muFlexbox from 'muse-components/flexbox/flexbox'
import muFlexboxItem from 'muse-components/flexbox/flexboxItem'
import muFlatButton from 'muse-components/flatButton'
import muFloatButton from 'muse-components/floatButton'
import muRaisedButton from 'muse-components/raisedButton'
import muTextField from 'muse-components/textField'
import muAvatar from 'muse-components/avatar'
import muIcon from 'muse-components/icon'
import muTabs from 'muse-components/tabs/tabs'
import muTab from 'muse-components/tabs/tab'
import muDivider from 'muse-components/divider'
import muList from 'muse-components/list/list'
import muListItem from 'muse-components/list/listItem'
import muStepper from 'muse-components/stepper/stepper'
import muStep from 'muse-components/stepper/step'
import muStepContent from 'muse-components/stepper/stepContent'
import muStepLabel from 'muse-components/stepper/stepLabel'

let Muse = {}

Muse.install = function (Vue, options) {
  Vue.component(muPaper.name, muPaper)
  Vue.component(muAppbar.name, muAppbar)
  Vue.component(muBottomNav.name, muBottomNav)
  Vue.component(muBottomNavItem.name, muBottomNavItem)
  Vue.component(muFlexbox.name, muFlexbox)
  Vue.component(muFlexboxItem.name, muFlexboxItem)
  Vue.component(muFlatButton.name, muFlatButton)
  Vue.component(muFloatButton.name, muFloatButton)
  Vue.component(muRaisedButton.name, muRaisedButton)
  Vue.component(muTextField.name, muTextField)
  Vue.component(muAvatar.name, muAvatar)
  Vue.component(muIcon.name, muIcon)
  Vue.component(muTabs.name, muTabs)
  Vue.component(muTab.name, muTab)
  Vue.component(muDivider.name, muDivider)
  Vue.component(muList.name, muList)
  Vue.component(muListItem.name, muListItem)
  Vue.component(muStepper.name, muStepper)
  Vue.component(muStepLabel.name, muStepLabel)
  Vue.component(muStepContent.name, muStepContent)
  Vue.component(muStep.name, muStep)
}

export default Muse
