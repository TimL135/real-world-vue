import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/Layout.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page + "") || 1 })
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
    //alias:"/about"
  },
  {
    path: "/about",
    redirect: { name: "About" }
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [{
      path: "register",
      name: "EventRegister",
      component: EventRegister
    },
    {
      path: "edit",
      name: "EventEdit",
      component: EventEdit
    },
    {
      path: "",
      name: "EventDetails",
      component: EventDetails
    }]
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: to => {
      return { path: "/events/" + to.params.afterEvent }
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
