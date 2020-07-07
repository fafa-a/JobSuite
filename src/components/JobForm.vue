<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new job offer.</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-form v-model="valid" ref="form">
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="formData.company"
            label="Company Name"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            v-model="formData.job"
            label="Job Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            v-model="formData.URLJobOffer"
            :rules="URLJobRules"
            label="Url Job Offer"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-checkbox
            v-model="formData.pieceSend"
            label="CV"
            value="CV"
          ></v-checkbox>
          <v-checkbox
            v-model="formData.pieceSend"
            label="Cover Letter"
            value="CL"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            outlined
            id="txt"
            v-model="formData.txt"
            label="Complements"
          ></v-textarea>
        </v-col>
        <v-col class="d-flex justify-center align-center">
          <v-btn
            elevation="7"
            fab
            dark
            color="indigo"
            @click="added"
            :loading="loading"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <JobCard :data="jobInfo" :date="now" :snackbar="snackbar"></JobCard>
  </div>
</template>
<script>
import moment from "moment";
import JobCard from "./JobCard";
import db from "@/fb";

export default {
  name: "JobForm",
  data() {
    return {
      valid: false,
      loading: false,
      snackbar: false,
      formData: {
        company: "",
        job: "",
        URLJobOffer: "",
        pieceSend: [],
        txt: "",
      },
      jobInfo: [],
      nameRules: [
        (v) => !!v || "Field is required",
        (v) =>
          (v && v.length >= 3) || "This field must be more than 03 characters",
      ],
      URLJobRules: [
        (v) => !!v || "URL is required",
        /* eslint-disable */
        (v) =>
          /https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(v) ||
          "URL must be valid",
      ],
    };
  },
  methods: {
    added: function() {
      if (this.valid) {
        this.loading = true;
        const jobOffer = {
          company: this.formData.company,
          job: this.formData.job,
          URL: this.formData.URLJobOffer,
          pieces: this.formData.pieceSend,
          complements: this.formData.txt,
          date: this.now,
        };
        db.collection("job-offer")
          .add(jobOffer)
          .then(() => {
            this.loading = false;
            this.snackbar = true;
            this.$refs.form.reset();
          });
      }
    },
  },
  computed: {
    now: function() {
      return moment().format("dddd DD-MM-YYYY");
    },
  },
  components: { JobCard },
};
</script>

<style scoped>
.v-form {
  font-family: "Montserrat";
  margin-top: 25px;
}
</style>
