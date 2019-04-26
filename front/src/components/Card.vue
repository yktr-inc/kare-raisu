<template>
  <el-card class="feed-card">
    <div slot="header" class="clearfix">
      <span>Card name</span>
      <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
    </div>
    <div class="text item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </el-card>
</template>

<style scoped>
  .text {
    font-size: 14px;
  }

  .feed-card{
    margin-top: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

<script>
export default {
  name: 'Card',
};
</script>
