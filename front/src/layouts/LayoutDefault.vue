<template>
<el-container>
  <el-container>
    <el-header class="fixed-navbar">
      <el-menu :router=true class="el-menu-main" mode="horizontal">
        <el-menu-item route="/"><router-link to="/"><img class="logo" src="../assets/logo.svg"></router-link></el-menu-item>
        <el-submenu index="6" class="right-menu-el">
          <el-menu-item index="1-1" route="/profile">My profile</el-menu-item>
          <el-menu-item index="1-2" route="/settings">My posts</el-menu-item>
          <el-menu-item index="2" route="/posts/create"><PlusIcon /></el-menu-item>
          <el-submenu index="3" class="right-menu-el">
          <el-menu-item index="1-1" route="/profile">Profile</el-menu-item>
          <el-menu-item index="1-2" route="/settings">Settings</el-menu-item>
          <el-menu-item route="/logout" index="1-3">Logout</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-0" class="right-menu-el">
            <el-button size="medium" route="/login" type="primary">Sign in</el-button>
            <el-button size="medium" route="/register">Sign up</el-button>
            <BellIcon />
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
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import BellIcon from 'vue-material-design-icons/Bell.vue';
import UserIcon from 'vue-material-design-icons/Account.vue';

export default {
  name: 'LayoutDefault',
  components: {
    PlusIcon,
    BellIcon,
    UserIcon,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Open+Sans:400,600|PT+Serif');

  .el-menu-item {
    font-family: 'Open Sans', sans-serif;
  }
  .logo {
    width: 160px;
  }
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
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05)!important;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    background: #FFF;
    z-index: 1;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-main{
    margin-top: 50px;
  }
  .el-button {
    margin-left: 10px;
  }
</style>
