<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
		<Card />
		<p>Comments</p>
		<Comment />
		<el-row>
				<el-button>Add a comment</el-button>
		</el-row>
  </div>
</template>

<style scoped>
	p {
		padding-top: 20px;
		font-family: 'Libre Baskerville', serif;
		font-size: 1.3em;
		color: #2a2a2a;
	}
	.el-button {
		margin-top: 25px;
		float: right;
	}
</style>

<script>
import Card from '@/components/Card.vue';
import Comment from '@/components/Comment.vue';

export default {
  name: 'home',
  components: {
		Card,
		Comment
  },
  data: {
    data: [],
    isLoading: false
  },
  methods: {
    loadMore: function() {
      this.isLoading = true;

    }
  }
};
</script>