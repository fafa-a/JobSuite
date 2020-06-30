<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.company"
            :rules="nameRules"
            label="Company Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.job"
            :rules="nameRules"
            label="Job Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.URLJobOffer"
            :rules="URLRules"
            label="Url Job Offer"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
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
        <v-col cols="12" md="6">
          <v-textarea
            outlined
            id="txt"
            v-model="formData.txt"
            label="Complements"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="2" class="d-flex">
          <v-btn elevation="7" class="mx-2" fab dark color="indigo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <JobCard :data="formData" :date="now"></JobCard>
  </v-form>
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
        URLJobOffer: "https://www.youtube.com/",
        pieceSend: ["", ""],
        txt: "",
      },
    };
  },
  computed: {
    now: function() {
      return moment().format("DD-MM-YYYY");
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
