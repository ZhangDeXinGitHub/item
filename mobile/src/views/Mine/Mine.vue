<!-- 我的 -->
<template>
  <div class="mine">
    <Header />
    <div class="mine-img">
      <img src="@/assets/Mine.jpg" alt />
      <p>寒星晓月</p>
    </div>
    <ul>
      <li>
        <span>全部订单</span>
        <a href="javascript:;">查看全部订单></a>
      </li>
      <li>
        <ul>
          <li>
            <i class="iconfont icon-fukuan"></i>
            <p>待付款</p>
          </li>
          <li>
            <i class="iconfont icon-icon_huabanfuben"></i>
            <p>待收货</p>
          </li>
          <li>
            <i class="iconfont icon-gouwuche"></i>
            <p>购物车</p>
          </li>
          <li>
            <i class="iconfont icon-shouhou"></i>
            <p>售后</p>
          </li>
        </ul>
        <span>地址管理</span>
      </li>
      <li>
        <span>优惠券</span>
      </li>
      <li>
        <span>联系客服</span>
      </li>
    </ul>
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
</script>>
<style lang='less' scoped>
.mine {
  .mine-img {
    background: #008c45;
    text-align: center;
    margin-top: 2.3rem;
    height: 12rem;
    img {
      margin-top: 30px;
      width: 20%;
      border-radius: 50%;
      border: 3px solid #fff;
    }
    p {
      color: #fff;
      font-size: 1.4rem;
    }
  }
  > ul {
    > li {
      padding: 15px 10px;
      border-bottom: 1px solid #cccccc;
      a {
        float: right;
        color: #666;
        font-size: 0.96rem;
      }
      ul {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 30px;
        i {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>