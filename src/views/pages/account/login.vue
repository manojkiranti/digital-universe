<script>
import { required } from "vuelidate/lib/validators";
import Promise from "../../../lib/mixins/ExtendedPromises";
import Auth from "../../../repositories/auth";



export default {
  mixins: [Promise],
  data() {
    return {
      loading: false,
      // email: "admin@themesdesign.in",
      // password: "123456",
      phone_number: "",
      email: "",
      password: "",
      submitted: false,
      notification: {
        message: ''
      }
    };
  },
  // computed: {
  //   notification() {
  //     return this.$store ? this.$store.state.notification : null;
  //   }
  // },
  created() {
    document.body.classList.add("auth-body-bg");
  },
  validations: {
    phone_number: { required },
    password: { required }
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.loading = true;
        this.notification.message = '';
        this.tryingToLogIn = true;
        this.authError = null;

     
        // let formData = new FormData();
        // formData.append("username", this.email);
        // formData.append("password", this.password);
        let loginData = {
          phone_number: this.phone_number,
          password: this.password
        }
        const operation = this.response(Auth.login(loginData));
        operation
          .then(data => {
            if (operation.isFulfilled()) {
              console.log('data', data)

                // this.notification.message = data.error[0];
                this.$store.commit("loginSuccess", data);
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                this.loading = false;
                this.$router.push(
                  this.$route.query.redirectFrom || { name: "Dashboard" }
                );
              console.log(data)
            }
          })
          .catch(err => {
            console.log('err', err)
            this.loading = false;
             this.notification.message = err.data.error[0];
             this.tryingToLogIn = false;
             this.authError = err ? err : "";
             this.isAuthError = true;
            if (operation.isRejected()) {
              this.$store.commit("loginFailed", { err });
            }
          });
      }
    }
    // tryToLogIn() {
    //   this.submitted = true;
    //   // stop here if form is invalid
    //   this.$v.$touch();

    //   if (this.$v.$invalid) {
    //     return;
    //   } else {
    //     if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
    //       this.tryingToLogIn = true;
    //       // Reset the authError if it existed.
    //       this.authError = null;
          
    //       return (
    //         this.logIn({
    //           email: this.email,
    //           password: this.password
    //         })
    //           // eslint-disable-next-line no-unused-vars
    //           .then(token => {
    //             this.tryingToLogIn = false;
    //             this.isAuthError = false;
    //             // Redirect to the originally requested page, or to the home page
    //             this.$router.push(
    //               this.$route.query.redirectFrom || { name: "home" }
    //             );
    //           })
    //           .catch(error => {
    //             this.tryingToLogIn = false;
    //             this.authError = error ? error : "";
    //             this.isAuthError = true;
    //           })
    //       );
    //     } else {
    //       const { email, password } = this;
    //       if (email && password) {
    //         this.login({ email, password });            
    //       }
    //     }
    //   }
    // }
  }
};
</script>

<template>
  <div>
    <div class="home-btn">
      <a href="/">
        <!-- <font-awesome-icon icon="home" class="h2 text-primary" /> -->
        <font-awesome-icon :icon="['fad', 'home']" class="h2 text-primary" />
      </a>
    </div>
    
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters align-item-center">
          <!-- <div class="col-lg-6">
            
            <div class="login-image-wrapper">
              <img src="@/assets/images/online.svg" alt="Online" />
            </div>
          </div> -->
          <div class="col-lg-12">
            <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="login-wrapper">
                      <div class="login-card">
                        <div class="login-header text-center">
                          
                          <!-- <div class="login-header-text">
                            <h4 class="font-size-18 mt-3">Welcome Back !</h4>                            
                            <p>Sign in to continue to Digital Universe.</p>
                          </div> -->
                          <div class="login-logo">
                            <a href="/" class="logo pt-3">
                              <img src="@/assets/images/nic-asia-bank.png" height="60" alt="logo" />
                            </a>
                          </div>
                          <h4 class="font-size-18 mt-4">Welcome Back !</h4>
                          <p class="text-muted">
                            Sign in to continue to Digital Universe.
                          </p>
                          <!-- <span class="sm-logo"><img src="@/assets/images/nic-asia-bank-red-sm.png" alt="logo" /></span> -->
                        </div>

                          <b-alert
                            variant="danger"
                            class="mt-3"
                            v-if="notification.message"
                            show
                            dismissible
                          >{{notification.message}}</b-alert>

                          <div class="login-body">
                            
                            <form class="form-horizontal" @submit.prevent="tryToLogIn">
                              <div class="form-group auth-form-group-custom mb-4">
                              
                                <font-awesome-icon :icon="['fal', 'user-tie']"  class="auti-custom-input-icon"/>
                                <label for="phone_number">Mobile no</label>
                                <input
                              
                                  v-model="phone_number"
                                  class="form-control"
                                  id="phone_number"
                                  placeholder="Enter email or mobile"
                                  :class="{ 'is-invalid': submitted && $v.phone_number.$error }"
                                />
                                <div v-if="submitted && !$v.phone_number.required" class="invalid-feedback">
                                  <span v-if="!$v.phone_number.required">Email or Phone Number is required.</span>
                                </div>
                              </div>

                              <div class="form-group auth-form-group-custom mb-4">
                                <font-awesome-icon :icon="['fal', 'lock']"  class="auti-custom-input-icon"/>
                                <label for="userpassword">Password</label>
                                <input
                                  v-model="password"
                                  type="password"
                                  class="form-control"
                                  id="userpassword"
                                  placeholder="Enter password"
                                  :class="{ 'is-invalid': submitted && $v.password.$error }"
                                />
                                <div
                                  v-if="submitted && !$v.password.required"
                                  class="invalid-feedback"
                                >Password is required.</div>
                              </div>

                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customControlInline"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customControlInline"
                                >Remember me</label>
                              </div>

                              <div class="mt-4 text-center">
                                <button
                                  class="btn btn-primary w-md waves-effect waves-light"
                                  type="submit"
                                  :disabled="loading"
                                >
                                <b-spinner small v-if="loading"></b-spinner>
                                Log In</button>
                              </div>

                              <div class="mt-4 text-center">
                                <router-link tag="a" to="/forgot-password" class="text-muted">
                                  <font-awesome-icon :icon="['fal', 'lock']"  class="mr-1"/>  Forgot your password?
                                </router-link>
                              </div>
                            </form>
                          </div>
                      </div>
                      <div class="mt-5 text-center">
                        <p>
                          Don't have an account ?
                          <router-link
                            tag="a"
                            to="/register"
                            class="font-weight-medium text-primary"
                          >Register</router-link>
                        </p>
                        <p>
                          © 2021 NIC ASIA BANK.
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