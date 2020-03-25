<template>
  <div class="page">
    <van-swipe>
      <van-swipe-item>
        <img src="../../resources/guide1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../resources/guide2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <div class="start">
          <img src="../../resources/guide3.jpg" />
          <van-button class="start-button" size="small" type="default" @click="startclick()">立即开启</van-button>
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator"></div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Guide",
  components: {},
  data() {
    return {
      current: 0
    };
  },
  methods: {
    startclick() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped lang="less">
.page img {
  width: 100%;
  height: 100%;
}
.page img:nth-child(1) {
  background-color: red;
}
.van-swipe {
  height: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.start {
  .start-button {
    position: relative;
    bottom: 100px;
    display: block;
    margin: 0 auto;
    background-color: #f59dad;
    color: white;
    font-weight: bolder;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100px;
  }
}
</style>
