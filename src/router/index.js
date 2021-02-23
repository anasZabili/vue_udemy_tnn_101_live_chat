import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { projectAuth } from "../firebase/config";

// auth guard
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  }
  next();
};
const requiredNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  }
  next();
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requiredNoAuth,
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requiredAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
