<template>
<el-container>
  <el-container>
    <el-header>
      <el-menu :router=true class="el-menu-demo" mode="horizontal">
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
    <el-main>
      <router-view />
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
</style>
