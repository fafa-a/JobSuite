<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div class="d-flex justify-space-between">
        <span>Company : {{ data.company }}</span
        ><span>{{ date }} </span>
      </div>
      <p class="display-1 text--primary">Job : {{ data.job }}</p>
      <p>
        Piece send :
        <span v-if="data.pieceSend.includes('CV')">
          <i class="far fa-check-square"> CV</i>
        </span>
        <span v-if="data.pieceSend.includes('CL')">
          <i class="far fa-check-square"> CL</i>
        </span>
      </p>

      <div class="text--primary">
        <p v-if="data.txt" class="card-text">{{ data.txt }}</p>
        <p v-else class="card-text">No complements</p>
      </div>
    </v-card-text>
    <v-divider class="mt-6 mx-4"></v-divider>
    <v-card-actions class="d-flex justify-space-around">
      <v-btn
        :href="data.URLJobOffer"
        target="_blank"
        text
        color="deep-purple accent-4"
      >
        Job Page
      </v-btn>
      <v-btn text color="green accent-4">
        Edit
      </v-btn>
      <v-btn text color="red accent-4">
        Delete
      </v-btn>
    </v-card-actions>
    <v-divider class="mt-6 mx-4"></v-divider>
    <v-card-actions class="d-flex justify-space-between">
      <span>{{ date }} </span>
      <span>
        <v-icon
          @click="next"
          :href="data.URLJobOffer"
          target="_blank"
          color="green darken-2"
          dark
          left
          >fas fa-external-link-alt</v-icon
        >
        <v-icon color="orange darken-2" dark left>far fa-edit</v-icon>
        <v-icon color="red darken-2" dark left>far fa-trash-alt</v-icon>
      </span>
    </v-card-actions>
    <v-divider class="mt-6 mx-4"></v-divider>
    <v-card-actions>
      <v-card-text>
        <v-chip class="mr-1" @click="lights">
          <v-icon left>fas fa-external-link-alt</v-icon>
          Job page
        </v-chip>
        <v-chip class="mr-1" @click="alarm">
          <v-icon left>far fa-edit</v-icon>
          Edit
        </v-chip>
        <v-chip @click="blinds">
          <v-icon left>far fa-trash-alt</v-icon>
          Delete
        </v-chip>
      </v-card-text>
    </v-card-actions>
  </v-card>
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

<style scoped></style>
