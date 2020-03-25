<template>
  <div class="page">
    <div class="header">
      <span :class="{active : isActiveLogin}" @click="loginClick('1')">登 陆</span>
      <span :class="{active : isActiveRegister}" @click="loginClick('2')">注 册</span>
    </div>
    <div class="content">
      <div v-show="isActiveLogin" class="login">
        <img class="logo" src="../../resources/logo.jpg" alt />
        <div class="item">
          <van-field v-model="username" placeholder="请输入用户名" />
        </div>
        <div class="item">
          <van-field v-model="passward" type="password" placeholder="请输入密码" />
        </div>
        <div
          class="loginbutton"
          :style="{background : isActiveLoginButton}"
          @click="loginAction()"
        >登陆</div>
        <p>忘记密码</p>
        <div class="otherlogin">
          <p>其他登陆方式</p>
          <div>
            <img src="../../resources/qq.png" />
            <img src="../../resources/sina.png" />
            <img src="../../resources/wechat.png" />
          </div>
        </div>
      </div>
      <div v-show="isActiveRegister" class="register">
          暂不支持注册
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "Login",
  components: {},
  data() {
    return {
      isActiveLogin: true,
      isActiveRegister: false,
      username: "",
      passward: "",
      loginButtonStatus: false
    };
  },
  computed: {
    isActiveLoginButton: function() {
      if (this.username == "" || this.passward == "") {
        this.loginButtonStatus = false;
        return "#858585";
      }
      this.loginButtonStatus = true;
      return "#ff8da0";
    }
  },
  methods: {
    loginAction() {
      if (this.loginButtonStatus) {
        if (this.username == "admin" && this.passward == "admin666") {
          this.$router.push({ path: "/personinfo" });
        } else {
          Toast("用户名或密码错误");
        }
      }
    },
    loginClick(index) {
      if (index == "1") {
        this.isActiveLogin = true;
        this.isActiveRegister = false;
      } else if (index == "2") {
        this.isActiveLogin = false;
        this.isActiveRegister = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
.page {
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
  .header {
    font-size: 18px;
    span {
      display: inline;
      &:nth-child(2) {
        margin-left: 20px;
      }
    }
  }
}
.active {
  color: #ff8da0;
  font-size: 20px;
}
.activebutton {
  background-color: #ff8da0;
}
.content {
  margin-top: 35px;
  text-align: center;
  .register {
      margin-top: 150px;
  }
  .login {
    text-align: center;
    .loginbutton {
      background-color: #858585;
      color: white;
      margin: 30px 20px 20px 20px;
      padding: 5px 0;
      border-radius: 20px;
    }
    .logo {
      width: 100px;
      height: 100px;
    }
    > p {
      color: #999898;
      text-align: right;
      font-size: 13px;
    }
    .otherlogin {
      > p {
        margin-top: 40px;
        color: #999898;
        font-size: 13px;
      }
      > div {
        img {
          width: 50px;
          height: 50px;
        }
        display: flex;
        justify-content: space-around;
        margin: 0 20px;
      }
    }
  }

  .item {
    border-bottom: 1px solid lightgray;
    margin: 22px;
  }
}
</style>
