<<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://europaproperty.com/wp-content/uploads/2020/04/20190702-SME-Website-Increasing-Potential-of-Indonesia-Image.jpg',
          },
          {
            src: 'https://sendmyshipment.com/xpanel/uploads/1559235399_785054-ecommerce-istock-020119.jpg',
          },
          {
            src: 'https://assets.entrepreneur.com/content/3x2/2000/20150612050207-shutterstock-195559808.jpeg',
          },
          {
            src: 'https://assets.entrepreneur.com/content/3x2/2000/20150316052356-shutterstock-232609255.jpeg',
          },
        ],
      }
    },
  }
</script>