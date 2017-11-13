<template lang="html">
  <li class="goods-item">
    <router-link to="/detail"  class="goods-item-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
      <div class="goods-item-pic">
           ![](img) <!-- 注意这图片的:src是vue的属性，里面的img是来自该组件的data中数据 -->
      </div>
      <div class="goods-item-desc">
        <p class="goods-item-name">{{ title }}</p>
        <p class="goods-item-price">{{ price }}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'goods-item',
  props: ['price', 'title', 'img'],   /*  props是子组件获取父组件数据用的 */
};
</script>

<style lang="css" scoped>
  .goods-item {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .goods-item:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }
  .goods-item:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }
  .goods-item-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }
  .goods-item:nth-of-type(even) .goods-item-link{
    margin-left: 0;
  }
  .goods-item:nth-of-type(odd) .goods-item-link{
    margin-right: 0;
  }
  .goods-item-pic {
    padding: 0.5rem;
  }
  .goods-item-pic > img {
    width: auto;
    height: 4rem;
  }
  .goods-item-desc {
    padding: 0 0.5rem;
  }
  .goods-item-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-item-name,.goods-item-price {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-item-price {
    color: #ff8000;
    float: right;
  }
</style>
