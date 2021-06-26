<template>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <router-link :to="{ name: 'Create' }" class="btn btn-primary btn-sm text-uppercase text-light">
          Create
        </router-link>
        <slot v-if="errors">
          {{ errors.error }}
        </slot>
        <slot v-if="posts.length" v-for="post in posts" :key="post.id">
          <Post :post="post" />
        </slot>
        <slot v-else>
          <Loading />
        </slot>

        <div class="d-flex justify-content-end mb-4">
          <router-link class="btn btn-primary text-uppercase" href="#!" to="">Older Posts →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
import {onMounted, onUnmounted, onUpdated} from "vue";
import Loading from "@/components/core/Loading";
export default {
  name: 'PostList',
  components: {
    Loading,
    Post
  },
  props: ['posts', 'errors']
}
</script>
