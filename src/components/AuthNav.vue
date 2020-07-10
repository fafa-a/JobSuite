<template>
  <v-col cols="12">
    <div class="auth-link">
      <p class="text-right">Already a member? <a href="#">Sign In</a></p>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "AuthNav",
  data() {
    return {};
  },
};
</script>
<style scoped>
.auth-link {
  padding: 30px 30px 0;
}
.auth-link p a {
  text-decoration: none;
}
</style>
