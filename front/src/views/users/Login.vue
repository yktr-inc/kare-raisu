<template>
  <div>
    <p>Login</p>
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
      input2: '',
    };
  },
};
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
