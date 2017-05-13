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
import muSelectField from 'muse-components/selectField'
import muAvatar from 'muse-components/avatar'
import muIcon from 'muse-components/icon'
import muDialog from 'muse-components/dialog'
import muTabs from 'muse-components/tabs/tabs'
import muTab from 'muse-components/tabs/tab'
import muDivider from 'muse-components/divider'
import muList from 'muse-components/list/list'
import muListItem from 'muse-components/list/listItem'
import muStepper from 'muse-components/stepper/stepper'
import muStep from 'muse-components/stepper/step'
import muStepContent from 'muse-components/stepper/stepContent'
import muStepLabel from 'muse-components/stepper/stepLabel'
import muMenuItem from 'muse-components/menu/menuItem'
import muSlider from 'muse-components/slider'
import muIconButton from 'muse-components/iconButton'
import muTable from 'muse-components/table/table'
import muThead from 'muse-components/table/thead'
import muTbody from 'muse-components/table/tbody'
import muTfoot from 'muse-components/table/tfoot'
import muTh from 'muse-components/table/th'
import muTd from 'muse-components/table/td'
import muTr from 'muse-components/table/tr'
import muRadio from 'muse-components/radio'

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
  Vue.component(muSelectField.name, muSelectField)
  Vue.component(muAvatar.name, muAvatar)
  Vue.component(muIcon.name, muIcon)
  Vue.component(muIconButton.name, muIconButton)
  Vue.component(muTabs.name, muTabs)
  Vue.component(muTab.name, muTab)
  Vue.component(muDivider.name, muDivider)
  Vue.component(muList.name, muList)
  Vue.component(muListItem.name, muListItem)
  Vue.component(muStepper.name, muStepper)
  Vue.component(muStepLabel.name, muStepLabel)
  Vue.component(muStepContent.name, muStepContent)
  Vue.component(muStep.name, muStep)
  Vue.component(muDialog.name, muDialog)
  Vue.component(muMenuItem.name, muMenuItem)
  Vue.component(muSlider.name, muSlider)
  Vue.component(muTable.name, muTable)
  Vue.component(muTbody.name, muTbody)
  Vue.component(muThead.name, muThead)
  Vue.component(muTfoot.name, muTfoot)
  Vue.component(muTh.name, muTh)
  Vue.component(muTr.name, muTr)
  Vue.component(muTd.name, muTd)
  Vue.component(muRadio.name, muRadio)
}

export default Muse
