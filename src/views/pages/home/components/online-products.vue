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
        // {
        //   id: 1,
        //   title: "Bank Guarantee",
        //   code: "on_bg",
        //   link: "/bank-gurantee/apply",
        //   icon: "envelope-open",
        //   active: true,
        //   color: "#f73563",
        //   shadow: "0 3px 10px rgba(247, 53, 99, 0.2)",
        // },
        // {
        //   id: 2,
        //   title: "TT/RTGS",
        //   code: "tt_rtgs",
        //   link: "/tt-rtgs/apply",
        //   icon: "money-check-edit",
        //   active: true,
        //   color: "#6236FF",
        //   shadow: "0 3px 10px rgb(98 54 255 / 25%)",
        // },

        {
          id: 3,
          title: "Account Opening",
          code: "on_ac",
          link: "https://onlineaccount.nicasiabank.com/",
          icon: "desktop-alt",
          active: true,
          color: "#00dfa3",
          shadow: "0 3px 10px rgb(0 223 163 / 25%)",
        },
        {
          id: 4,
          title: "Demat",
          code: "on_demat",
          link: "https://www.nicasiabank.com/demat-request",
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
          link: "https://onlineaccount.nicasiabank.com/account/opening/fixed-deposit/sarbashrestha-muddati-khata",
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
          link: "https://meroshare.nicasiabank.com/capital",
          icon: "ballot-check",
          active: true,
          color: "rgb(225, 110, 84)",
          shadow: "0 3px 10px rgba(225, 110, 84, 0.2) !important",
        },
        {
          id: 8,
          title: "Apply Loan",
          code: "apply_loan",
          link: "https://loanapplication.nicasiabank.com/#step-1",
          icon: "landmark",
          active: true,
          color: '#f73563',
          shadow: '0 3px 10px rgba(247, 53, 99, 0.2) !important'
        },
        {
          id: 9,
          title: "Insta Buy",
          code: "insta_buy",
          link: "https://instabuy.nicasiabank.com/insta-pay",
          icon: "calendar-check",
          active: true,
          color: 'rgb(17, 17, 17)',
          shadow: '0 3px 10px rgba(17, 17, 17, 0.2) !important'
        },
        {
          id: 10,
          title: "Apply Share",
          code: "share",
          link: "https://meroshare.nicasiabank.com/asba",
          icon: "bullseye-pointer",
          active: true,
          color: '#f73563',
          shadow: '0 3px 10px rgba(247, 53, 99, 0.2) !important'
        },
        {
          id: 10,
          title: "Be a Merchant",
          code: "merchat",
          link: "https://features.nicasiabank.com/merchant-acquisition",
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
      window.open(val);
    },
    viewDetail(index) {
      this.selectedProduct = this.products[index];
      this.$refs["modal-scrollable"].show();
    },
  },
};
</script>