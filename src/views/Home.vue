<template>
  <Header :title="'Home'" :subtitle="'My Blog'" />
  <PostList :posts="posts" :errors="error" />
</template>

<script>
import PostList from "@/components/PostList";
import getPosts from "@/composable/getPosts";
import Header from "@/components/core/Header";

export default {
  name: 'Home',
  components: {
    Header,
    PostList
  },
  setup() {
    const { posts, error, load } = getPosts();

    load()

    return { posts, error }
  }
}
</script>
