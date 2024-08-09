<template>
  <v-app>
    <div class="background-container">
      <v-container
        class="d-flex flex-column align-center justify-center"
        style="min-height: 100vh;"
      >
        <v-card
          flat
          style="width: 400px; margin-top: 15px; color:white;"
          align="center"
          class="transparent-card d-flex flex-column align-center justify-center"
        >
          <v-card-title style="color: white;">
            Por favor, proporciona tu información <br> para completar el registro.
          </v-card-title>
          <v-form
            ref="form"
            v-model="validForm"
          >
            <v-card-text>
              <v-text-field
                v-model="nickname"
                color="white"
                label="Nickname"
                underlined
                type="text"
              />
              <v-text-field
                v-model="nombre"
                color="white"
                label="Nombre"
                underlined
                type="text"
                required
              />
              <v-text-field
                v-model="paterno"
                color="white"
                label="Ap. Paterno"
                underlined
                type="text"
                required
              />
              <v-text-field
                v-model="materno"
                color="white"
                label="Ap. Materno"
                underlined
                type="text"
                required
              />
              <v-text-field
                v-model="nacimiento"
                color="white"
                label="Fecha de nacimiento"
                underlined
                type="date"
                required
              />
              <v-text-field
                v-model="password"
                color="white"
                label="Password"
                underlined
                type="password"
                required
              />
              <v-select
                v-model="genero"
                color="white"
                label="Genero"
                underlined
                :items="options"
                type="text"
                required
              />
              <v-text-field
                v-model="correo"
                color="white"
                label="Correo"
                underlined
                type="email"
                required
              />
              <v-text-field
                v-model="telefono"
                color="white"
                label="Telefono"
                underlined
                type="tel"
                required
              />
            </v-card-text>
          </v-form>
          <v-card-actions>
            <v-btn
              block
              color="blue"
              elevation="0"
              @click="signup"
            >
              <span
                style="text-transform: none; color: white;"
              >
                SignUp
              </span>
            </v-btn>
          </v-card-actions>
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
      nickname: null,
      nombre: null,
      paterno: null,
      materno: null,
      nacimiento: null,
      password: null,
      genero: null,
      correo: null,
      telefono: null,
      validForm: false,

      required: [
        v => !!v || 'Requird Field'
      ],

      options: ['masculino', 'femenino', 'otros']
    }
  },

  methods: {
    signup () {
      if (!this.$refs.form.validate()) {
        console.log('Formulario no válido')
        return
      }

      const sendData = {
        nickname: this.nickname,
        nombre: this.nombre,
        paterno: this.paterno,
        materno: this.materno,
        nacimiento: this.nacimiento,
        password: this.password,
        genero: this.genero,
        correo: this.correo,
        telefono: this.telefono,
        id: Date.now()
      }
      console.log('@@@ data => ', sendData)

      const url = '/api/auth/signUp'
      this.$axios.post(url, sendData)
        .then((res) => {
          if (res.data.message === 'usuario Registrado Satisfactoriamente') {
            console.log('Usuario registrado')
            this.$router.push('/')
          }
        })
        .catch((err) => {
          console.error('@@@ err => ', err.response ? err.response.data : err.message)
        })
    }
  }

}
</script>

<style scoped>
.background-container {
  min-height: 100vh;
  background-image: url('../../assets/signup-valorant.jpg');
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
