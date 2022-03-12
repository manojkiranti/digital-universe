<template>
  <div class="products-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="card-title mb-4">Apply Online</h4>
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
            <!-- <template v-for="(item, index) in products">
                      
                        <template v-if="viewMore">
                          <li :key="item.code" v-if="index > 6">
                            <div class="product-content" @click="applyNow(item.link)">
                              <div class="floating-circle">
                                <font-awesome-icon
                                  :icon="['fal', item.icon]"
                                  class="product-icon"
                                />
                              </div>
                              <div class="text-center floating-text">
                                <span class="clean-text">{{ item.title }}</span>
                                <span class="offer-text" v-if="item.offer">{{
                                  item.offer
                                }}</span>
                              </div>
                            </div>
                          </li>
                        </template>
                    </template>
              
                  <li>
                    <div class="product-content" @click="viewMore = !viewMore" >
                          <div class="floating-circle">
                            <font-awesome-icon
                              :icon="['fal', 'chevron-down']"
                              class="product-icon"
                              :class="{'view-more': viewMore}"
                            />
                          </div>
                          <div class="text-center floating-text">
                            <span class="clean-text">{{ viewMore ? 'Less' : 'More' }}</span>
                          </div>
                        </div>
                        </li> -->
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
          id: 3,
          title: "Account Opening",
          code: "on_ac",
          link: "/digital-service/online-account",
          icon: "desktop-alt",
          active: true,
          color: "#00dfa3",
          shadow: "0 3px 10px rgb(0 223 163 / 25%)",
        },
        {
          id: 4,
          title: "Demat",
          code: "on_demat",
          link: "/digital-service/demat",
          icon: "file-signature",
          active: true,
          color: "#FFB400",
          shadow: "0 3px 10px rgba(255, 180, 0, 0.2)",
        },
        // {
        //   id: 5,
        //   title: "Credit Card",
        //   code: "on_credit",
        //   link: "/",
        //   icon: "credit-card",
        //   active: true,
        //   color: "rgb(247, 53, 208)",
        //   shadow: "0 3px 10px rgba(247, 53, 208, 0.2)",
        // },
        {
          id: 6,
          title: "Fixed Deposit",
          code: "fixed_deposit",
          link: "/digital-service/fixed-deposit",
          icon: "gift-card",
          offer: "Upto 12% Interest",
          active: true,
          color: "rgb(138, 134, 135)",
          shadow: "0 3px 10px rgba(138, 134, 135, 0.2)",
        },
        {
          id: 7,
          title: "Mero Share & CRN",
          code: "crn",
          link: "/digital-service/mero-share",
          icon: "ballot-check",
          active: true,
          color: "rgb(225, 110, 84)",
          shadow: "0 3px 10px rgba(225, 110, 84, 0.2) !important",
        },
        {
          id: 8,
          title: "Apply Loan",
          code: "apply_loan",
          link: "/digital-service/loan",
          icon: "landmark",
          active: true,
          color: '#f73563',
          shadow: '0 3px 10px rgba(247, 53, 99, 0.2) !important'
        },
        {
          id: 9,
          title: "Insta Buy",
          code: "insta_buy",
          link: "/digital-service/insta-buy",
          icon: "calendar-check",
          active: true,
          color: 'rgb(17, 17, 17)',
          shadow: '0 3px 10px rgba(17, 17, 17, 0.2) !important'
        },
        {
          id: 10,
          title: "Apply Share",
          code: "share",
          link: "/digital-service/asba",
          icon: "bullseye-pointer",
          active: true,
          color: '#f73563',
          shadow: '0 3px 10px rgba(247, 53, 99, 0.2) !important'
        },
        {
          id: 10,
          title: "Be a Merchant",
          code: "merchat",
          link: "/digital-service/merchant",
          icon: "briefcase",
          active: true,
          color: "rgb(247, 53, 208)",
          shadow: "0 3px 10px rgba(247, 53, 208, 0.2)",
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
     this.$router.push(val)
    },
    viewDetail(index) {
      this.selectedProduct = this.products[index];
      this.$refs["modal-scrollable"].show();
    },
  },
};
</script>