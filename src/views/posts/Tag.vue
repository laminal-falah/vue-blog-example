<template>
  <Header :title="'Tag'" :subtitle="'Posts by Tag'" />
  <PostList :posts="postsWithTags" :errors="errors" />
</template>

<script>
import Header from "@/components/core/Header";
import PostList from "@/components/PostList";
import {computed} from "vue";
import getPosts from "@/composable/getPosts";
import {useRoute} from "vue-router";

export default {
  name: "Tag",
  components: {
    PostList,
    Header
  },
  setup() {
    const route = useRoute()

    const { posts, errors, load } = getPosts()

    load()

    const postsWithTags = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })

    return { postsWithTags, errors }
  }
}
</script>
