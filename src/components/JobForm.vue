<template>
  <div>
    <v-container>
      <v-form>
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
    </v-container>
    <JobCard :data="jobInfo" :date="now"></JobCard>
  </div>
</template>
<script>
import moment from "moment";
import JobCard from "./JobCard";

export default {
  name: "JobForm",
  data() {
    return {
      formData: {
        company: "",
        job: "",
        URLJobOffer: "",
        pieceSend: [],
        txt: "",
      },

      jobInfo: [],
    };
  },
  methods: {
    added: function() {
      this.jobInfo.push(this.formData);
      this.formData = {
        company: "",
        job: "",
        URLJobOffer: "",
        pieceSend: [],
        txt: "",
      };
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
