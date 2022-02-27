<script>
import simplebar from "simplebar-vue";
import i18n from "../i18n";

export default {
  data() {
    return {
      currentUser: {},
      username: '',
      languages: [
        // {
        //   flag: require("@/assets/images/flags/us.jpg"),
        //   language: "en",
        //   title: "English",
        // },
        // {
        //   flag: require("@/assets/images/flags/french.jpg"),
        //   language: "fr",
        //   title: "French",
        // },
        // {
        //   flag: require("@/assets/images/flags/spain.jpg"),
        //   language: "es",
        //   title: "spanish",
        // },
        // {
        //   flag: require("@/assets/images/flags/chaina.png"),
        //   language: "zh",
        //   title: "Chinese",
        // },
        // {
        //   flag: require("@/assets/images/flags/arabic.png"),
        //   language: "ar",
        //   title: "Arabic",
        // },
      ],
      current_language: "en",
      
    };
  },
  components: { simplebar },
  mounted () {
    this.currentUser = this.$store.getters.currentUser;
    console.log('user',this.currentUser)
    this.username = this.currentUser.user.username.split(" ")[0]
  },
  methods: {
    viewProfile () {
      this.$router.push('/profile')
    },
    logout() {
      this.$store.dispatch("logout");
      this.$store.commit("LOGOUT");
      this.$router.push("/login");
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    setLanguage(locale) {
      i18n.locale = locale;
      this.current_language = i18n.locale;
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/nic-asia-bank-white.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/nic-asia-bank-white.png" alt height="20" />
            </span>
          </a>

          <a href="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/nic-asia-bank-sm.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/nic-asia-bank-white.png" alt height="50" />
            </span>
          </a>
        </div>

        <button
          @click="toggleMenu"
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item waves-effect"
          id="vertical-menu-btn"
        >
          <font-awesome-icon :icon="['fal', 'bars']" class="align-middle" />
        </button>

        <!-- App Search-->
        <!-- <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('navbar.search.text')"
            />
            <font-awesome-icon :icon="['fal', 'search']" />
          </div>
        </form> -->

      </div>

      <div class="d-flex">
   

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            @click="initFullScreen"
          >
           
            <font-awesome-icon :icon="['fas', 'expand-wide']" />
          </button>
        </div>


        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown"
        >
          <template v-slot:button-content>
            <!-- <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/avatar-6.jpg"
              alt="Header Avatar"
            /> -->
            <font-awesome-icon :icon="['fal', 'user']" />
            <span class="d-none d-xl-inline-block ml-1">{{username}}</span>
            <font-awesome-icon :icon="['fal', 'chevron-down']" class="d-none d-xl-inline-block ml-1" />
          </template>
          <!-- item-->
          <!-- <a class="dropdown-item" href="#">
            <i class="ri-user-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.profile') }}
          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-wallet-2-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.mywallet') }}
          </a>
          <a class="dropdown-item d-block" href="#">
            <span class="badge badge-success float-right mt-1">11</span>
            <i class="ri-settings-2-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.settings') }}
          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-lock-unlock-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.lockscreen') }}
          </a> -->
          <div class="dropdown-divider"></div>
          <!-- <a class="dropdown-item" @click="viewProfile">
            <i class="ri-account-circle-line align-middle mr-1"></i>
            Profile
          </a> -->
          <a class="dropdown-item text-danger" @click="logout">
            <i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
            {{ $t("navbar.dropdown.kevin.list.logout") }}
          </a>
        </b-dropdown>

        <!-- <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="ri-settings-2-line toggle-right"></i>
          </button>
        </div> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.notify-item {
  .active {
    color: #16181b;
    background-color: #f8f9fa;
  }
}
</style>