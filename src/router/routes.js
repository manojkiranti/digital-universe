
export default [
  {
    path: '/quick-menu',
    component: () => import('../views/pages/home/BannerPage'),
    name: 'DigitalUniverse',
  },

  {
    path: '/',
    component: () => import('../views/pages/home/index'),
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'HomeBody',
        component: () => import('../views/pages/home/home')
      },
      {
        path: '/offers',
        name: 'OfferPage',
        component: () => import('../views/pages/offers/index')
      },
      {
        path: '/branches',
        name: 'Branches',
        component: () => import('../views/pages/branches/index')
      },
      {
        path: '/support',
        name: 'support',
        component: () => import('../views/pages/contact/index')
      },
    ]
  },

]
