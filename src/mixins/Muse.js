import 'muse-components/styles/base.less'
import muPaper from 'muse-components/paper'
import muBottomNav from 'muse-components/bottomNav/bottomNav'
import muBottomNavItem from 'muse-components/bottomNav/bottomNavItem'
import muFlexbox from 'muse-components/flexbox/flexbox'
import muFlexboxItem from 'muse-components/flexbox/flexboxItem'
import muFlatButton from 'muse-components/flatButton'
import muTextField from 'muse-components/textField'
import muAvatar from 'muse-components/avatar'
import muIcon from 'muse-components/icon'

let Muse = {}

Muse.install = function (Vue, options) {
  Vue.component(muPaper.name, muPaper)
  Vue.component(muBottomNav.name, muBottomNav)
  Vue.component(muBottomNavItem.name, muBottomNavItem)
  Vue.component(muFlexbox.name, muFlexbox)
  Vue.component(muFlexboxItem.name, muFlexboxItem)
  Vue.component(muFlatButton.name, muFlatButton)
  Vue.component(muTextField.name, muTextField)
  Vue.component(muAvatar.name, muAvatar)
  Vue.component(muIcon.name, muIcon)
}

export default Muse
