<template>
  <v-app>
    <v-main>
      <headerH1 msg="Job suite" />
      <jobForm />
    </v-main>
  </v-app>
</template>

<script>
import HeaderH1 from "./components/HeaderH1.vue";
import JobForm from "./components/JobForm.vue";
export default {
  name: "App",

  components: {
    HeaderH1,
    JobForm,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat&family=Roboto&display=swap");
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
