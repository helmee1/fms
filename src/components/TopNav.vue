<template>
  <v-app-bar app color="#0a4879" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="./../assets/logo-mi.svg"
        transition="scale-transition"
        width="40"
      />
      <h2 class="title" :class="$vuetify.breakpoint.smAndDown? 'subtitle-2' : ''">Fleet Management Command Center</h2>
    </div>

    <v-spacer></v-spacer>
    <span class="hidden-md-and-up">
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </span>
    <span class="hidden-sm-and-down">
      <v-btn text>
        <span class="mr-2">Provisioning Screen</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Rules</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Version 1</span>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <span class="mr-2">Admin</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "Profile" }, { title: "Setting" }, { title: "Logout" }],
    };
  },
};
</script>

<style>
</style>