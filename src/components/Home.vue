<template>
  <el-container class="home-container">
    <el-header>
      <div class="header">
        <div class="logo">
          <img src="../assets/mao.png" alt="" />
        </div>
        <div class="title">后台商城管理系统</div>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-main>
      <div class="aside">
        <el-row class="tac">
          <el-col style="width: 260px" :span="12">
            <h5>总览</h5>
            <el-menu router style="width: 260px" :default-active="$route.path">
              <el-menu-item-group
                :index="item.id + ''"
                v-for="item in MenuList"
                :key="item.id"
              >
                <template #title
                  ><i style="padding-right: 5px" :class="iconsObj[item.id]"></i
                  >{{ item.authName }}</template
                >
                <el-menu-item
                  :index="'/' + subItem.path"
                  v-for="subItem in item.children"
                  :key="subItem.id"
                  ><i class="el-icon-edit-outline"></i
                  >{{ subItem.authName }}</el-menu-item
                >
              </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
        <div class="main">
          <router-view></router-view>
        </div>
      </div>
    </el-main>
    <el-footer>Copyright © 2021 铭心</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      MenuList: [],
      iconsObj: {
        125: "el-icon-user",
        103: "el-icon-position",
        101: "el-icon-shopping-cart-full",
        102: "el-icon-notebook-2",
        145: "el-icon-data-line",
      },
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.MenuList = res.data;
    },
  },
};
</script>

<style Lang="less" >
.home-container {
  height: 100%;
}
.el-header {
  width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
}

.header {
  display: flex;
  height: 60px;
  line-height: 60px;
}

.header .logo {
  padding-right: 15px;
  height: 60px;
}

.header .logo img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  vertical-align: middle;
}

.header .title {
  font-size: 20px;
  font-weight: 300;
  color: #69c;
}

.aside {
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: auto;
  width: 1260px;
  padding: 10px 0 20px 0;
  background: #fff;
  box-shadow: 9px 10px 10px rgba(168, 165, 165, 0.5);
}

.aside h5 {
  border-right: 1px solid #dcdddf;
  font-weight: 400;
  font-size: 15px;
  color: #8e8f91;
  padding: 0 25px;
  height: 40px;
  width: 210px;
  margin: 25px 0 0 0;
}

.aside .tac {
  padding: 0;
}

.main {
  padding: 20px;
}

.el-main {
  background: #ecedee;
}

.el-footer {
  background: #fff;
  text-align: center;
  line-height: 60px;
  color: #8e8f91;
}
</style>