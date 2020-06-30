<template>
  <div class="d-flex   flex-wrap align-self-start ">
    <v-card
      v-for="(job, index) in data"
      :key="index"
      class="mx-auto mb-6"
      max-width="344"
    >
      <v-card-text>
        <div class="d-flex justify-space-between">
          <span>Company : {{ job.company }}</span
          ><span>{{ date }} </span>
        </div>
        <p class="display-1 text--primary">Job : {{ job.job }}</p>
        <p>
          Piece send :
          <span v-if="job.pieceSend.includes('CV')">
            <i class="far fa-check-square"> CV</i>
          </span>
          <span v-if="job.pieceSend.includes('CL')">
            <i class="far fa-check-square"> CL</i>
          </span>
        </p>

        <div class="text--primary">
          <p v-if="job.txt" class="card-text">{{ job.txt }}</p>
          <p v-else class="card-text">No complements</p>
        </div>
      </v-card-text>

      <v-divider class="mt-6 mx-4"></v-divider>
      <v-card-actions>
        <v-card-text class="d-flex justify-space-around">
          <v-chip :href="job.URLJobOffer" target="_blank" class="mr-1 job-link">
            <v-icon color="green darken-1 accent-4" left
              >fas fa-external-link-alt</v-icon
            >
            Job page
          </v-chip>
          <v-chip class="mr-1 edit" @click="edited">
            <v-icon color="orange darken-1" left>far fa-edit</v-icon>
            Edit
          </v-chip>
          <v-chip class="delete" @click="deleted">
            <v-icon color="red darken-1" left>far fa-trash-alt</v-icon>
            Delete
          </v-chip>
        </v-card-text>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["data", "date"],
  methods: {
    next: function() {
      console.log("OK");
    },
  },
};
</script>

<style scoped>
.theme--light {
  background: #fff !important;
}
.v-chip--active {
  background: #f1f1f1f1 !important;
}
.v-chip {
  box-shadow: 2px 2px 4px #d1d9e6, -1px -1px 2px #fff;
}
.v-application .job-link:hover {
  color: green;
}
.v-application .edit:hover {
  color: orangered;
  cursor: pointer;
}
.v-application .delete:hover {
  color: red;
  cursor: pointer;
}
</style>
