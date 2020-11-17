<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TopNav from './components/TopNav'

export default {
  name: 'App',

  components: {
    TopNav,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
