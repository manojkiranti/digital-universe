<template>
  <div class="offers section-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4 class="card-title mb-4">Offers</h4>
            <VueSlickCarousel v-bind="settings">
                <div class="offers-content" @click="routePage">
                    <div class="offer-card">
                        <div class="offer-body">
                        <div class="feature-img">
                            <img src="@/assets/images/fairfield.jpg" alt="" />
                        </div>
                        <div class="offer-content">
                            <div class="graph-wrap">
                            <apexchart
                                class="apex-charts"
                                height="75"
                                wight="75"
                                dir="ltr"
                                :series="offers.fairfield.series"
                                :options="WeeklyEarning.chartOptions"
                            ></apexchart>
                            <span class="chart-header"
                                >20<span class="percent">%</span></span
                            >
                            </div>
                            <div class="offer-text">
                            <h6>Fairfield Marriott</h6>
                            <p class="location">
                                <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                                Thamel
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
                <div class="offers-content" @click="routePage">
                    <div class="offer-card">
                        <div class="offer-body">
                        <div class="feature-img north-face">
                            <img src="@/assets/images/north-face.png" alt="" />
                        </div>
                        <div class="offer-content">
                            <div class="graph-wrap">
                            <apexchart
                                class="apex-charts"
                                height="75"
                                wight="75"
                                dir="ltr"
                                :series="offers.northFace.series"
                                :options="WeeklyEarning.chartOptions2"
                            ></apexchart>
                            <span class="chart-header"
                                >10<span class="percent">%</span></span
                            >
                            </div>
                            <div class="offer-text">
                            <h6>THE NORTH FACE</h6>
                            <p class="location">
                                <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                                Thamel, Boudha, Namche, Pokhara
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                 <div class="offers-content" @click="routePage">
                    <div class="offer-card">
                        <div class="offer-body">
                        <div class="feature-img trishara">
                            <img src="@/assets/images/Trisara.jpg" alt="" />
                        </div>
                        <div class="offer-content">
                            <div class="graph-wrap">
                            <apexchart
                                class="apex-charts"
                                height="75"
                                wight="75"
                                dir="ltr"
                                :series="offers.northFace.series"
                                :options="WeeklyEarning.chartOptions2"
                            ></apexchart>
                            <span class="chart-header"
                                >10<span class="percent">%</span></span
                            >
                            </div>
                            <div class="offer-text">
                            <h6>Trisara</h6>
                            <p class="location">
                                <font-awesome-icon :icon="['fal', 'map-marker-alt']" />
                                Durbarmarg
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Offers",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: false,
        // fade: true,
      },
      offers: {
          fairfield:{
              series: [20],
          },
          northFace: {
              series: [10]
          }
      },
      listColors: {
          fairfield: '#f73563',
          northFace: '#00dfa3'
      },
      WeeklyEarning: {
        chartOptions: {
          chart: {
            type: "radialBar",
            wight: 75,
            height: 75,
            sparkline: {
              enabled: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#f73563"],
          stroke: {
            lineCap: "round",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "70%",
              },
              track: {
                margin: 0,
              },
              dataLabels: {
                show: false,
              },
            },
          },
        },
        chartOptions2: {
          chart: {
            type: "radialBar",
            wight: 75,
            height: 75,
            sparkline: {
              enabled: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#00dfa3"],
          stroke: {
            lineCap: "round",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "70%",
              },
              track: {
                margin: 0,
              },
              dataLabels: {
                show: false,
              },
            },
          },
        },
      },
    };
  },
  methods: {
    routePage(){
      this.$router.push('/offers')
    }
  }
};
</script>