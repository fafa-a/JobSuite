<template>
  <div class="d-flex flex-wrap">
    <v-card v-for="(job, index) in data" :key="index" class="mb-6" width="300">
      <v-card-text>
        <p class="display-1 text--primary">{{ job.job }}</p>
        <div>
          <span class="text--primary ">Company :</span
          ><span class="text-uppercase">{{ job.company }}</span>
        </div>
        <p class="text-right date">{{ date }}</p>
        <p class="mt-2">
          Piece send :
          <span v-if="job.pieceSend.includes('CV')" class="ml-6">
            <i class="far fa-check-square"> CV</i>
          </span>
          <span v-if="job.pieceSend.includes('CL')" class="ml-6">
            <i class="far fa-check-square"> CL</i>
          </span>
        </p>

        <div>
          <p v-if="job.txt" class="card-text">
            <span class="text--primary">Complements :</span>
            <br />{{ job.txt }}
          </p>
          <p v-else class="card-text">No complements</p>
        </div>
      </v-card-text>

      <v-divider class="mt-1 mx-4"></v-divider>
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
          <v-chip class="delete" @click.stop="dialog = true">
            <v-icon color="red darken-1" left>far fa-trash-alt</v-icon>
            Delete
          </v-chip>
        </v-card-text>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Are you sure ?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="red darken-1" text @click="deleted">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  data() {
    return {
      dialog: false,
    };
  },
  props: ["data", "date"],
  methods: {
    deleted: function() {
      this.data.pop();
      this.dialog = false;
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
.date {
  margin-bottom: 0;
}
</style>
