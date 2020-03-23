<template>
  <div class="home">
    <Header />
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="@/assets/banner01.webp" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/assets/banner02.webp" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/assets/banner03.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="@/assets/banner04.webp" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner05.webp" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="home-category">
      <li v-for="homeCategory in homeCategorydatas" :key="homeCategory.id">
        <img :src="homeCategory.imgsrc" />
        <p>{{homeCategory.list}}</p>
        <div>
          <span class="price">{{homeCategory.price}}</span>
          <span class="cost">{{homeCategory.cost}}</span>
        </div>
        <div>
          <span>新品</span>
          <span>销量:0</span>
        </div>
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
  components: {
    Header,
    Footer
  },
  data() {
    return {
      homeCategorydatas: [
        {
          id: "01",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/100888/8/14513/217277/5e6742e0Ee0c4b224/9c37213504c7676d.jpg",
          list: "小米无线鼠标",
          price: "￥64.00",
          cost: "￥64.00"
        },
        {
          id: "02",
          imgsrc:
            "https://img11.360buyimg.com/n7/jfs/t1/99733/2/8261/174001/5e045083Ec79b2c6e/fac2d957b511c1da.jpg",
          list: "小米笔记本",
          price: "￥4799.00",
          cost: "￥4799.00"
        },
        {
          id: "03",
          imgsrc:
            "https://img14.360buyimg.com/n1/s450x450_jfs/t1/103526/12/13620/260296/5e5b5932Efb5c8ab9/892bdd6f489c0b4b.jpg",
          list: "华为手机",
          price: "￥1199.00",
          cost: "￥1499.00"
        },
        {
          id: "04",
          imgsrc:
            "https://img12.360buyimg.com/n7/jfs/t1/45124/2/5820/397999/5d36c0cdEda359655/61f65ac6aae3146b.jpg",
          list: "荣耀9X",
          price: "￥1299.00",
          cost: "￥1599.00"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.banner {
  height: 12rem;
  margin-top: 2.3rem;
  img {
    width: 100%;
    height: 12rem;
  }
}
.home-category {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 46%;
    margin: 5px;
    border: 1px solid #cccccc;
    img {
      width: 100%;
    }
    div {
      margin: 5px 10px;
      display: flex;
      justify-content: space-between;
      span {
        color: #666;
      }
      .price {
        color: red;
      }
      .cost {
        text-decoration: line-through;
        font-size: 0.32rem;
      }
    }
  }
}
</style>