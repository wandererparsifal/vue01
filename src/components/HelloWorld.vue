<template>
  <div class="hello">
    <home-header></home-header>
    <goods-list></goods-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader';
  import CommonFooter from './CommonFooter';
  import GoodsList from './GoodsList';

  export default {
    components: { GoodsList, CommonFooter, HomeHeader },
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
