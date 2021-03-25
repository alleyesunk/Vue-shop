<template>
  <section>
    <div class="login_container">
      <div class="login_box">
        <div class="login_img">
          <img src="../assets/logo.png" width="400px" height="500px" alt="" />
        </div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          class="formBox"
        >
          <h2>Sign In</h2>
          <div class="input">
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                placeholder="Username"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="Password"
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-form-item>
          </div>
          <el-button type="primary" @click="login" round>登录</el-button>
          <el-button type="info" @click="resetLoginForm" round>重置</el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        if (res.meta.status !== 200) return this.$message.error("登录失败！");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/Home");
      });
    },
  },
};
</script>

<style Lang="less" scoped>
section {
  position: relative;
  min-height: 94.5vh;
  background-color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.login_container {
  text-align: center;
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.login_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.login_img {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}
.login_img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.formBox {
  width: 50%;
  background: #fff;
  padding: 50px;
  transition: 0.5s;
}
.input {
  height: 160px;
  margin-top: 60px;
}
</style>