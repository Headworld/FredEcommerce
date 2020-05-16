<template>
<v-card
    max-width="550"
    class="mx-auto"
  >
  
    <v-toolbar
      color="cyan"
      dark
    >
      

      <v-toolbar-title>Cart</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        
      </v-btn>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>
         
        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
         > <v-checkbox class="mr-3"></v-checkbox>
          <v-list-item-avatar class="mr-3">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          <h3>{{item.price}}</h3>
        </v-list-item>
        
      </template>
      <v-row>
          <v-col class="sm4 ma-3"><h2>Total:    </h2></v-col>
          <v-col>
              <div class="right"><v-chip class="deep-purple accent-4 white--text ma-5">Proceed to Checkout</v-chip></div>
          </v-col>
      </v-row>
     
    </v-list>
    
  </v-card>
</template>
<script>
  export default {
    data: () => ({
        
      items: [
        { header: 'Your cart' },
        {
        
          price: '#3,000',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Top Shirt for Kids',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
            price: '#6,000',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          title: 'Summer BBQ',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          price: '#3,000',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          price: '#7,000',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          price: '#6,000',
          avatar: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),
  }
</script>