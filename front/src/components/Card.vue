<template>
  <el-card class="feed-card">
    <div slot="header" class="clearfix">
      <span class="title">Lorem ipsum dolor sit amet</span>
      <div><span class="credit">John Smith</span>
      <span class="details"> · 1 hour ago · 3 comments</span></div>
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
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Open+Sans:400,600|PT+Serif');

  .title {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.4em;
  }

  .credit {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95em;
    font-weight: 600;
    margin-left: 2px;
  }

  .details {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95em;
    color: #7c7c7c;
    margin-left: 2px;
  }

  .text {
    font-family: 'Libre Baskerville', serif;
    font-size: 1em;
    line-height: 25px;
  }

  .feed-card{
    margin-top: 20px;
  }

  .item {
    margin-bottom: 5px;
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

  .el-card {
    color: #2a2a2a;
    border-radius: 0px;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05)!important;
  }
</style>

<script>
export default {
  name: 'Card',
};
</script>
