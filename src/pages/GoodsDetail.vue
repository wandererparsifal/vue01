<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
      <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
      <common-footer></common-footer>
      <img :src="$route.params.imgPath" />
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader';
import CommonFooter from '../components/CommonFooter';

export default {
  data() {
    return {

    };
  },
  components: { DetailHeader, CommonFooter },
};
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 40%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
</style>
