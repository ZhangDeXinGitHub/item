<template>
  <div class="header">
    <div>
      <i class="iconfont icon-arrowLeft"></i>
      <h3>蓝果小镇商城</h3>
      <i class="iconfont icon-gengduo"></i>
    </div>
  </div>
</template>
<style lang="less">
.header {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
  div {
    background: #008c45;
    color: #fff;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 1.6rem;
    }
    h3 {
      line-height: 1.6rem;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
}
</style>