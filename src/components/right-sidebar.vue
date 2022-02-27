<script>
import { layoutMethods } from "@/state/helpers";
/**
 * Right-sidebar 
 */
export default {
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
      layout: null,
      width: this.$store ? this.$store.state.layout.layoutWidth : {} || {},
      topbar: this.$store ? this.$store.state.layout.topbar : {} || {},
      sidebarType: null,
      loader: this.$store ? this.$store.state.layout.loader : {} || {},
    };
  },
  methods: {
    ...layoutMethods,
    hide() {
      // this.$parent.toggleRightSidebar();
      document.body.classList.remove("right-bar-enabled");
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    changeLayout(layout) {
      if(this.layout == 'vertical'){
        this.$router.push('/')
      } else {
        this.$router.push('/home2')
      }
    },
    changeType(type) {
      var body = document.body;
      if(type == "colored"){
        if (body.classList.contains("light")) {
          body.classList.remove("light");
        }
         
      }
      if(type == "light"){
        if (body.classList.contains("colored")) {
          body.classList.remove("colored");
        }
         
      }
     body.classList.add(type);
    },
    changeWidth(width) {
      return this.changeLayoutWidth({
        layoutWidth: width,
      });
    },
    changeTopbartype(value) {
      return this.changeTopbar({
        topbar: value,
      });
    },
    changeloader() {
      return this.changeLoaderValue({
        loader: this.loader,
      });
    },
  },
};
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <a
            href="javascript:void(0);"
            class="right-bar-toggle float-right"
            @click="hide"
          >
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>
        <div class="p-3">
          <h6 class="mb-0">Layout</h6>
          <hr class="mt-1" />
          <b-form-radio-group
            v-model="layout"
            stacked
            @input="changeLayout($event)"
          >
            <b-form-radio value="vertical" class="mb-1">Vertical</b-form-radio>
            <b-form-radio value="horizontal" class="mb-1"
              >Horizontal</b-form-radio
            >
          </b-form-radio-group>
          <!-- Width -->
          <!-- <h6 class="mt-3">Width</h6>
          <hr class="mt-1" />
          <b-form-radio-group
            v-model="width"
            stacked
            @input="changeWidth($event)"
          >
            <b-form-radio value="fluid" class="mb-1">Fluid</b-form-radio>
            <b-form-radio value="boxed">Boxed</b-form-radio>
          </b-form-radio-group> -->

          <!-- Sidebar -->
          <div >
            <h6 class="mt-3">Sidebar</h6>
            <hr class="mt-1" />
            <b-form-radio-group
              v-model="sidebarType"
              stacked
              @input="changeType($event)"
            >
             
              <b-form-radio value="light" class="mb-1">Light</b-form-radio>
       
              <b-form-radio value="colored">Colored</b-form-radio>
            </b-form-radio-group>
          </div>

          <!-- Topbar -->
          <!-- <div v-if="layout === 'horizontal'">
            <h6 class="mt-3">Topbar</h6>
            <hr class="mt-1" />
            <b-form-radio-group
              v-model="topbar"
              stacked
              @input="changeTopbartype($event)"
            >
              <b-form-radio value="dark" class="mb-1">Dark</b-form-radio>
              <b-form-radio value="light" class="mb-1">Light</b-form-radio>
            </b-form-radio-group>
          </div> -->

          <!-- Preloader -->
          <!-- <h6 class="mt-3">Preloader</h6>
          <hr class="mt-1" />

          <b-form-checkbox
            v-model="loader"
            name="check-button"
            switch
            @input="changeloader"
            >Preloader</b-form-checkbox
          > -->
        </div>
        <!-- Settings -->
        <!-- <hr class="mt-0" />
        <h6 class="text-center mb-0">Choose Layouts</h6>

        <div class="p-4">
          <div class="mb-2">
            
          </div>

          <div class="mb-2">
            
          </div>

          <div class="mb-2">
            
          </div>
        </div> -->
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>