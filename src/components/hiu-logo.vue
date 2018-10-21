<template>
  <div>
    <nuxt-link to="/">
      <img class="hiuwave-img" src="/hiuwave.png" alt="">
    </nuxt-link>
  </div>
</template>

<style scoped>
.hiuwave-img{
  width: 20vh;
  min-width: 130px;
  max-width: 150px;
  opacity: .5;
  filter: brightness(5);
  /*animation: fade 3s;*/
}
.hiuwave-img::hover {
  opacity: .5;
  filter: none;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .5;
  }
}
</style>
