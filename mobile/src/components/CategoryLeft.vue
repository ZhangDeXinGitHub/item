<!-- 产品分类左边 -->
<template>
  <div class="categoryLeft">
    <div class="categoryNav">
      <ul>
        <li class="active">
          <a>手机</a>
        </li>
        <li>
          <a>笔记本</a>
        </li>
        <li>
          <a>智能硬件</a>
        </li>
        <li>
          <a>周边配件</a>
        </li>
      </ul>
    </div>
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
    return {};
  }
};
</script>
<style lang='less' scoped>
.categoryNav {
  height: 100%;
  width: 90px;
  background: #efefef;
  ul {
    li {
      height: 3.2rem;
      line-height: 3.2rem;
      text-align: center;
    }
  }
  .active {
    background: #ffffff;
    a {
      color: #f23030;
    }
  }
}
</style>