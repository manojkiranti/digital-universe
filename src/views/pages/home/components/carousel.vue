<template>
  <div class="home-banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="carousel-wrap">
            <VueSlickCarousel v-bind="settings">
              <div class="carousel-content">
                <div class="slide-text">
                  <h6>Sarbashrestha Bachat Khata</h6>
                  <a href="https://onlineaccount.nicasiabank.com/account/opening/basic/sarbashrestha-bachat-khata" target="_blank" class="btn btn-primary btn-sm">Apply Now</a>
                </div>
                <div class="slide-img">
                  <img src="@/assets/images/banner-nic.png" alt="" />
                </div>
              </div>

              <div class="carousel-content bg-pink">
                <div class="slide-text">
                  <h6>Sarbashrestha Nari Bachat Khata</h6>
                  <a href="https://onlineaccount.nicasiabank.com/account/opening/start/sarbashrestha-nari-bachat-khata" target="_blank" class="btn btn-primary btn-sm">Apply Now</a>
                </div>
                <div class="slide-img">
                  <img src="@/assets/images/nari-banner.jpg" alt="" />
                </div>
              </div>

              <div class="carousel-content">
                <div class="slide-text">
                  <h6>Sarbashrestha Jestha Nagarik Bachat Khata</h6>
                  <a href="https://onlineaccount.nicasiabank.com/account/opening/start/sarbashrestha_jestha_nagarik_bachat_khata" target="_blank"  class="btn btn-primary btn-sm" >Apply Now</a>
                </div>
                <div class="slide-img">
                  <img src="@/assets/images/jestha-banner.jpg" alt="" />
                </div>
              </div>

              <div class="carousel-content bg-dark-pink">
                <div class="slide-text">
                  <h6>Sarbashrestha Muddati Khata</h6>
                  <a href="https://onlineaccount.nicasiabank.com/account/opening/fixed-deposit/sarbashrestha-muddati-khata" class="btn btn-primary btn-sm" target="_blank" >Apply Now</a>
                </div>
                <div class="slide-img">
                  <img src="@/assets/images/mudhati-banner.jpg" alt="" />
                </div>
              </div>

              <div class="carousel-content bg-dark-green">
                <div class="slide-text">
                  <h6>Sarbashrestha Sahaj Bachat Khata</h6>
                  <a href="https://www.nicasiabank.com/product/bank-accounts-deposits-in-nepal/sarbashrestha-sahaj-bachat-khata" class="btn btn-primary btn-sm" target="_blank" >Apply Now</a>
                </div>
                <div class="slide-img">
                  <img src="@/assets/images/sajha-banner.jpg" alt="" />
                </div>
              </div>
            </VueSlickCarousel>
            <!-- <ul class="dots">
              <li class="active"><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
            </ul> -->
            
          </div>
        
        </div>
      </div>
    </div>
      
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "HomeCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        // "centerMode": false,
        // "centerPadding": "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        // "variableWidth": true,
        arrows: false,
        // fade: true,
      },
    };
  },
};
</script>