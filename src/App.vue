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
</style>
