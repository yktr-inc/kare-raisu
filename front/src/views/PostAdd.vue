<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <p>Add a post</p>
    	
    	<el-row>
				<el-button>Post</el-button>
			</el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>

<style scoped>
	p {
		padding-top: 20px;
		font-family: 'Libre Baskerville', serif;
		font-size: 1.3em;
		color: #2a2a2a;
	}
  .el-input {
  	margin-bottom: 15px;
  	font-size:1.1em;
  }
  .el-button {
  	margin-top: 10px;
  	font-family: 'Libre Baskerville', serif;
		font-size: 1em;
		color: #2a2a2a;
		float: right;
  }
</style>