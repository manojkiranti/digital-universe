<template>
  <div class="digital-universe-home">
    <Header />
    <div class="home-body-main">
        <OnlineProduct />
    </div>
  </div>
</template>
<script>
import Header from "./components/header.vue";
import OnlineProduct from "./components/online-products.vue";
import Mobile from "../../../lib/mixins/Mobile";

export default {
  name: "BannerPage",
  mixins: [Mobile],
  components: {
    OnlineProduct,
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