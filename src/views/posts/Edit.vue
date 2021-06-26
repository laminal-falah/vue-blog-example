<template>
  <slot v-if="error">{{ error }}</slot>
  <slot v-if="post">
    <Header :title="'Update Post'" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/contact-bg.jpg') + ')' }"/>
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="my-5">
              <form @submit.prevent="handleSubmit">
                <div class="form-floating">
                  <input class="form-control" id="inputTitle" type="text" placeholder="Enter title..." v-model="post.title" required/>
                  <label for="inputTitle">Title</label>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" id="inputBody" placeholder="Enter your body here..." style="height: 12rem" v-model="post.body" required></textarea>
                  <label for="inputBody">Body</label>
                </div>
                <br />
                <button class="btn btn-primary text-uppercase" type="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </slot>
  <slot v-else>
    <Loading />
  </slot>
</template>

<script>
import Header from "@/components/core/Header";
import Loading from "@/components/core/Loading";
import {useRouter} from "vue-router";
import getPost from "@/composable/getPost";
import { db, firebase} from "@/firebase/config";

export default {
  name: "Update",
  components: {Header, Loading},
  props: ['id'],
  setup(props) {
    const router = useRouter()
    const { post, error, load } = getPost(props.id)

    load()

    const handleSubmit = async (value) => {
      const postRequest = {
        title: value.target[0].value,
        body: value.target[1].value,
        updatedAt: firebase.firestore.Timestamp.now()
      }

      await db.collection("posts").doc(props.id).update(postRequest)

      await router.push({
        name: 'Show'
      })
    }

    return { post, error, handleSubmit }
  }
}
</script>

<style scoped>

</style>
