<template>
  <div class="products-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="card-title mb-4">Mobank Services</h4>
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
          title: "New Registration",
          code: "on_bg",
          link: "https://iserve.nicasiabank.com/banking-services",
          icon: "mobile-alt",
          active: true,
          color: "#f73563",
          shadow: "0 3px 10px rgba(247, 53, 99, 0.2)",
        },
        {
          id: 2,
          title: "Reset Pin",
          code: "tt_rtgs",
          link: "https://iserve.nicasiabank.com/customer-authentication/request-service",
          icon: "key",
          active: true,
          color: "#6236FF",
          shadow: "0 3px 10px rgb(98 54 255 / 25%)",
        },

        {
          id: 3,
          title: "Unblock Mobile Banking",
          code: "on_ac",
          link: "https://iserve.nicasiabank.com/customer-authentication/request-service",
          icon: "unlock",
          active: true,
          color: "#00dfa3",
          shadow: "0 3px 10px rgb(0 223 163 / 25%)",
        },
        {
          id: 4,
          title: "Block Mobile Banking",
          code: "on_demat",
          link: "https://iserve.nicasiabank.com/customer-authentication/request-service",
          icon: "ban",
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
      
      window.open(val);
    },
    viewDetail(index) {
      this.selectedProduct = this.products[index];
      this.$refs["modal-scrollable"].show();
    },
  },
};
</script>