<template>
  <!-- <v-row> -->

    <AuthSidebar />
    <!-- <SignUp /> -->
    <!-- <SignIn /> -->

  <!-- </v-row> -->
</template>
<script>
import AuthSidebar from "./AuthSidebar";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
export default {
  name: "AuthPage",
  data() {
    return {};
  },
  components: {
    AuthSidebar,
    // SignUp,
    // SignIn,
  },
};
</script>
<style scoped></style>
