<template>
  <v-col cols="5">
    <div class="auth-sidebar">
      <div class="auth-sidebar__content">
        <div class="auth-sidebar__header">
          <header>
            <h2 class="">Job Suite</h2>
            <h1>Discover the simple way to monitor your job offers</h1>
          </header>
        </div>
        <div class="artwork">
          <div class="artwork__img"></div>
        </div>
      </div>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "AuthSidebar",
};
</script>
<style scoped>
h1,
h2 {
  font-family: "Tenor Sans", sans-serif;
}
h1 {
  font-size: 28px;
  color: #194038;
}
h2 {
  font-size: 1rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #235952;
}
.auth-sidebar {
  background: #feebda;
  color: #feebda;
  height: 100vh;
}
.auth-sidebar__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.auth-sidebar__header {
  background: #feebda;
}
header {
  padding: 64px 44px 30px;
}
.artwork {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}
.artwork__img {
  background-image: url("../assets/responsive.png");
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
}
</style>
