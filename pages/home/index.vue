<template>
  <v-app>
    <v-card>
      <v-card-title>
        Login
      </v-card-title>

      <v-text-field
        v-model="email"
        flat
      />
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      email: ''
    }
  }
}
</script>
