<!-- 购物车 -->
<template>
  <div class="cart">
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>