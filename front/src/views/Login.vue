<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <p>Login</p>
    <div class="login-logo"><img src="favicon.png"></div>
    	<el-input placeholder="Email" v-model="input1"></el-input>
    	<el-input placeholder="Password" v-model="input2"></el-input>

    <el-row>
      <el-button>Sign in</el-button>
  </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
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
  	font-size: 1.1em;
  }
  .el-button {
  	margin-top: 10px;
  	font-family: 'Libre Baskerville', serif;
		font-size: 1em;
		color: #2a2a2a;
		float: right;
  }
	.login-logo {
		text-align:center;
		margin: 20px;
	}
	.login-logo img {
		width: 90px;
		transition: 0.2s ease-out;
	}
	.login-logo img:hover {
		transform: scale(1.2);
	}
</style>
