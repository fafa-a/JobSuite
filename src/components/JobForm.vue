<template>
  <div class="container">
    <h2></h2>
    <form class="form-row">
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          id="company"
          v-model="formData.company"
          placeholder="Company Name"
          class="form-control"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          id="job"
          v-model="formData.job"
          placeholder="Job Name"
          class="form-control"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <input
          type="text"
          id="URLJobOffer"
          v-model="formData.URLJobOffer"
          placeholder="Url Job Offer"
          class="form-control"
        />
      </div>
      <div class="form-group col-lg-3 col-md-6 col-sm-12">
        <div class="form-control">
          <input
            type="checkbox"
            id="CV"
            v-model="formData.pieceSend"
            value="CV"
          />
          <label for="CV">CV</label>
          <input
            type="checkbox"
            id="CL"
            v-model="formData.pieceSend"
            value="CL"
            class="ml-2"
          />
          <label for="CL">Cover Letter</label>
        </div>
      </div>
    </form>
    <div class="mt-3">
      <h3>Last Job apply</h3>
    </div>
    <JobCard :data="formData" :date="now"></JobCard>
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
        company: "Nike",
        job: "Developer",
        URLJobOffer: "",
        pieceSend: ["CV", "CL"],
      },
    };
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
form {
  font-family: "Roboto";
  margin-top: 25px;
}
.btn {
  height: 38px;
}
</style>
