<template>
  <v-row>
    <v-col cols="12" lg="3" sm="4" v-for="(job, index) in data" :key="index">
      {{ job.id }}{{ index }}
      <v-card class="mb-6 mx-auto" min-width="300">
        <v-card-text>
          <p class="display-1 text--primary text-capitalize">{{ job.job }}</p>
          <div>
            <span class="text--primary ">Company :</span
            ><span class="text-uppercase">{{ job.company }}</span>
          </div>
          <p class="text-right date">{{ date }}</p>
          <p class="mt-2">
            Piece send :
            <span v-if="job.pieces.includes('CV')" class="ml-6">
              <i class="far fa-check-square"> CV</i>
            </span>
            <span v-if="job.pieces.includes('CL')" class="ml-6">
              <i class="far fa-check-square"> CL</i>
            </span>
          </p>
          <div>
            <p v-if="job.complements" class="card-text">
              <span class="text--primary">Complements :</span>
              <br />
              {{ job.complements }}
            </p>

            <p v-else class="card-text">No complements</p>
          </div>
        </v-card-text>

        <v-divider class="mt-1 mx-4"></v-divider>
        <v-card-actions>
          <v-card-text class="d-flex justify-space-around">
            <v-chip :href="job.URL" target="_blank" class="mr-1 job-link">
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
    </v-col>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">Confirmation</v-card-title>

        <v-card-text>
          Are you sure you want delete this content.<br />
          This action cannot be undone.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="gray darken-1" text @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="red darken-1" text @click="deleted(job)">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import db from "@/fb";

export default {
  name: "JobCard",
  data() {
    return {
      dialog: false,
    };
  },
  props: ["data", "date"],
  methods: {
    deleted: function(job) {
      console.log(job);

      // let id = this.job.id;
      // db.collection("job-offer")
      //   .doc(id)
      //   .delete();
      // // this.data.pop();
      this.dialog = false;
    },
    edited: function() {
      console.log(this);
    },
  },
  created() {
    db.collection("job-offer").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.data.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
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
