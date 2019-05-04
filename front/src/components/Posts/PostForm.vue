<template>
 <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="Subtitle">
      <el-input v-model="form.subtitle"></el-input>
    </el-form-item>
    <el-form-item label="Content">
     <el-input
        type="textarea"
        :rows="6"
        placeholder="Entrez quelque chose"
        v-model="form.content">
      </el-input>
    </el-form-item>
    <el-form-item label="Read time">
      <el-input v-model="form.readtime"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
   
  </el-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PostForm',
  data() {
      return {
        form: {
          title: '',
          subtitle: '',
          content: '',
          readtime: '',
        }
      }
    },
    methods: {
      ...mapActions([
        'postPost'
      ]),
      onSubmit() {
        this.postPost({ params:  this.$route.params  });
      }
    }
};
</script>

