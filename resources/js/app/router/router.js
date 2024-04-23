import {createRouter, createWebHistory} from "vue-router";

import layout from "../layout/layout.vue";
import home from "../pages/home.vue";

const ROOT_URL = "/";
const TITLE = 'to-do-list';

const routes = [
    {
        path: ROOT_URL, name: 'layout', component: layout,
        children: [
            {path: ROOT_URL + 'home', name: 'home', component: home, meta: { title: TITLE + ' - home' } },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
