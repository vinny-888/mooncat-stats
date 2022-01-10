import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Coat from '../views/Coat.vue';
import Pose from '../views/Pose.vue';
import Expressions from '../views/Expressions.vue';
// import Hue from '../views/Hue.vue';
// import npgoress from 'nprogress';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coats',
    name: 'Coat',
    component: Coat
  },
  {
    path: '/poses',
    name: 'Pose',
    component: Pose
  },
  {
    path: '/expressions',
    name: 'Expressions',
    component: Expressions
  },
  // {
  //   path: '/hues',
  //   name: 'Hues',
  //   component: Hue
  // },
]

const router = new VueRouter({
  base: '/stats/',
  assetsDir: '/stats/',
  assetsPublicPath: '/stats/',
  publicPath: '/stats/',
  routes
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    // npgoress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  // npgoress.done()
})


export default router
