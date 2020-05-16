
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="574"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Product Name</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-2">4.5 (413)</div>
        <v-col> 
           Price: &#8358; 3,500
        </v-col>
        <div class="ml-5 subtitle-1 right">
          
          <v-col>
             <v-select
               :items="items"
               label="Qty:"
        ></v-select>
          </v-col>
        </div>
      </v-row>

      

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip  class="right">Proceed to Checkout</v-chip>

         <router-link to="/cart">
           <v-chip>Add to cart</v-chip>
         </router-link>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <router-link to="/"><v-btn
        color="green lighten-2"
        text
      >
        Continue Shoping
      </v-btn></router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      items: ['1', '2', '3', '4', '5','6','7','8','9','10'],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
</style>