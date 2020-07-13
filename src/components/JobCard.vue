<template>
  <v-row>
    <v-snackbar v-model="snackbarDel" :timeout="4000" top color="success">
      <span>Job offer deleted !</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-col cols="12" lg="3" sm="4" v-for="(job, index) in jobs" :key="index">
      <v-card class="mb-6 mx-auto" min-width="300">
        <v-card-text>
          <p class="display-1 text--primary text-capitalize">{{ job.job }}</p>
          <div>
            <span class="text--primary ">Company :</span
            ><span class="text-uppercase">{{ job.company }}</span>
          </div>
          <p class="text-right date">{{ job.date }}</p>
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
            <p v-if="job.complements" class="card-text complements">
              <span class="text--primary">Complements :</span>
              <br />
              {{ job.complements }}
            </p>

            <p v-else class="card-text">
              No complements
            </p>
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
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
            <v-chip class="delete" @click="deleted(job)">
              <v-icon color="red darken-1" left>far fa-trash-alt</v-icon>
              Delete
            </v-chip>
          </v-card-text>
        </v-card-actions>
      </v-card>
    </v-col>
    <dialog-comfirm ref="confirm" />
  </v-row>
</template>

<script>
import { db } from "@/fb";
import { auth } from "@/fb";
import DialogComfirm from "./DialogConfirm.vue";
export default {
  name: "JobCard",
  data() {
    return {
      snackbarDel: false,
      dialog: false,
      jobs: [],
    };
  },
  props: ["date"],
  components: { "dialog-comfirm": DialogComfirm },
  methods: {
    deleted: function(job) {
      this.$refs.confirm.open().then(() => {
        let id = job.id;
        db.collection("job-offer")
          .doc(id)
          .delete()
          .then(() => {
            this.dialog = false;
            this.snackbarDel = true;
          });
      });
    },
    edited: function() {
      console.log("not ok");
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user == null) {
        this.$router.push("/session");
      }
    });

    db.collection("job-offer")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().author == auth.currentUser.uid) {
            this.jobs.push(doc.data());
          }
        });
      });

    // db.collection("job-offer").onSnapshot((res) => {
    //   const changes = res.docChanges();

    //   changes.forEach((change) => {
    //     if (change.type === "added") {
    //       this.data.push({
    //         ...change.doc.data(),
    //         id: change.doc.id,
    //       });
    //     } else if (change.type === "removed") {
    //       location.reload();
    //     }
    //   });
    // });
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
.complements {
  max-height: 200px;
  overflow: auto;
}
</style>
