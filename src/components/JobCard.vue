<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">{{ data.company }}</h4>
      <h5 class="card-title">{{ data.job }}</h5>
      <p class="card-text">{{ date }}</p>
      <h6 class="card-title">Piece Send :</h6>
      <p class="card-text d-flex justify-content-around">
        <span v-if="data.pieceSend.includes('CV')">
          <i class="far fa-check-square"> CV</i>
        </span>
        <span v-if="data.pieceSend.includes('CL')">
          <i class="far fa-check-square"> CL</i>
        </span>
      </p>
      <h6 class="card-title">Complements</h6>
      <p v-if="data.txt" class="card-text">{{ data.txt }}</p>
      <p v-else class="card-text">No complements</p>
      <a :href="data.URLJobOffer" class="btn btn-primary">Go Job page</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["data", "date"],
};
</script>

<style scoped></style>
