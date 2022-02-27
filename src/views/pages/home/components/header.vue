<template>
  <header id="home-header">
    <!--Main menu-->
    <div class="menu main-header">
      <div class="container container-sm menu__wrapper">
        <div class="row align-items-center">
          <div class="col-2">
            <div class="menu__item">
              <div class="d-none d-t-block">
                <button
                  type="button"
                  class="menu__mobile-button"
                  @click="navOpen = !navOpen"
                >
                  <span>
                    <font-awesome-icon
                      :icon="['fal', 'bars']"
                      class="menu-icon"
                  /></span>
                </button>
              </div>
            </div>
          </div>

          <div class="col-8">
            <div class="menu__logo menu__item">
              <a href="/">
                <span class="logo-wrap">
                  <span class="logo-img">
                    <!-- <span class="logo-sub-text">by</span> -->
                    <img
                      class="menu__logo-img"
                      src="@/assets/images/NIC-ASIA-BANK-BANNER.png"
                      alt=""
                    />
                  </span>
                  <span class="logo-text">
                    <span class="logo-tt"> Digital Universe</span>
                  </span>
                  
                </span>
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="user-login">
              <span class="user-icon">
                <font-awesome-icon :icon="['fal', 'user']" class="menu-icon" />
              </span>
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
          <font-awesome-icon :icon="['fal', 'times']" class="menu-icon" />
        </button>
        <div class="menu__item d-t-none">
          <nav class="nav-mobile">
            <ul>
              <li @click="navOpen = false">
                <router-link class="nav-link" to="/home">
                  <span>
                    <font-awesome-icon
                      :icon="['fal', 'home']"
                      class="nav-icon"
                    />
                    <span class="nav-text">Home</span>
                  </span>
                </router-link>
              </li>
              <li @click="navOpen = false">
                <router-link class="nav-link" to="/offers" >
                  <span>
                    <font-awesome-icon
                      :icon="['fal', 'badge-percent']"
                      class="nav-icon"
                    />
                    <span class="nav-text">Offers</span>
                  </span>
                </router-link>
              </li>
              <li @click="navOpen = false">
                <router-link class="nav-link" to="/branches">
                  <span>
                    <font-awesome-icon
                      :icon="['fal', 'university']"
                      class="nav-icon"
                    />
                    <span class="nav-text">Branches</span>
                  </span>
                </router-link>
              </li>
              <li @click="navOpen = false">
                <router-link class="nav-link" to="/support">
                  <span>
                    <font-awesome-icon
                      :icon="['fal', 'cog']"
                      class="nav-icon"
                    />
                    <span class="nav-text">Support</span>
                  </span>
                </router-link>
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
    activeClass: {
      type: Object,
      default: () => {},
    },
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