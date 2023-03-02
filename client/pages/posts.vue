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
  // async asyncData({ $axios }) {
  //   let loading = true;

  //   const posts: Post[] = (await $axios.get('api/posts'))?.data ?? [];

  //   loading = false;

  //   return {
  //     templateOptions: { posts: Post[]; name: string } = {
  //        posts: [],
  //        name: 'TWIG',
  //     },
  //     loading,
  //   };
  // }

  templateOptions: { posts: Post[]; name: string } = {
    posts: [],
    name: 'TWIG',
  };

  loading = true;

  async fetch() {
    return this.fetchPosts();
  }

  async fetchPosts(): Promise<void> {
    try {
      this.loading = true;

      this.templateOptions.posts =
        (await this.$axios.get('api/posts'))?.data ?? [];
    } finally {
      this.loading = false;
    }
  }
}
</script>
