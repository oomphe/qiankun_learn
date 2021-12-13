import Vue from "vue";
import App from "./App.vue";
import router from "./router"
Vue.config.productionTip = false;
Vue.use(router)

let instance = null

function render(props = {}) {
  const {
    container
  } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app")
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(props) {
  console.log('bootstrap', props,instance)
}


export async function mount(props) {
  console.log(12, props)
  render(props)
}

export async function unmount() {
  console.log('instance', instance)
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

