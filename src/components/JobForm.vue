<template>
  <div class="container">
    <form class="form-row">
      <div class="form-group col-lg-4 col-md-6 col-sm-12">
        <input
          type="text"
          id="company"
          v-model="formData.company"
          placeholder="Company Name"
          class="form-control"
        />
      </div>
      <div class="form-group col-lg-4 col-md-6 col-sm-12">
        <input
          type="text"
          id="job"
          v-model="formData.job"
          placeholder="Job Name"
          class="form-control"
        />
      </div>
      <div class="form-group col-lg-4 col-md-6 col-sm-12">
        <input
          type="text"
          id="URLJobOffer"
          v-model="formData.URLJobOffer"
          placeholder="Url Job Offer"
          class="form-control"
        />
      </div>
      <div
        class="form-group d-flex justify-content-around col-lg-2 col-md-6 col-sm-12 "
      >
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            id="CV"
            v-model="formData.pieceSend"
            value="CV"
            class="custom-control-input"
          />
          <label class="custom-control-label" for="CV">CV</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            id="CL"
            v-model="formData.pieceSend"
            value="CL"
            class="custom-control-input"
          />
          <label class="custom-control-label" for="CL">Cover Letter</label>
        </div>
      </div>
      <div class="form-group  col-lg-8 col-md-10 col-sm-12">
        <textarea
          id="txt"
          v-model="formData.txt"
          placeholder="Complements"
          class="form-control"
        ></textarea>
      </div>
      <button class="btn btn-primary col-lg col-md col-sm-12">ADD</button>
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
        company: "",
        job: "",
        URLJobOffer: "",
        pieceSend: ["", ""],
        txt: "",
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
  height: 62px;
}
.custom-control {
  display: inline !important;
}
</style>
