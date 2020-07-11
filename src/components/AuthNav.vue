<template>
  <div class="auth-link">
    <p class="text-right">
      {{ txt }} <router-link :to="href">{{ hrefTxt }}</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "AuthNav",
  data() {
    return {};
  },
  props: {
    txt: String,
    hrefTxt: String,
    href: String,
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
