<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderH1",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-family: "Archivo Black";
  font-size: 60px;
  text-align: center;
  margin-top: 40px;
}
</style>
