<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <p>Add a new post</p>
		<el-row>
			<router-link to="/post/add"><el-button>Create a new post</el-button></router-link>
		</el-row>

		<p>My posts</p>
		<Card />
  </div>
</template>

<style scoped>
	p {
		padding-top: 20px;
		font-family: 'Libre Baskerville', serif;
		font-size: 1.3em;
		color: #2a2a2a;
	}
</style>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'home',
  components: {
    Card,
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
