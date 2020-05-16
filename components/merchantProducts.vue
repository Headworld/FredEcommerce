<template>
  <v-card
    
      >
    <v-row>
        <br>
        <v-col cols="4" class="mt-12">
            <h2 class="ma-5">Merchants</h2>
        </v-col>
        
        <v-col cols="8" class="mt-10">
         <v-col cols="12" sm="12">
        <v-select
          v-model="e7"
          :items="states"
          label=""
          multiple
          chips
          hint="Make your choice, unlimited shopping experience"
          persistent-hint
        ></v-select>
      </v-col>
        </v-col>
    </v-row>
    <v-container fluid >
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          class="pa-3"
        >
          <v-card>
           <router-link to="/singleproduct">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
        
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
           </router-link>

            <v-card-actions>
                <v-chip
                  class="ma-2 small"
                  color="green"
                  text-color="white">
                 {{card.price}}
                </v-chip>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', price: '₦3,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', price: '₦12,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', price: '₦3,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', price: '₦12,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', price: '₦3,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', price: '₦12,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', price: '₦3,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '#8,000', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', price: '#12,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', price: '₦3,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', price: '₦12,000', flex: 3 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', price: '₦8,000', flex: 3 },

      ],
      first: ' ',      
        e6: [],
        e7: [],
        states: [
          'Female', 'Male', 'Unisex', 'Kids',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],      
    }),
  }
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
</style>