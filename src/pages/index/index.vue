<template>
  <div class="housekeeper-tips bg-white">
    <h3 class="housekeeper-tips-title">
      管家说
    </h3>
    <div class="housekeeper-tips-desc">
      在商品页，选择商品规格进行购买是一个常见的业务场景。商品可以有多层级多种类，再考虑常见的限购、库存展示、购买留言、对应展示图片等功能，整个商品规格选择过程会变得很复杂。提供的
      组件，通过指定数据传入后，即足上述所有需求。
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    created () {
    },
    computed: {}
  }
</script>

<style scoped>
  .housekeeper-tips {
    padding: 59px 69px 50px 69px;
    color: #333;
  }

  .housekeeper-tips-title {
    margin: 0 auto 45px;
    width: 98px;
    height: 44px;
    line-height: 44px;
    font-size: 30px;
    text-align: center;
    border-bottom: 6px solid #ffbb6e;
  }

  .housekeeper-tips-desc {
    line-height: 53px;
    font-size: 25px;
    padding-bottom: 10px;
    word-break: break-all;
  }
</style>
