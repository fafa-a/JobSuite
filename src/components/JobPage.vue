<template>
  <div class="margin">
    <HeaderH1 :title="title" />
    <JobForm />
    <JobCard />
  </div>
</template>
<script>
import HeaderH1 from "./HeaderH1";
import JobForm from "./JobForm";
import JobCard from "./JobCard";
export default {
  name: "JobPage",
  data() {
    return {
      title: "Job Suite",
    };
  },
  components: {
    JobForm,
    JobCard,
    HeaderH1,
  },
};
</script>
<style scoped></style>
