<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <p>Update your profile</p>
    	<el-input placeholder="Firstname" v-model="input1"></el-input>
    	<el-input placeholder="Lastname" v-model="input2"></el-input>
    	<el-input placeholder="Email" v-model="input3"></el-input>

    	<el-row>
  <el-button>Save</el-button>
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
	font-size: 1.6em;
	color: #2a2a2a;
	}
  .el-input {
  	margin-bottom: 15px;
  	font-size:1.1em;
  }
  .el-button {
  	margin-top: 10px;
  	font-family: 'Libre Baskerville', serif;
	font-size: 1.2em;
	color: #2a2a2a;
	float: right;
  }
</style>