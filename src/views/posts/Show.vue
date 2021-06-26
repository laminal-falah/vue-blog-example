<template>
  <slot v-if="error">{{ error }}</slot>
  <slot v-if="post">
    <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/post-bg.jpg') + ')' }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span v-for="tag in post.tags" :key="tag" class="badge rounded-pill bg-secondary" style="margin-right: 5px">#{{ tag }}</span>
              <span class="meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                on {{ post.datetime }}
              </span>
              <router-link :to="{ name: 'Edit', params: { id: post.id }}" class="btn btn-primary btn-sm">
                <i class="fa fa-pencil-alt"></i>&nbsp;
                <span>Update</span>
              </router-link>
              &nbsp;
              <button class="btn btn-danger btn-sm" @click="handleDelete">
                <i class="fa fa-trash-alt"></i>&nbsp;
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" style="text-align: justify">
            <p>{{ post.body }}</p>
          </div>
        </div>
      </div>
    </article>
  </slot>
  <slot v-else>
    <Loading />
  </slot>
</template>

<script>
import getPost from "@/composable/getPost";
import Loading from "@/components/core/Loading";
import {db} from "@/firebase/config";
import {useRouter} from "vue-router";

export default {
  name: 'Show',
  components: {Loading},
  props: ['id'],
  setup(props) {
    const router = useRouter()

    const { post, error, load } = getPost(props.id)

    load()

    const handleDelete = async () => {
      await db.collection('posts').doc(props.id).delete()

      await router.push({
        name: 'Home'
      })
    }

    return { post, error, handleDelete }
  }
}
</script>
