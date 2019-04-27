<template>
<el-container>
  <el-container>
    <el-header class="fixed-navbar">
      <el-menu :router=true class="el-menu-main" mode="horizontal">
        <el-menu-item route="/">Kare kaisu</el-menu-item>
        <el-submenu index="6" class="right-menu-el">
          <el-menu-item index="1-1" route="/profile">Profile</el-menu-item>
          <el-menu-item index="1-2">Settings</el-menu-item>
          <el-menu-item route="logout" index="1-3">Logout</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-0" class="right-menu-el">
            <el-badge is-dot class="item badge-icon"/>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="el-main">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <router-view />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style scoped>
  .right-menu-el{
    float: right !important;
  }
  .sidebar-header{
    margin: 20px;
  }
  .sidebar-logo{
    width: 60px;
  }
  .sidebar-sitename{
    margin-top: 0px;
    font-weight: 600;
  }
  .badge-icon{
    position: absolute;
    right: 10px;
    top: -10px;
  }
  .navbar-avatar{
    width: 30px;
    border-radius: 50px;
  }
  .fixed-navbar{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    background: #FFF;
    z-index: 1;
  }
  .el-main{
    margin-top: 50px;
  }
</style>
