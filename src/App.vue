<template>
  <div id="app">
    <transition
       name="fade-transform" mode="out-in"
      >
    <router-view />
    </transition>
    <FooterNav />
  </div>
</template>

<script>
// import appConfig from "@/app.config";
import FooterNav from "./views/pages/home/components/footer-nav.vue";
export default {
  name: "app",
  components: {FooterNav}
  // page: {
  //   // All subcomponent titles will be injected into this template.
  //   titleTemplate(title) {
  //     title = typeof title === "function" ? title(this.$store) : title;
  //     return title ? `${title} | ${appConfig.title}` : appConfig.title;
  //   }
  // }
};
</script>