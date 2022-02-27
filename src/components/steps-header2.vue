<template>
  <header id="landing-header">
    <!--Main menu-->
    <div class="menu main-header">
      <div class="container container-sm menu__wrapper">
        <div class="row align-items-center">
          <div class="col-md-3">
            <div class="menu__logo menu__item">
              <a href="/">
                <span class="logo-wrap">
                    <span class="logo-text">
                      <span class="logo-tt"> Digital Universe</span> 
                    </span>
                    <span class="logo-img">
                      <span class="logo-sub-text">by</span>
                      <img
                        class="menu__logo-img"
                        src="@/assets/images/NIC-ASIA-BANK-BANNER.png"
                        alt=""
                      />
                    </span>
                </span>
              </a>
            </div>
          </div>
          <div class="col-md-6"></div>
          <!-- <div class="col-md-6 mobile-static">
            <button
              class="sidemenu__btn"
              v-on:click="navOpen = !navOpen"
              v-bind:class="{ active: navOpen }"
            >
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bottom"></span>
            </button>
            <div class="menu__item d-m-none">
              <nav class="menu__center-nav">
                <ul>
                  <li>
                    <a @click="goTo('products')" class="link link--gray"  :class="{'active': activeClass.productSectionActive}"
                      >Products</a
                    >
                  </li>
                  <li>
                    <a @click="goTo('productInfo')" class="link link--gray" :class="{'active': activeClass.bodySectionActive}"
                      >Description</a
                    >
                  </li>
                  <li>
                    <a @click="goTo('tutorial')" class="link link--gray" :class="{'active': activeClass.videoSectionActive}"
                      >Tutorial</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div> -->
          <div class="col-md-3  mobile-static">
            <div class="menu__item menu_item_buttons">
              <nav class="menu__right-nav d-l-none">
                <ul>
                  <li>
                    <router-link
                      to="/login"
                      tag="a"
                      class="btn btn-white btn-mid-width"
                      >Login</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/register"
                      tag="a"
                      class="btn btn-primary ml-2 btn-mid-width"
                    
                      >Register
                    </router-link>
                  </li>
                  <li>
                    <button
                          type="button"
                          class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
                          @click="toggleRightSidebar"
                        >
                          <font-awesome-icon
                              :icon="['fal', 'cog']"
                              class="menu-icon"
                          />
                    </button>
                  </li>
                </ul>
              </nav>
               <div class="d-none d-t-block">
                <button type="button" class="menu__mobile-button" @click="navOpen = !navOpen">
                  <span> <font-awesome-icon
                              :icon="['fal', 'bars']"
                              class="menu-icon"
                          /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-nav">
        <div class="container container-sm">
          <div class="row">
            <div class="col-md-12">
              <ul class="main-menu">
                <li><a href="#" class="active">
                  <font-awesome-icon
                    :icon="['fal', 'home']"
                    class="menu-icon"
                  />
                  Home</a></li>
                 <li><a href="#" >
                  <font-awesome-icon
                    :icon="['fal', 'money-check-edit']"
                    class="menu-icon"
                  />
                  Loans</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Main menu-->
    <transition name="translateX">
      <div class="main-menu-item" v-show="navOpen">
        <button
              class="sidemenu__btn"
              v-on:click="navOpen = !navOpen"
              v-bind:class="{ active: navOpen }"
            >
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bottom"></span>
            </button>
        <div class="menu__item d-t-none">
          <nav class="nav-mobile">
            <ul>
              <li>
                <a  class="link link--gray"
                  ><font-awesome-icon
                    :icon="['fal', 'home']"
                    class="menu-icon"
                  /> Home</a
                >
              </li>
              <li>
                <a class="link link--gray"
                  ><font-awesome-icon
                    :icon="['fal', 'money-check-edit']"
                    class="menu-icon"
                  />Loans</a
                >
              </li>
              <li>
                <a  class="link link--gray"
                  ><font-awesome-icon
                    :icon="['fal', 'badge-percent']"
                    class="menu-icon"
                  />Offers</a
                >
              </li>
              <li>
                <a  class="link link--gray"
                  ><font-awesome-icon
                    :icon="['fal', 'headset']"
                    class="menu-icon"
                  /> Help & Support</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    activeClass:{
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      navOpen: false,
    };
  },
  mounted() {},
  methods: {
      toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    goTo(val) {
      this.$emit("scrollTo", val);
    },
  },
};
</script>