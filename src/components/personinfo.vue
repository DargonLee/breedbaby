<template>
  <div class="page">
    <van-nav-bar title="个人信息" :fixed="true" />
    <div class="content">
      <div class="item">
        <van-field v-model="digit" type="digit" placeholder="这是您第几个宝宝" />
      </div>
      <div class="item">
        <span>{{bornTime}}</span>
        <span @click="show = true">请选择</span>
      </div>
      <div class="button" @click="doneClick()">完成</div>
    </div>
    <van-popup position="bottom" v-model="show">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @cancel="show = false"
        @confirm="confirmDataTime"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Notify } from "vant";

Vue.use(Notify);
export default {
  name: "PersonInfo",
  components: {},
  data() {
    return {
      bornTime: "您的预产期?",
      digit: "",
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    doneClick() {
      if (this.digit === "") {
        Notify({ type: "warning", message: "请输入完内容" });
        return;
      }
      if (this.bornTime.indexOf("?") != -1) {
        Notify({ type: "warning", message: "请输入完内容" });
        return;
      }
      this.$router.replace({ path: "/home" });
    },
    confirmDataTime(value) {
      this.show = false;
      this.bornTime = new Date(value).format("yyyy/MM/dd");
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return `${val}日`;
    }
  }
};
</script>

<style scoped lang="less">
@import url("../common/css/global.css");
.content {
  margin-top: 150px;
  margin-left: 33px;
  margin-right: 33px;
  font-size: 14px;
  color: #969797;
  .item {
    position: relative;
    border-bottom: 1px solid lightgray;
    margin: 22px;
    span {
      display: inline-block;
      margin-bottom: 10px;
      text-align: left;
      padding-left: 16px;
      &:nth-child(2) {
        position: absolute;
        right: 10px;
        color: #ff8da0;
      }
    }
  }
  .button {
    color: white;
    background-color: #ff8da0;
    border-radius: 20px;
    text-align: center;
    margin: 60px 25px 0 25px;
    font-size: 20px;
    padding: 4px 0;
  }
}
</style>
