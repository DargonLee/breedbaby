<template>
  <div class="page">
    <van-row type="flex" class="nav" align="center">
      <van-col span="20">
        <div @click="searchClick()">
          <van-search shape="round" disabled="true" placeholder="产检提醒" />
        </div>
      </van-col>
      <van-col span="2" offset="2">
        <van-icon name="chat-o" size="25" />
      </van-col>
    </van-row>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../resources/banner1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../resources/banner2.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="card">
      <van-row type="flex" align="center">
        <van-col span="4">
          <img src="../../resources/child.png" />
        </van-col>
        <van-col class="item2" span="4" offset="1">孕01周</van-col>
        <van-col class="item3" span="12">2019/10/01</van-col>
        <van-col class="item4" span="3">
          <img src="../../resources/icon3.png" />
        </van-col>
      </van-row>
      <p>宝宝变化：此时的胎宝宝还处在真正的史前状态，以精子、卵子的形态存在。</p>
      <p>妈妈变化：精子和卵子的质量，与准爸准妈的身体状况息息相关，所以在备孕前就应该养成良好的生活习惯哦。</p>
    </div>
    <div class="menuitem">
      <van-row type="flex" align="center">
        <van-col span="6">
          <img src="../../resources/eatcom.png" alt />
          <p>饮食推荐</p>
        </van-col>
        <van-col span="6">
          <img src="../../resources/ptime.png" alt />
          <p>产检时间</p>
        </van-col>
        <van-col span="6">
          <img src="../../resources/shop.png" alt />
          <p>购物单</p>
        </van-col>
        <van-col span="6">
          <img src="../../resources/oreat.png" alt />
          <p>能不能吃</p>
        </van-col>
        <van-col span="6">
          <img src="../../resources/bag.png" alt />
          <p>待产包</p>
        </van-col>
      </van-row>
    </div>
    <div class="tipcard">
      <van-row>
        <van-col class="item1" span="22">小贴士</van-col>
        <van-col class="item2" span="2">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
      <div class="scorllcard">
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  name: "Main",
  components: {},
  data() {
    return {};
  },
  methods: {
    searchClick() {
      this.$router.push({ path: "/searchpage" });
    }
  }
};
</script>

<style scoped lang="less">
.page {
  margin: 0 10px;
  .nav {
    margin: 10px 0;
    .item {
      background-color: #f8f8f8;
      border-radius: 20px;
      border: 1px solid #979797;
      height: 36px;
    }
  }
  .card {
    border-radius: 8px;
    box-shadow: 5px 5px 5px #f0f0f0;
    padding: 3px 0;
    .item2 {
      font-size: 18px;
    }
    .item3 {
      font-size: 12px;
      color: #696969;
    }
    .item4 {
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      color: #696969;
      font-size: 13px;
    }
  }
  .menuitem {
    margin-top: 32px;
    text-align: center;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }
  .tipcard {
    margin-top: 20px;
    .item1 {
      font-size: 18px;
      font-weight: bold;
    }
    .scorllcard {
      div {
        margin: 14px 0;
        width: 165px;
        height: 75px;
      }
      div:nth-child(1) {
        background: #FFA4B7;
        opacity:0.3;
      }
    }
  }
}
.my-swipe {
  img {
    width: 100%;
    height: 120px;
  }
}
</style>
