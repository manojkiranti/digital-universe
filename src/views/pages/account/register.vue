

<template>
  <div>
    <div class="home-btn">
      <a href="/">
        <font-awesome-icon :icon="['fad', 'home']" class="h2 text-primary" />
      </a>
    </div>
   
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters align-item-center">
          
          <div class="col-lg-12">
            <div
              class="
                authentication-page-content
                p-4
                d-flex
                align-items-center
                min-vh-100
              "
            >
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="login-wrapper">
                      <div class="text-center">
                        <div>
                          <a href="/" class="logo">
                            <img
                              src="@/assets/images/nic-asia-bank.png"
                              height="60"
                              alt="logo"
                            />
                          </a>
                        </div>

                        <h4 class="font-size-18 mt-4">Register account</h4>
                        <p class="text-muted">
                          Get your Digital Universe account now.
                        </p>
                      </div>

                      <div class="p-2 mt-5">
                        <b-alert
                          v-model="registerSuccess"
                          class="mt-3"
                          variant="success"
                          dismissible
                          >Registration successfull.</b-alert
                        >

                        <b-alert
                          v-model="isRegisterError"
                          class="mt-3"
                          variant="danger"
                          dismissible
                          >{{ regError }}</b-alert
                        >

                        <b-alert
                          variant="danger"
                          class="mt-3"
                          v-if="notification.message"
                          show
                          dismissible
                          >{{ notification.message }}</b-alert
                        >

                        <form
                          class="form-horizontal"
                          @submit.prevent="tryToRegisterIn"
                        >
                          <div class="form-group">
                              <label for="customerType">Customer Type</label>
                              <b-form-radio-group
                                    id="customerType"
                                    v-model="user.customer_type"
                                    :options="options"
                                    
                                    name="radio-options-slots"
                                      />
                          </div>
      
                          <div class="form-group auth-form-group-custom mb-4">
                             <font-awesome-icon :icon="['fal', 'user-tie']"  class="auti-custom-input-icon"/>
                            <label for="account_number">Account Number</label>
                            <input
                              v-model="user.account_number"
                              type="text"
                              class="form-control"
                              id="account_number"
                              name="account number"
                              :class="{
                                'is-invalid':
                                  submitted && $v.user.account_number.$error,
                              }"
                              placeholder="Enter Account Number"
                            />
                            <div
                              v-if="
                                submitted && !$v.user.account_number.required
                              "
                              class="invalid-feedback"
                            >
                              Account Number is required.
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <font-awesome-icon :icon="['fal', 'phone-alt']"  class="auti-custom-input-icon"/>
                            <label for="mobile">Mobile</label>
                            <input
                              v-model="user.phone_number"
                              class="form-control"
                              id="mobile"
                              placeholder="Enter mobile number"
                              :class="{
                                'is-invalid':
                                  submitted && $v.user.phone_number.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.user.phone_number.required"
                              class="invalid-feedback"
                            >
                              Mobile number is required.
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4" v-if="user.customer_type == 'Corporate'">
                            <font-awesome-icon :icon="['fal', 'envelope']"  class="auti-custom-input-icon"/>
                            <label for="email">Email</label>
                            <input
                              v-model="user.email"
                              class="form-control"
                              id="email"
                              placeholder="Enter your email"
                              :class="{
                                'is-invalid':
                                  submitted && $v.user.email.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.user.email.required"
                              class="invalid-feedback"
                            >
                              Email  is required.
                            </div>
                            <div
                              v-if="submitted && !$v.user.email.email"
                              class="invalid-feedback"
                            >
                              Please enter a valid email.
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <font-awesome-icon :icon="['fal', 'lock']"  class="auti-custom-input-icon"/>
                            <label for="userpassword">Password</label>
                            <input
                              v-model="user.password"
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              :class="{
                                'is-invalid':
                                  submitted && $v.user.password.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.user.password.required"
                              class="invalid-feedback"
                            >
                              Password is required.
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <font-awesome-icon :icon="['fal', 'unlock-alt']"  class="auti-custom-input-icon"/>
                            <label for="userpassword2">Confirm Password</label>
                            <input
                              v-model="user.password2"
                              type="password"
                              class="form-control"
                              id="userpassword2"
                              placeholder="Confirm Password"
                              :class="{
                                'is-invalid':
                                  submitted && $v.user.password2.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.user.password2.sameAsPassword"
                              class="invalid-feedback"
                            >
                              Passwords must be identical.
                            </div>
                          </div>

                          <div class="text-center">
                            <button
                              class="
                                btn btn-primary
                                w-md
                                waves-effect waves-light
                              "
                              :disabled="loading"
                              type="submit"
                            >
                              <b-spinner small v-if="loading"></b-spinner>
                              Register
                            </button>
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
    <b-modal
      id="modal-1"
      size="xl"
      title="OTP Verification"
      hide-footer
      ref="modal-1"
    >
      <VerifyOtp @submitOtp="submitOtp" @resendOtp="resendOtp" 
        :childBtnLoading="childBtnLoading" 
        :otpSending="loading" />
    </b-modal>
  </div>
</template>

<script>
import { required, requiredIf, email, sameAs} from "vuelidate/lib/validators";
import Promise from "../../../lib/mixins/ExtendedPromises";
import Auth from "../../../repositories/auth";
import VerifyOtp from "./verify-otp.vue";

const { setTempToken, getTempToken } = require('../../../lib/storage');

import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
export default {
  mixins: [Promise],
  components: { VerifyOtp },
  data() {
    return {
      user: {
        account_number: "",
        phone_number: "",
        password: "",
        password2: "",
        customer_type: "Retail",
        email: ""
      },
      options: [
          { text: 'Retail', value: 'Retail' },
          { text: 'Corporate', value: 'Corporate' }
        ],
      loading: false,
      childBtnLoading: false,
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
      otpData: {},
    };
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  validations: {
    user: {
      account_number: { required },
      phone_number: { required },
      password: { required },
      password2: {
        sameAsPassword: sameAs('password')
      },
      customer_type: { required },
      email: { required:
          requiredIf(function (data) {
            if (data.customer_type == 'Retail') {
              return false;
            } else {
              return true;
            }
          }),
          email
       },
    },
  },
  created() {
    document.body.classList.add("auth-body-bg");
  },
  mounted() {
    
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    makeToast(message) {
      this.$bvToast.toast(`${message.message}`, {
        title: `${message.title}`,
        autoHideDelay: 5000,
        variant: message.variant,
        appendToast: false,
      });
    },
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      console.log("this.$v.$invalid", this.$v)
      if (this.$v.$invalid) {
        return;
      } else {
        
        this.loading = true;
        const operation = this.response(Auth.register(this.user));
        operation
          .then((data) => {
            console.log(data);
            setTempToken(data.token);
            this.loading = false;
            this.otpData = data;
            this.$refs["modal-1"].show();
          })
          .catch((error) => {
            this.loading = false;
            if ("error" in error.data) {
              let message = {
                title: "Error",
                message: error.data.error[0],
                variant: "danger",
              };
              this.makeToast(message);
            }
            if ("errors" in error.data) {
              for (const [key, value] of Object.entries(error.data.errors)) {
                let errMsg = `${key}: ${value}`;
                let message = {
                  title: "Error",
                  message: errMsg,
                  variant: "danger",
                };
                this.makeToast(message);
              }
            }
          });
        // this.$router.push(`/verify-otp`);
      }
    },
    resendOtp() {
      this.tryToRegisterIn()
    },  
    submitOtp(otp) {
      let payload = {
        otpCode: otp,
        refNo: this.otpData.otp.refNo,
      };
      this.childBtnLoading = true;
      const operation = this.response(Auth.verifyOtp(payload));
      operation
        .then((data) => {
          this.childBtnLoading = false;
          let message = {
            title: "Success",
            message: data.message,
            variant: "success",
          };
          this.makeToast(message);
          this.$refs["modal-1"].hide();
          setTimeout(() => {
            this.$router.push(('/login'))
          }, 1000)
          
        })
        .catch((error) => {
          this.childBtnLoading = false;
          if ("error" in error.data) {
            let message = {
              title: "Error",
              message: error.data.error[0],
              variant: "danger",
            };
            this.makeToast(message);
          }
          if ("errors" in error.data) {
            for (const [key, value] of Object.entries(error.data.errors)) {
              let errMsg = `${key}: ${value}`;
              let message = {
                title: "Error",
                message: errMsg,
                variant: "danger",
              };
              this.makeToast(message);
            }
          }
        });
    },
  },
};
</script>