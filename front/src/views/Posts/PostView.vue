<template>
  <div>
    <div v-if="error">
      <h1> Oops there's an error fetching posts</h1>
    </div>
    <div>
      <div>{{post.title}}</div>
      <br>
      <div>{{post.subtitle}}</div>
      <br>
      <div>{{post.content}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Card from '@/components/Card';

export default {
  name: 'PostView',
  components: {
    Card
  },

  computed: mapState({
    post: state => state.posts.post,
    pending: state => state.posts.pending.posts,
    error: state => state.posts.error.posts
  }),
  methods: {
    ...mapActions([
      'getPost'
    ]),
  },
  created () {
    this.getPost({ params:  this.$route.params  });
  }
};
</script>
