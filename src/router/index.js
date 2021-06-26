import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/posts/create',
    name: 'Create',
    component: () => import('@/views/posts/Create')
  },
  {
    path: '/posts/:id',
    name: 'Show',
    props: true,
    component: () => import('@/views/posts/Show'),
  },
  {
    path: '/posts/edit/:id',
    name: 'Edit',
    props: true,
    component: () => import('@/views/posts/Edit'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: () => import('@/views/posts/Tag')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes
})

export default router
