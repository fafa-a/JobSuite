<template>
  <v-row>
    <AuthSidebar />
    <v-col col="7" md="7" sm="12" xs="12" class="relative">
      <AuthNav />
      <AuthSignUp />
      <AuthSignIn />
    </v-col>
  </v-row>
</template>
<script>
import AuthSidebar from "./AuthSidebar";
import AuthNav from "./AuthNav";
import AuthSignUp from "./AuthSignUp";
import AuthSignIn from "./AuthSignIn";
export default {
  name: "AuthPage",
  data() {
    return {};
  },
  components: {
    AuthSidebar,
    AuthNav,
    AuthSignUp,
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
</style>
