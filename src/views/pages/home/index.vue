<template>
  <div class="digital-universe-home">
    <Header />
    <div class="home-body-main">
      <router-view></router-view>
    </div>
    <FooterNav />
  </div>
</template>
<script>
import Header from "./components/header.vue";

import FooterNav from "./components/footer-nav.vue";
import Mobile from "../../../lib/mixins/Mobile";

export default {
  name: "Home",
  mixins: [Mobile],
  components: {
    Header,
    FooterNav,
  },
  data() {
    return {
      headerTitle: "NIC ASIA ONLINE SERVICES",
    };
  },
  mounted() {},
  created() {},
  destroyed() {},
  methods: {},
};
</script>