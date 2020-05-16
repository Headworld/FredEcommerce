<template>
  <v-row row wrap>
    <!-- <v-row justify="space-around">
      <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch>
      <v-switch v-model="lazy" class="ma-4" label="Lazy"></v-switch>
    </v-row> -->
   <v-col cols="6"> 
    <div class="mt-12">
      <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      class="mt-12"
    >
    <v-row>
         <h2 class="mb-12">Seller Dashboard Login</h2>
      </v-row>        

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
<v-text-field
        v-model="name"
        :counter="7"
        :rules="nameRules"
        label="Password"
        required
        name= "password"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I agree to the terms and conditions"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Login
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Sign Up
      </v-btn>

      <!-- <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn> -->
    </v-form>
     <div class="ma-6"><router-link to="/"><v-btn
        color="green lighten-2"
        text
      >
        Visit Homepage
      </v-btn></router-link></div>
    </div>
   </v-col>
   <v-col class="mt-12">

     <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1"></v-img>
    
   </v-col>
  
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
</style>