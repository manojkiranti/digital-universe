<template>
  <div class="home-body-section">
    <Carousel />
    <OnlineProduct />
    <MobankProduct />
    <CardServices />
    <Offers />
  </div>
</template>
<script>
import Carousel from "./components/carousel";
import Offers from "./components/offers.vue";
import OnlineProduct from "./components/online-products.vue";
import MobankProduct from "./components/mobank-products.vue";
import CardServices from "./components/card-services.vue";
import Mobile from "../../../lib/mixins/Mobile";
export default {
  name: "HomeBody",
  components: { OnlineProduct, Carousel, Offers, MobankProduct, CardServices },
  mixins: [Mobile]
};
</script>