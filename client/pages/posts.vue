<template>
  <div style="margin: 2rem; text-align: center">
    <h1>Twig posts</h1>
    <h3 v-if="loading">Loading ...</h3>

    <TwigRenderer
      v-else
      template-path="templates/posts.twig"
      :options="templateOptions"
    />
  </div>
</template>

<script lang="ts">
import { Post } from '@common/PostInterface';
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PostsComponent extends Vue {
  templateOptions: { posts: Post[] } = {
    posts: [],
  };

  loading = true;

  async fetch() {
    return this.fetchPosts();
  }

  async fetchPosts() {
    try {
      this.loading = true;

      this.templateOptions.posts = (await this.$axios.get('posts'))?.data ?? [];
    } finally {
      this.loading = false;
    }
  }
}
</script>
