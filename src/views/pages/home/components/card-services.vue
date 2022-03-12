<template>
  <div class="products-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="card-title mb-4">Card Services</h4>
          <ul class="products-list">
            <template v-for="(item, index) in products">
              <li :key="item.code">
                <div class="product-content" @click="applyNow(item.link)">
                  <div class="floating-circle-box">
                    <div class="service-icon">
                      <font-awesome-icon
                        :icon="['fas', item.icon]"
                        class="product-icon"
                        :style="{ color: item.color }"
                      />
                    </div>
                  </div>
                  <div class="text-center floating-text">
                    <span class="clean-text">{{ item.title }}</span>
                    <!-- <span class="offer-text" v-if="item.offer">{{
                            item.offer
                          }}</span> -->
                  </div>
                </div>
              </li>
            </template>
          
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Promise from "../../../../lib/mixins/ExtendedPromises";




export default {
  name: "ProductPage",
  mixins: [Promise],
  data() {
    return {
      title: "Products",
      viewMore: false,
      swiperOption: {
        slidesPerView: 3,
          spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination'
        // }
      },
      products: [
        {
          id: 1,
          title: "New Debit card",
          code: "on_bg",
          link: "/digital-service/card/new-card",
          icon: "credit-card",
          active: true,
          color: "rgb(247, 53, 208)",
          shadow: "0 3px 10px rgba(247, 53, 208, 0.2)",
        },
        {
          id: 2,
          title: "E-Commerce Registration",
          code: "tt_rtgs",
          link: "/digital-service/card/e-com",
          icon: "dumpster",
          active: true,
          color: "#1ac0c6",
          shadow: "0 3px 10px rgb(26 192 198 / 25%)",
        },

        {
          id: 3,
          title: "Prepaid Dollar Card",
          code: "on_ac",
          link: "/digital-service/card/dollar-card",
          icon: "usd-square",
          active: true,
          color: "#00dfa3",
          shadow: "0 3px 10px rgb(0 223 163 / 25%)",
        },
        {
          id: 4,
          title: "Debit Card Repin",
          code: "on_demat",
          link: "/digital-service/card/repin",
          icon: "credit-card",
          active: true,
          color: "#FFB400",
          shadow: "0 3px 10px rgba(255, 180, 0, 0.2)",
        },
        
 
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth > 767) {
        this.viewMore = false;
      } else {
        this.viewMore = true;
      }
    },
    applyNow(val) {
      
     this.$router.push(val);
    },
    viewDetail(index) {
      this.selectedProduct = this.products[index];
      this.$refs["modal-scrollable"].show();
    },
  },
};
</script>