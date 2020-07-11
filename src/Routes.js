import AuthPageSignUp from "./components/AuthPageSignUp.vue";
import AuthPageSignIn from "./components/AuthPageSignIn.vue";
import JobPage from "./components/JobPage.vue";

export default [
  { path: "/", component: AuthPageSignUp },
  { path: "/session", component: AuthPageSignIn },
  {
    path: "/jobpage",
    component: JobPage,
  },
];
