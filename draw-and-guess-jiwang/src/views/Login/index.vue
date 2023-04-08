<template>
    <div>
      <div class="snow-container">
        <div class="snow foreground"></div>
        <div class="snow foreground layered"></div>
        <div class="snow middleground"></div>
        <div class="snow middleground layered"></div>
        <div class="snow background"></div>
        <div class="snow background layered"></div>
    </div>

    <div class="top-buttons-agileinfo">
        <a href="index.html" class="active">勿点</a>
    </div>
    <h1>进入趣猜</h1>
    <div class="main-agileits">
        <!--form-stars-here-->
        <div class="form-w3-agile">
            <h2 class="sub-agileits-w3layouts">登录系统</h2>
            <form action="#">
                <input type="text" v-model="formData.nickname" placeholder="请输入您的昵称" required="" />
                <div class="submit-w3l">
                  <el-form ref="loginForm1" inline :model="formData" :rules="rules">
          <el-form-item>
                      <el-button class="active" type="primary" @click="enterGame">进入游戏</el-button>
        </el-form-item></el-form>
                </div>
            </form>
        </div>

    </div>

  </div>
</template>

<script>
// import socket from '@/socket/index'
import { MessageBox } from 'element-ui'

export default {
  data() {
    return {
      // 表单信息
      formData: {
        nickname: ''
      },

      // 校验规则
      rules: {
        nickname: [{ required: true, message: '请输入您的昵称' }]
      }
    }
  },

  methods: {
    enterGame() {
      // 测试 socket 模块, 发消息的能力
      // socket.emit('check_user_exist', this.formData.nickname, isExist => {
      //   console.log(isExist)
      // })
      console.log(this.$refs.loginForm)

      this.$refs.loginForm1.validate(async flag => {
        if (!flag) return
        const nickname = this.formData.nickname
        // 判断昵称是否已经被人使用 （发送消息问服务器）封装到vuex的action中
        const isExist = await this.$store.dispatch('checkUserExist', nickname)
        if (isExist) {
          MessageBox.alert('大哥，该昵称已经被人占用了！换个吧')
        } else {
          // 昵称可用
          localStorage.setItem('nickname', nickname)
          // 跳转到首页即可
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style scoped>
@import '../../../style/css/snow.css';
@import '../../../style/css/style.css';

</style>
