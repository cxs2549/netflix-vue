import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/css/main.css"
import "./assets/css/app.scss"
import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"

Vue.config.productionTip = false

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)

Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
