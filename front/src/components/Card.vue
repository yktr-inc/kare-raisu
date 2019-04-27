<template>
  <el-card class="feed-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">{{ edit }}</el-button>
    </div>
    <div class="text item">
      {{ content }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    content: String,
    title: String,
    edit: String
  }
};
</script>


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

