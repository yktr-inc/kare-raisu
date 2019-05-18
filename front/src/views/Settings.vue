<template>
  <div class="feed" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <p>Your settings</p>
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
