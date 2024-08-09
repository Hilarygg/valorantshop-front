<template>
  <v-app>
    <div class="background-container">
      <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh;"
      >
        <v-card flat style="width: 400px; margin-top: 15px; color: white;" align="center" class="transparent-card d-flex flex-column align-center justify-center">
          <v-card-title style="color: white;">
            ¡Bienvenido a la arena! <br>
            Solo los más fuertes prevalecen!
          </v-card-title>
          <v-card-text style="color:white;">
            <v-form
              ref="formLogin"
              v-model="validLogin"
            >
              <v-text-field
                v-model="nickname"
                color="white"
                label="User"
                :rules="userValidation"
                underlined
                type="text"
              />
              <v-text-field
                v-model="password"
                color="white"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                underlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="togglePasswordVisibility"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-row>
              <v-col cols="12">
                <v-btn
                  block
                  color="blue"
                  elevation="0"
                  style="height: 50px; width: 370px;"
                  @click="login"
                >
                  <span
                    style="text-transform: none; color: white;"
                  >
                    Login
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <div style="display: flex; align-items: center;">
            <v-card-text style="margin-right: 0px;">
              Don't have an account yet?&nbsp;&nbsp;
              <router-link to="/signup" style="color: white;">
                Signup
              </router-link>
            </v-card-text>
          </div>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      email: null,
      nickname: null,
      showPassword: false,
      validLogin: false

    }
  },

  methods: {
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    }

  }
}
</script>

<style scoped>
.background-container {
  min-height: 100vh;
  background-image: url('@/assets/login-valorant.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.transparent-card {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(5px);
}

</style>
