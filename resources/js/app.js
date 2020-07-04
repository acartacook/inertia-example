import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(InertiaApp)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

let app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name =>
                import (`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);