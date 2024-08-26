<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default{
  components:{
    NavBarComp,
    FooterComp
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    }
  }
}

</script>

<style>
#app {
  font-family: "Noto Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{
  margin: 0;
}
html{
    scroll-behavior: smooth;
}
body::-webkit-scrollbar{
  display: none;
}
</style>
