<template>
  <v-app>
    <v-main>
      <AuthPage />
      <headerH1 msg="Job suite" />
      <jobForm @offerAdded="snackbar = true" />
    </v-main>
  </v-app>
</template>

<script>
import AuthPage from "./components/AuthPage";
import HeaderH1 from "./components/HeaderH1";
import JobForm from "./components/JobForm";
export default {
  name: "App",

  components: {
    AuthPage,
    HeaderH1,
    JobForm,
  },

  data: () => ({}),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");

#app {
  background-color: #ecfbfc;
}
.col {
  padding: 0 !important;
}
.row {
  margin: auto;
}

@media (min-width: 960px) {
  .row {
    max-width: 85%;
    margin: auto;
  }
}
@media (min-width: 1600px) {
  .row {
    max-width: 70%;
  }
}
</style>
