<template>
  <v-container>
    <div class="center ">
      <h2 class="mb-7">{{ title }} to Job Suite</h2>
      <AuthWithSocial :txtButton="title" />
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
    </div>
  </v-container>
</template>
<script>
import { auth } from "@/fb";
import AuthWithSocial from "./AuthWithSocial";
export default {
  name: "AuthSignUp",
  data() {
    return {
      title: "Sign Up",
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

      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.$refs.form.reset();
          this.$router.push("/jobpage");
        })
        .catch((error) => alert(error.message));
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

.center {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
}
</style>
