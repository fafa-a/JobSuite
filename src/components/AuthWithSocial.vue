<template>
  <div class="">
    <div class="mb-7 d-flex">
      <v-btn color="error" dark large
        ><i class="fab fa-google mr-1"></i>{{ txtButton }} with Google</v-btn
      >
      <v-btn color="light-blue lighten-2" dark large
        ><i class="fab fa-twitter mr-1"></i>{{ txtButton }} with Twitter</v-btn
      >
    </div>
    <div class="d-flex">
      <v-divider class="mr-6"></v-divider>
      <p class="text-center">Or with</p>
      <v-divider class="ml-6"></v-divider>
    </div>
  </div>
</template>
<script>
export default {
  name: "AuthWithSocial",
  props: {
    txtButton: String,
  },
};
</script>
<style scoped>
.v-btn {
  min-width: 50% !important ;
  word-break: break-word;
}
hr {
  margin-top: 10px;
}
</style>
