<template>
  <el-card class="feed-card margin-me">
    <div slot="header" class="clearfix">
      <span class="title">{{title}}</span>
      <div><span class="credit">John Smith</span></div>
      <div>
        <span class="details">
          {{formatDate(created_at)}} ago · {{readtime}} min read
        </span>
      </div>
    </div>
    <div class="text item">
      {{ content }}
    </div>
    <el-row type="flex" justify="end">
      <el-button
        plain size="small"
        v-on:click="displayArticle"
      >
      Read more
      </el-button>
    </el-row>
  </el-card>
</template>

<script>
import { distanceInWords } from 'date-fns';

export default {
  name: 'Card',
  props: {
    id: Number,
    title: String,
    readtime: Number,
    created_at: String,
    content: String,
  },
  methods: {
    formatDate(date) {
      return distanceInWords(new Date(date), new Date());
    },
    displayArticle() {
      this.$router.push({ name: 'posts.show', params: { id: this.id } });
    },
  },
};
</script>


<style scoped>
  .margin-me {
  margin-bottom: 20px;
  }
  .title {
  font-family: 'Libre Baskerville', serif;
  }

  .credit {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  margin-left: 5px;
  }

  .details {
  font-family: 'Open Sans', sans-serif;
  color: #7c7c7c;
  margin-left: 5px;
  }

  .text {
  font-family: 'Libre Baskerville', serif;
  line-height: 33px;
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
  }

</style>
