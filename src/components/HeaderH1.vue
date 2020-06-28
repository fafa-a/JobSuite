<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderH1",
  props: {
    msg: String,
  },
};
</script>

<style>
h1 {
  text-transform: uppercase;
  font-family: "Archivo Black";
  font-size: 60px;
  text-align: center;
  margin-top: 40px;
}
</style>
