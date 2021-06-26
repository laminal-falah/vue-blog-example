<template>
  <header class="masthead" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/home-bg.jpg') + ')' }">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>{{ title }}</h1>
            <span v-if="subtitle" class="subheading">{{ subtitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['title', 'subtitle']
}
</script>
