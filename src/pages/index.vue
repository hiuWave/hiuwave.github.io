<script>
import hiuLogo from '~/components/hiu-logo.vue'

export default {
  // transition: '',
  components: {
    hiuLogo
  },
  data: () => ({
    subtitle: 'just another platform?'
  })
}
</script>

<template>
  <div class="container">
    <div>
      <hiu-logo/>
      <h1 class="title">
        <b>hiu</b>Wave
      </h1>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>  
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10vh;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 100;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: .2em;
}

.subtitle {
  font-weight: 300;
  font-size: 16px;
  /*color: #526488;*/
  color: grey;
  letter-spacing: 1px;
  word-spacing: 1px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
