import 'muse-components/styles/base.less'
import muPaper from 'muse-components/paper'
import muBottomNav from 'muse-components/bottomNav/bottomNav'
import muBottomNavItem from 'muse-components/bottomNav/bottomNavItem'

let Muse = {}

Muse.install = function (Vue, options) {
  Vue.component(muPaper.name, muPaper)
  Vue.component(muBottomNav.name, muBottomNav)
  Vue.component(muBottomNavItem.name, muBottomNavItem)
}

export default Muse
