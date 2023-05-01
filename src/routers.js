import Home from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/LoginForm.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    name: "Home",
    component: Home,
    path: "/"
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up"
  },
  {
    name: "Login",
    component: Login,
    path: "/login"
  },
  {
    name: "Add",
    component: Add,
    path: "/add"
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
    params:true
  },
  {
    name: "Delete",
    component: Update,
    path: "/delete/:id",
    params:true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;