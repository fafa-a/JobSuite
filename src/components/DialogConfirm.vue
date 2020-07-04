<template>
  <v-dialog :value="dialog" max-width="350">
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

        <v-btn color="red darken-1" text @click="confirmDeleted">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "DialogConfirm",
  props: {
    dialog: { type: Boolean, default: false },
  },
  methods: {
    confirmDeleted: function() {
      this.$emit("confirmDeleted");
    },
  },
};
</script>
<style></style>
