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
    </van-row>首页
  </div>
</template>

<script>
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
}
</style>
