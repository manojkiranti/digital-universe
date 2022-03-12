<template>
  <div class="digital-universe-home">
    <InnerHeader />
    <div class="inner-body-main">
     
        <router-view>

        </router-view>
 
    </div>
    
  </div>
</template>
<script>


import InnerHeader from "./components/inner-header.vue";
import Mobile from "../../../lib/mixins/Mobile";


export default {
  name: "InnerPage",
  mixins: [Mobile],
  components: {
    InnerHeader
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