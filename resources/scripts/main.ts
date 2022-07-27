import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { importPageComponent } from './vite/import-page-component'

createInertiaApp({
	resolve: (name) => importPageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
	setup({ el, App, props, plugin }) {
        Vue.use(plugin);
        return new Vue({
            render: h => h(App, props),
        }).$mount(el);
	},
})
