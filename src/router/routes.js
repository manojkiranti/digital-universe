
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
        component: () => import('../views/pages/home/home'),
       
      },
      
      
      
    ]
  },
  {
      path: '/digital-service',
      name: 'DigitalService',
      component: () => import('../views/pages/home/InnerPage'),
      children: [
        { 
          path: '/online-account/sarbashrestha',
          name: 'Sarbashrestha',
          component: () => import('../views/pages/home/sarbashrestha'),
         
        },
        { 
          path: '/online-account/nari-bachat',
          name: 'NariBachat',
          component: () => import('../views/pages/home/nari-bachat'),
        },
        { 
          path: '/online-account/jestha-bachat',
          name: 'NariBachat',
          component: () => import('../views/pages/home/jestha-bachat'),
        },
        { 
          path: '/online-account/muddati',
          name: 'Muddati',
          component: () => import('../views/pages/home/muddati'),
        },
        { 
          path: '/online-account/sajha-bachat',
          name: 'SajhaBachat',
          component: () => import('../views/pages/home/sajha-bachat'),
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
        {
          path: 'online-account',
          name: 'OnlineAccount',
          component: () => import('../views/pages/online-services/online-account')
        },
        {
          path: 'demat',
          name: 'OnlineDemat',
          component: () => import('../views/pages/online-services/demat')
        },
        {
          path: 'fixed-deposit',
          name: 'OnlineFixedDeposit',
          component: () => import('../views/pages/online-services/fixed-deposit')
        },
        {
          path: 'mero-share',
          name: 'MeroShare',
          component: () => import('../views/pages/online-services/mero-share')
        },
        {
          path: 'loan',
          name: 'OnlineLoan',
          component: () => import('../views/pages/online-services/loan')
        },
        {
          path: 'insta-buy',
          name: 'InstaBuy',
          component: () => import('../views/pages/online-services/insta-buy')
        },
        {
          path: 'asba',
          name: 'IPO',
          component: () => import('../views/pages/online-services/ipo')
        },
        {
          path: 'merchant',
          name: 'Merchant',
          component: () => import('../views/pages/online-services/merchant')
        },
        {
          path: 'mobank/new-register',
          name: 'Merchant',
          component: () => import('../views/pages/online-services/mobank/new-register')
        },
        {
          path: 'mobank/reset-pin',
          name: 'Merchant',
          component: () => import('../views/pages/online-services/mobank/reset-pin')
        },
        {
          path: 'mobank/unblock',
          name: 'Merchant',
          component: () => import('../views/pages/online-services/mobank/unblock')
        },
        {
          path: 'mobank/block',
          name: 'Merchant',
          component: () => import('../views/pages/online-services/mobank/block')
        },
        {
          path: 'card/new-card',
          name: 'NewCard',
          component: () => import('../views/pages/online-services/card/new-card')
        },
        {
          path: 'card/e-com',
          name: 'ECom',
          component: () => import('../views/pages/online-services/card/e-com')
        },
        {
          path: 'card/dollar-card',
          name: 'DollarCard',
          component: () => import('../views/pages/online-services/card/dollar-card')
        },
        {
          path: 'card/repin',
          name: 'CardRepin',
          component: () => import('../views/pages/online-services/card/card-repin')
        },
      ]
  }

]
