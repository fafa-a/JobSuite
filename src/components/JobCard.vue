<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ data.company }}</h5>
      <p class="card-text">{{ data.job }} {{ date }}</p>
      <a :href="data.URLJobOffer" class="btn btn-primary">Go Job page</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["data", "date"],
};
</script>

<style scoped></style>
