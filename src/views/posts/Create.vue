<template>
  <Header :title="'Create new Post'" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/contact-bg.jpg') + ')' }" />
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating">
                <input class="form-control" id="inputTitle" type="text" placeholder="Enter title..." v-model="title" required/>
                <label for="inputTitle">Title</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" id="inputBody" placeholder="Enter your body here..." style="height: 12rem" v-model="body" required></textarea>
                <label for="inputBody">Body</label>
              </div>
              <div class="form-floating">
                <input class="form-control" id="inputTags" type="text" placeholder="Enter your tag..." @keydown.enter.prevent="handleKeyDown" v-model="tag"/>
                <label for="inputTags">Tags</label>
              </div>
              <div class="form-floating">
                <span v-for="tag in tags" :key="tag" class="badge rounded-pill bg-secondary" style="margin-right: 5px">#{{ tag }}</span>
              </div>
              <br />
              <button class="btn btn-primary text-uppercase" type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/core/Header";
import { db, firebase } from "@/firebase/config";

export default {
  name: "Create",
  components: {Header},
  setup() {
    const router = useRouter()
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, '')
        tags.value.push(tag.value)
      }

      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: firebase.firestore.Timestamp.now()
      }

      await db.collection('posts').add(post)

      await router.push({
        name: 'Home'
      })
    }

    return { title, body, tag, tags, handleKeyDown, handleSubmit }
  }
}
</script>

<style scoped>

</style>
