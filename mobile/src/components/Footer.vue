<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/" tag="li">
        <div class="navimg">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/category" tag="li">
        <div class="navimg">
          <i class="iconfont icon-fenlei"></i>
          <p>分类</p>
        </div>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="navimg">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
        </div>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="navimg">
          <i class="iconfont icon-xiazai4"></i>
          <p>我的</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: "/"
    };
  },
  mounted() {
    // console.log(this.$route.path);
  }
};
</script>
<style lang='less' scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #ffffff;
  ul {
    height: 2.8rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #cccccc;
    li {
      width: 25%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      i {
        font-size: 1.4rem;
      }
      p {
        font-size: 0.32rem;
      }
    }
  }
  .router-link-active {
    color: #348360;
  }
}
</style>