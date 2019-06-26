<template>
  <el-card class="feed-card">
    <div slot="header" class="clearfix">
      <div><span class="credit">Laurent Shade</span>
      <span class="details"> · 55 min ago</span></div>
    </div>
    <div class="text item">
      Comment here
    </div>
  </el-card>
</template>

<style scoped>
  .credit {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95em;
    font-weight: 600;
    margin-left: 0px;
  }

  .details {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.95em;
    color: #7c7c7c;
    margin-left: 0px;
  }

  .text {
    font-family: 'Libre Baskerville', serif;
    font-size: 1em;
    line-height: 25px;
  }

  .item {
    margin-bottom: 0px;
  }

  .feed-card{
    margin-top: 20px;
  }


  .box-card {
    width: 480px;
  }

  .el-card {
    color: #2a2a2a;
    border-radius: 0px;
    box-shadow: none!important;
  }
</style>

<script>
export default {
  name: 'Card',
};
</script>
