<template>
<v-container>
   <v-layout row wrap>
     <v-flex>
       <slide />
     </v-flex>
      <v-flex>
       <MerchantProducts />
     </v-flex>
   </v-layout>
</v-container>
  
</template>

<script>
import slide from '~/components/slider.vue'
import MerchantProducts from '~/components/merchantProducts.vue'

export default {
  components: {
    slide,
    MerchantProducts,
  }
}
</script>
