<template>
  <v-dialog v-model="dialog" max-width="350" @keydown.esc="cancel">
    <v-card>
      <v-card-title class="headline">Confirmation</v-card-title>

      <v-card-text>
        Are you sure you want delete this content.<br />
        This action cannot be undone.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="gray darken-1" text @click.native="cancel">
          Cancel
        </v-btn>

        <v-btn color="red darken-1" text @click.native="agree">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "DialogConfirm",
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
  }),
  methods: {
    open() {
      this.dialog = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },
};
</script>
<style></style>
