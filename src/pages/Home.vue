<template>
  <div class="hello">
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <goods-list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"
                    :key="item.title"></goods-list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import HomeHeader from '../components/HomeHeader';
  import CommonFooter from '../components/CommonFooter';
  import GoodsList from '../components/GoodsList';

  export default {
    components: { GoodsList, CommonFooter, HomeHeader },
    name: 'HelloWorld',
    data() {
      return {
        items: [{
          price: 10,
          title: 'vv',
          img: '',
        }, {
          price: 20,
          title: 'ccc',
          img: '',
        }, {
          price: 30,
          title: 'hahaha',
          img: '',
        }],
      };
    },
    created() {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      axios.get('/api/goods')
        .then((response) => {
          this.items = response.data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
  };
</script>


<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .content {
    margin-bottom: 1.8rem;
  }

  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }

  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
