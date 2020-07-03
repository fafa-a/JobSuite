<template>
  <div>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="formData.company"
            label="Company Name"
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
          <v-btn elevation="7" fab dark color="indigo" @click="added">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <JobCard :data="jobInfo" :date="now"></JobCard>
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
      formData: {
        company: "",
        job: "",
        URLJobOffer: "http://www.fixErrorURL.com",
        pieceSend: [],
        txt: "",
      },
      jobInfo: [],
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
            console.log("added to db");
          });

        this.jobInfo.push(this.formData);
        this.formData = {
          company: "",
          job: "",
          URLJobOffer: "http://www.fixErrorURL.com",
          pieceSend: [],
          txt: "",
        };
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
