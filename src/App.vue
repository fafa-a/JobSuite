<template>
  <div id="app">
    <HeaderH1 msg="job suite" />
    <JobForm></JobForm>
  </div>
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat&family=Roboto&display=swap");

#app {
  margin-top: 40px;
}
</style>
