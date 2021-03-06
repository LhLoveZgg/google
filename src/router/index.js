import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/layout/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/components/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }]
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: resolve => require(['@/components/ContactUs'], resolve),
      meta: {
        title: '联系我们'
      },
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: resolve => require(['@/components/AboutUs'], resolve),
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: resolve => require(['@/components/Product'], resolve),
      meta: {
        title: '产品列表'
      }
    },
    {
      path: '/products/bigData',
      name: 'prodetail',
      query: { ProId: 123 },
      component: resolve => require(['@/components/ProDetail'], resolve),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/products/smartTown',
      name: 'prodetail',
      query: { ProId: 123 },
      component: resolve => require(['@/components/ProDetail'], resolve),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/components/News'], resolve),
      meta: {
        title: '新闻列表'
      }
    }
  ]
})
