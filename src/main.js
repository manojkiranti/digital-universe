import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserTie, faLock , faPhoneAlt,  faTh,faFileImage, faChevronDown, faBadgePercent,
  faRegistered,  faUserCheck,faUser,  faBars, faSearch,faUnlockAlt, faUniversity, faTimes,
  faHome, faHeadset, faCog, faMapMarkerAlt, faLongArrowLeft } 
      from '@fortawesome/pro-light-svg-icons'
import {  faExpandWide, faScrubber ,faIdCard, faGiftCard,faEnvelope,faEnvelopeOpen,faLandmark, faBriefcase, faBallotCheck, faDumpster,
   faMoneyCheckEdit, faDesktopAlt, faFileSignature, faCreditCard, faCalendarCheck, faMobileAlt, faUnlock, faKey, faBan, faUsdSquare,
    faBullseyePointer, } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCog, faBullseyePointer, faIdCard, faGiftCard, faCreditCard,faUserTie,faDesktopAlt, faLock,faUser, faHome, faPhoneAlt,
  faEnvelope,faEnvelopeOpen, faRegistered, faChevronDown,faUnlockAlt,
  faFileSignature, faUserCheck,  faMoneyCheckEdit, faTh, faFileImage, faBars, faSearch, faExpandWide, faHeadset,faBriefcase,
  faScrubber, faBadgePercent, faLandmark, faCalendarCheck,faMapMarkerAlt, faMobileAlt,faUnlock, faDumpster, faUsdSquare,
  faKey, faBan, faUniversity, faBallotCheck, faTimes, faLongArrowLeft ) 

Vue.component('font-awesome-icon', FontAwesomeIcon)


import router from './router'
// import store from '@/state/store'
// import i18n from './i18n'

import "@/assets/scss/app.scss";

// import './lib/datepicker/nepali.datepicker.v3.7.min.js';


// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// import { initFirebaseBackend } from './helpers/firebase/authUtils';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';


Vue.config.productionTip = false

// Vue.use(BootstrapVue);



Vue.component('apexchart', VueApexCharts)
export const bus = new Vue();
new Vue({
  router,
  // store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
