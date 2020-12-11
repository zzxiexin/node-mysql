<template>
  <div id="app">
    <router-view> </router-view>
    <common-link />
  </div>
</template>
<script>
import CommoLink from "@/components/commonLink";
export default {
  components: {
    "common-link": CommoLink,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.van-cell__value {
  color: #323233 !important;
}
</style>
