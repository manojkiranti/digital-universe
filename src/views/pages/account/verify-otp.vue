<template>
  <div>
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters align-item-center">
          <div class="col-lg-12">
            <div
              class="
                authentication-page-content
                otp-page
                p-4
                d-flex
                align-items-center
              "
            >
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <div>
                      <div class="text-center">
                        <div>
                          <a href="/" class="logo pt-3">
                            <img
                              src="@/assets/images/nic-asia-bank.png"
                              height="60"
                              alt="logo"
                            />
                          </a>
                        </div>

                        <h4 class="font-size-18 mt-4">Verification!</h4>
                        <p class="text-muted">
                          A five digit code is emailed/texted to you. Please
                          enter the code below and Proceed.
                        </p>
                      </div>

                      <div class="p-2 mt-5">
                        <form
                          class="form-horizontal"
                          @submit.prevent="trySubmit"
                        >
                          <div
                            class="
                              form-group
                              otp-group otp-form-group-custom
                              mb-4
                            "
                          >
                            <input
                              class="form-control"
                              id='ist' maxlength="1" @keyup="clickEvent($event,'sec')"
                              v-model="otpCode.code1"
                            />
                            <input
                              class="form-control"
                               id="sec" maxlength="1" @keyup="clickEvent($event,'third')"
                              v-model="otpCode.code2"
                            />
                            <input
                              class="form-control"
                              id="third" maxlength="1" @keyup="clickEvent($event,'fourth')"
                              v-model="otpCode.code3"
                            />
                            <input
                              class="form-control"
                              id="fourth" maxlength="1" @keyup="clickEvent($event,'fifth')"
                              v-model="otpCode.code4"
                            />
                            <input
                              class="form-control"
                              id="fifth" maxlength="1"
                              v-model="otpCode.code5"
                            />
                          </div>
                          <div class="mt-4"></div>
                          <div class="mt-4 mb-3 text-center">
                            <a
                              href="#"
                              @click="resendOtp"
                              class="btn btn-primary w-md mr-2"
                              :disabled="otpSending"
                              >
                              <b-spinner
                                small
                                v-if="otpSending"
                              ></b-spinner>
                              Resend OTP</a
                            >
                            <a
                              href="#"
                              type="submit"
                              class="btn btn-primary w-md"
                              @click="trySubmit"
                              :disabled="childBtnLoading"
                            >
                              <b-spinner
                                small
                                v-if="childBtnLoading"
                              ></b-spinner>
                              Proceed</a
                            >
                          </div>
                        </form>
                      </div>
                      <div class="mt-5 text-center">
                        <p>
                          Already have an account ?
                          <router-link
                            tag="a"
                            to="/login"
                            class="font-weight-medium text-primary"
                            >Login</router-link
                          >
                        </p>
                        <p>
                          © 2021 NIC ASIA
                          <!-- <i class="mdi mdi-heart text-danger"></i> by Themesdesign -->
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    otpSending:{
      type: Boolean,
      default: false,
    },
    childBtnLoading: {
      type: Boolean,
      default: false,
    },
  },
  name: "VerifyOtp",
  data() {
    return {
      otpCode: {
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
      },
    };
  },

  validations: {
    email: { required },
    password: { required },
  },
  mounted () {
    document.getElementById('ist').focus();
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    trySubmit() {
      let otp = `${this.otpCode.code1}${this.otpCode.code2}${this.otpCode.code3}${this.otpCode.code4}${this.otpCode.code5}`;
      this.$emit("submitOtp", otp);
    },
    resendOtp() {
      this.$emit("resendOtp")
    },
    clickEvent(first,last){
			if(first.target.value.length){
				document.getElementById(last).focus();
			}
		}
  },
};
</script>