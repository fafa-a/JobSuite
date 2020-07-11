<template>
  <v-col cols="5">
    <div class="auth-sidebar hidden-sm-and-down">
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
  position: relative;
  mix-blend-mode: di;
}
/* 
h2::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 130px;
  height: 80px;
  background: #ffc8bd;
   mix-blend-mode: hard-light;
} */

.auth-sidebar {
  background: #feebda;
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
  padding-left: 90px;
}
.artwork {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* padding: 60px; */
}
.artwork__img {
  background-image: url("../assets/responsive.png");
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
}
</style>
