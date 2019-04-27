<template>
  <div>
    <div v-if="error">
      <h1> Oops there's an error fetching posts</h1>
    </div>
    <div v-if="pending">
      <vcl-list />
      <vcl-list />
      <vcl-list />
      <vcl-list />
    </div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="pending">
      <div v-for="post in posts">
        <Card :content="post.content" :title="post.title" :edit="toto" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { VclList } from 'vue-content-loading';
import Card from '@/components/Card';

export default {
  name: 'home',
  components: {
    VclList,
    Card
  },

  data() {
    return {
      page: 1,
    }
  },

  computed: mapState({
    posts: state => state.posts.posts,
    pending: state => state.posts.pending.posts,
    error: state => state.posts.error.posts
  }),
  methods: {
    ...mapActions([
      'getPosts'
    ]),
    loadMore() {
      //this.page = this.page + 1;
      //this.getPosts({ params: { page: this.page } });
    }
  },
  created () {
    this.getPosts({ params: { page: this.page } });
  }
};
</script>
