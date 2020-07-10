<template>
  <v-form v-model="valid" class="mx-auto">
    <v-container>
      <v-col cols="12" md="12" sm="12">
        <h2 class="mb-7">Sign up to Job Suite</h2>
        <AuthWithSocial />
        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
          <v-btn class="mt-6" color="indigo" dark large @click="submit"
            >Create Account</v-btn
          >
        </v-form>
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
import { auth } from "@/fb";
import AuthWithSocial from "./AuthWithSocial";
export default {
  name: "SignUp",
  data() {
    return {
      valid: false,
      show: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => v.length >= 8 || "Min 8 characters"],
    };
  },
  methods: {
    submit: function() {
      const email = this.email;
      const password = this.password;
      console.log(email);
      console.log(password);

      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
        this.$refs.form.reset();
      });
    },
  },
  components: {
    AuthWithSocial,
  },
};
</script>
<style scoped>
h2 {
  font-family: "Tenor Sans", sans-serif;
  font-size: 28px;
  color: #194038;
}
</style>
