<template>
  <v-app light>
   
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="myheader"
    >      
      <router-link to="/"><img src="../assets/v.png" class="small" /></router-link>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text  to="/login" class="menuTxt">Login</v-btn>
        <v-btn text  class="ml-3 menuTxt" to="/needhelp">Need help?</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span><small class="foo">Fredrick Falana</small> &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Service Merchant',
          to: '/login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '9pay',
      img: 'https://9pay.com.ng/v2/img/9-pay-logo@3x.png'
    }
  }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
.menuTxt{
  color: #fff !important;
}
.myheader{
background-image: linear-gradient(to right, rgba(159, 214, 166, 0), rgb(64, 126, 69))!important;
}
.small{
  width: 70px;
  height:50px;
  margin-left: 40px;
}
.foo{
  font-size: 9px;
  color:rgb(64, 126, 69);
}
</style>