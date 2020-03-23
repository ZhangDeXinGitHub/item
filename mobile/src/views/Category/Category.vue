<template>
  <div class="category">
    <Header />
    <div class="category-lie">
      <CategoryLeft />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import CategoryLeft from "@/components/CategoryLeft.vue";
export default {
  name: "Category",
  components: {
    Header,
    Footer,
    CategoryLeft
  }
};
</script>
<style lang="less">
.category-lie {
  margin-top: 2.4rem;
}
</style>