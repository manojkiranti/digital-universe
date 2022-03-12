<template>
  <div class="digital-universe-home">
    <Header />
    <div class="home-body-main">
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import Header from "./components/header.vue";


import Mobile from "../../../lib/mixins/Mobile";

export default {
  name: "Home",
  mixins: [Mobile],
  components: {
    Header,
 
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