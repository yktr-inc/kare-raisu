<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

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
