<template>
  <v-row>
    <AuthSidebar />
    <v-col col="7" md="7" sm="12" xs="12" class="relative">
      <AuthNav :txt="txt" :hrefTxt="hrefTxt" :href="href" />
      <AuthSignIn />
    </v-col>
  </v-row>
</template>
<script>
import AuthSidebar from "./AuthSidebar";
import AuthNav from "./AuthNav";
import AuthSignIn from "./AuthSignIn";
export default {
  name: "AuthPage",
  data() {
    return {
      txt: "Not a member?",
      hrefTxt: "Sign up now",
      href: "/",
    };
  },
  components: {
    AuthSidebar,
    AuthNav,
    AuthSignIn,
  },
};
</script>
<style scoped>
.row .row {
  margin: 0 !important;
}

.relative {
  position: relative;
  height: 100vh;
  width: 100%;
}

@media (min-width: 960px) {
  .row {
    min-width: 100%;
  }
}
</style>
