<template>
  <div class="page">
    <van-row type="flex" class="nav" align="center">
      <van-col span="2">
        <div @click="back()">
          <van-icon name="arrow-left" />
        </div>
      </van-col>
      <van-col span="19">
        <van-search shape="round" v-model="value1" placeholder="产检提醒" />
      </van-col>
      <van-col span="3">
        <span>搜索</span>
      </van-col>
    </van-row>
    <div class="search-content">
      <p>热门搜索</p>
      <van-row class="row-item">
        <van-col @click="itemClick('1')" span="8">能不能吃</van-col>
        <van-col @click="itemClick('2')" span="8">能不能穿</van-col>
        <van-col @click="itemClick('3')" span="8">营养食谱</van-col>
      </van-row>
      <van-row class="row-item">
        <van-col @click="itemClick('4')" span="8">知识科普</van-col>
        <van-col @click="itemClick('5')" span="8">产检提醒</van-col>
        <van-col @click="itemClick('6')" span="8">购物清单</van-col>
      </van-row>
      <van-row class="row-item">
        <van-col @click="itemClick('7')" span="8">孕期心情</van-col>
        <van-col @click="itemClick('8')" span="8"></van-col>
        <van-col @click="itemClick('9')" span="8"></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  name: "SearchPage",
  components: {},
  data() {
    return {};
  },
  methods: {
    itemClick(index) {
        Toast(index);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.page {
  margin: 0 10px;
  .nav {
    margin-top: 10px;
    span > {
      color: #ff91a8;
    }
  }
  .search-content {
    font-size: 15px;
    margin: 0 50px;
    .row-item {
      margin: 10px 0;
    }
  }
}
</style>
