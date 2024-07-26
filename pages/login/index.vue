<template>
  <v-app>
    <v-container
      class="d-flex flex-column align-center justify-center"
      style="min-height: 100vh;"
    >
      <v-card style="width: 400px; margin-top: 15px;" align="center" class="d-flex flex-column align-center justify-center">
        <v-card-title
          class="justify-center"
          style="font-size: 30px; margin-bottom: 30px"
        >
          Login
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field
              v-model="usuario"
              label="User"
              :rules="userValidation"
              class="fixed-width"
              outlined
              type="text"
            />
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              outlined
              class="fixed-width"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="togglePasswordVisibility"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      email: null,

      showPassword: false

    }
  },

  methods: {
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
