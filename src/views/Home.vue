<template>
  <div class="home">
    <router-view />
    <van-tabbar :safe-area-inset-bottom="true" v-model="active" active-color="#F59DAD" @change="onChange">
      <van-tabbar-item to="/main" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/community" icon="search">交流</van-tabbar-item>
      <van-tabbar-item to="/love" icon="like-o">关爱</van-tabbar-item>
      <van-tabbar-item to="/tool" icon="setting-o">工具</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import { Notify } from "vant";

Vue.use(Notify);
export default {
  name: "Home",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onChange(index) {
      //Notify({ type: "primary", message: index });
    }
  },
  components: {}
};
</script>
