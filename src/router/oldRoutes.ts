import { RouteRecordRaw } from 'vue-router';

import Home from "@/views/index.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/dashboard/:serverID/settings",
        component: () => import("@/views/dashboard/[serverID]/settings.vue")
    },
];