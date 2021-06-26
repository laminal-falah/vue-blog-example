<template>
  <footer class="border-top">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-2x">
                  <i class="fab fa-twitter fa-stack-1x"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-2x">
                  <i class="fab fa-facebook-f fa-stack-1x"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-2x">
                  <i class="fab fa-github fa-stack-1x"></i>
                </span>
              </a>
            </li>
          </ul>
          <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website {{ year }} v.{{ version }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';

export default {
  name: "Footer",
  setup() {
    const yearDevelopment = 2021
    const currentYear = new Date().getFullYear()
    const year = computed(() => currentYear > yearDevelopment ? `${yearDevelopment} - ${currentYear}` : currentYear);

    const version = require('../../../package.json').version
    return { version, year }
  }
}
</script>
