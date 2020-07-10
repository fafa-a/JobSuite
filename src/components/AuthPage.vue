<template>
  <v-row>
    <AuthSidebar />
    <v-row>
      <AuthNav />
      <SignUp />
      <!-- <SignIn /> -->
    </v-row>
  </v-row>
</template>
<script>
import AuthSidebar from "./AuthSidebar";
import AuthNav from "./AuthNav";
import SignUp from "./SignUp";
// import SignIn from "./SignIn";
export default {
  name: "AuthPage",
  data() {
    return {};
  },
  components: {
    AuthSidebar,
    AuthNav,
    SignUp,
    // SignIn,
  },
};
</script>
<style scoped>
.row .row {
  margin: 0 !important;
}
</style>
