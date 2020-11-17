<template>
  <v-container fluid class="fill-height grey lighten-2">
    <v-row>
      <v-col offset-md="4" md="4" class="text-center" align-self="end">
        <v-card outlined class="text-end" elevation="4">
          <v-card-title class="justify-center"><p>LOGIN</p></v-card-title>

          <v-row>
            <v-col offset="1" cols="10">
              <v-text-field outlined label="Name" placeholder="Enter name here"></v-text-field>
              <v-text-field
                outlined
                label="Password"
                placeholder="Enter password here"
                type="password"
              ></v-text-field>
              <v-btn class="primary white--text justify-end" outlined right>Log In</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.test {
  background: #009688;
}
</style>