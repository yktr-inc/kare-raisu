<template>
  <el-card class="feed-card">
    <div slot="header" class="clearfix">
      <span class="title">Lorem ipsum dolor sit amet</span>
      <div><span class="credit">John Smith</span></div>
      <div><span class="details">April 27 · 5 min read</span></div>
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
    id: Number,
    title: String,
    readtime: Number,
    created_at: Date
    ,
  }
};
</script>


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

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height: 200px;
    object-fit: cover;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  span{
    font-weight: bold;
    font-size: 21px;
  }

  .el-card {
    color: #2a2a2a;
    border-radius: 0px;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05)!important;
  }
</style>

