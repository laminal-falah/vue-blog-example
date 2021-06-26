<template>
  <div class="post-preview">
    <router-link :to="{ name: 'Show', params: { id: post.id }}">
      <h2 class="post-title">{{ post.title }}</h2>
      <h3 class="post-subtitle" style="text-align: justify">{{ snippet }}</h3>
    </router-link>
    <span v-for="tag in post.tags" :key="tag" class="badge rounded-pill bg-light" style="margin-right: 5px">
      <router-link :to="{ name: 'Tag', params: { tag }}">
        #{{ tag }}
      </router-link>
    </span>
    <p class="post-meta">
      Posted by
      <a href="#">Start Bootstrap</a>
      on {{ post.datetime }}
    </p>
  </div>
  <hr class="my-4" />
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Post',
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substr(0, 100) + '...'
    })

    return { snippet }
  }
}
</script>
