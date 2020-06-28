<template>
  <div class="container">
    <form class="form-row">
      <div class="form-group">
        <input
          type="text"
          id="company"
          v-model="formData.company"
          placeholder="Company Name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          id="job"
          v-model="formData.job"
          placeholder="Job Name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          id="URLJobOffer"
          v-model="formData.URLJobOffer"
          placeholder="Url Job Offer"
          class="form-control"
        />
      </div>
      <div class="form-group">
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
      <div class="btn btn-primary">Submit</div>
    </form>
  </div>
</template>
<script>
export default {
  name: "JobForm",
  data() {
    return {
      formData: { company: "", job: "", URLJobOffer: "", pieceSend: [] },
    };
  },
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
