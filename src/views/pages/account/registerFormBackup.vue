

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <a href="/">
        <i class="mdi mdi-home-variant h2 text-primary"></i>
      </a>
    </div>
    <div class="wave-img">
      <img src="@/assets/images/wave.png" alt="Wave" />
    </div>
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters align-item-center">
          <div class="col-lg-6">
            <!-- <div class="authentication-bg">
              <div class="bg-overlay"></div>
            </div> -->
            <div class="login-image-wrapper">
              <img src="@/assets/images/online.svg" alt="Online" />
            </div>
          </div>
          <div class="col-lg-4">
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
                  <div class="col-lg-9">
                    <div>
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
                          Get your NIC Asia Online Service now.
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
                            <label>Account Type?</label>
                            <b-form-group v-slot="{ ariaDescribedby }">
                              <b-form-radio-group
                                id="hasAccount"
                                v-model="user.accountType"
                                :options="accountTypeList"
                                :aria-describedby="ariaDescribedby"
                                name="hasAccount"
                              ></b-form-radio-group>
                            </b-form-group>
                          </div>
                          

                          <div class="form-group auth-form-group-custom mb-4">
                            <i
                              class="ri-bank-line auti-custom-input-icon"
                            ></i>
                            <label for="username">Preferred Branch</label>
                            <b-form-select
                                :options="branchList"
                                v-model="user.preferredBranch"
                                class="form-control"
                                placeholder="Please select your preferred branch"
                                :class="{
                                  'is-invalid':
                                    submitted && $v.user.preferredBranch.$error,
                                }"
                              ></b-form-select>
                              <div
                                v-if="submitted && $v.user.preferredBranch.$error"
                                class="invalid-feedback"
                              >
                                <span v-if="!$v.user.preferredBranch.required"
                                  >This field is required.</span
                                >
                              </div>
                          </div>
                          <template v-if="user.accountType == 'corporate'">
                            <div class="form-group auth-form-group-custom mb-4">
                                <i
                                  class="ri-home-smile-line auti-custom-input-icon"
                                ></i>
                                <label for="companyName">Company Name</label>
                                <input
                                  v-model="user.companyName"
                                  type="text"
                                  class="form-control"
                                  id="companyName"                                 
                                  placeholder="Enter Company Name"
                                />
                                
                              </div>
                          </template>
                          <template v-if="user.accountType == 'personal'">
                              <div class="form-group auth-form-group-custom mb-4">
                                <i
                                  class="ri-user-2-line auti-custom-input-icon"
                                ></i>
                                <label for="username">Full Name</label>
                                <input
                                  v-model="user.fullName"
                                  type="text"
                                  class="form-control"
                                  id="username"
                                  :class="{
                                    'is-invalid':
                                      submitted && $v.user.fullName.$error,
                                  }"
                                  placeholder="Enter Full Name"
                                />
                                <div
                                  v-if="submitted && !$v.user.fullName.required"
                                  class="invalid-feedback"
                                >
                                  Username is required.
                                </div>
                              </div>

                              

                              <div class="form-group auth-form-group-custom mb-4">
                                <i
                                  class="ri-lock-2-line auti-custom-input-icon"
                                ></i>
                                <label for="mobile">Mobile</label>
                                <input
                                  v-model="user.mobile"
                                  class="form-control"
                                  id="mobile"
                                  placeholder="Enter password"
                                  :class="{
                                    'is-invalid':
                                      submitted && $v.user.mobile.$error,
                                  }"
                                />
                                <div
                                  v-if="submitted && !$v.user.mobile.required"
                                  class="invalid-feedback"
                                >
                                  mobile is required.
                                </div>
                              </div>
                          </template>
                          <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-mail-line auti-custom-input-icon"></i>
                            <label for="useremail">Email</label>
                            <input
                              v-model="user.email"
                              type="email"
                              class="form-control"
                              id="useremail"
                              placeholder="Enter email"
                              :class="{
                                'is-invalid': submitted && $v.user.email.$error,
                              }"
                            />
                            <div
                              v-if="submitted && $v.user.email.$error"
                              class="invalid-feedback"
                            >
                              <span v-if="!$v.user.email.required"
                                >Email is required.</span
                              >
                              <span v-if="!$v.user.email.email"
                                >Please enter valid email.</span
                              >
                            </div>
                          </div>
                          <div class="text-center">
                            <button
                              class="
                                btn btn-primary
                                w-md
                                waves-effect waves-light
                              "
                              type="submit"
                            >
                              Register
                            </button>
                          </div>

                          <!-- <div class="mt-4 text-center">
                            <p class="mb-0">
                              By registering you agree to the Nazox
                              <a
                                href="#"
                                class="text-primary"
                              >Terms of Use</a>
                            </p>
                          </div> -->
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
import { required, email } from "vuelidate/lib/validators";
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
export default {
  data() {
    return {
      accountTypeList: [
        { text: "Corporate", value: "corporate" },
        { text: "Personal", value: "personal" },
      ],
      branchList: [
        { value: null, text: 'Please select preferred branch' },
         { text: "Kathmandu", value: "Kathmandu" },
        { text: "Jhapa", value: "Jhapa" },
      ],
      user: {
        accountType: null,
        preferredBranch: null,
        fullName: "",
        email: "",
        mobile: "",
        companyName: "",

      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  validations: {
    user: {
      fullName: { required },
      email: { required, email },
      mobile: { required },
      preferredBranch: { required },
      
    },
  },
  created() {
    document.body.classList.add("auth-body-bg");
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        this.$router.push(`/verify-otp`)
      }
    },
  },
};
</script>