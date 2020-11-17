<template>
  <v-sheet color="#212938" height="100%">
    <v-container fluid>
      <v-row
        class="grey lighten-4 mt-n3 justify-center align-center"
        style="height: 20vh"
      >
        <h3>This is a Placeholder Image</h3>
      </v-row>
      <v-row
        class="red darken-4 mt-n3 justify-center align-center white--text"
        style="height: 10vh"
      >
        <v-col class="example-1">
          <h3 class=" mt-2 pa-1">
            Please made available 2 hours earlier for Covid-19 screening
          </h3>
        </v-col>
      </v-row>
      <v-row class="mb-16">
        <v-card width="100%" tile>
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">KLIA 1</th>
                  <th class="text-center">KLIA 2</th>
                  <th class="text-center">LTCP</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in 20" :key="index">
                  <td class="text-center"><p class="pa-0 mt-2 mb-0"> {{item}}: 10</p> <p>everyday</p></td>
                  <td class="text-center"><p class="pa-0 mt-2 mb-0">{{ item }}: 05</p><p>everyday</p></td>
                  <td class="text-center"><p class="pa-0 mt-2 mb-0">{{ item }}: 04<p>everyday</p></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-row>

      <v-footer fixed color="#0066FF">
        <v-row justify="space-around">
          <v-btn
            v-for="(location, index) in locations"
            :key="index"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ location }}
          </v-btn>
        </v-row>
      </v-footer>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      locations: ["Arrival", "KLIA 1", "KLIA 2", "LTCP"],
    };
  },
};
</script>

<style>
.example1 {
  height: 50px;
  overflow: hidden;
  position: relative;
}
.example1 h3 {
  font-size: 3em;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  /* Starting position */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  /* Apply animation to this element */
  -moz-animation: example1 15s linear infinite;
  -webkit-animation: example1 15s linear infinite;
  animation: example1 15s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes example1 {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes example1 {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes example1 {
  0% {
    -moz-transform: translateX(100%); /* Firefox bug fix */
    -webkit-transform: translateX(100%); /* Firefox bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Firefox bug fix */
    -webkit-transform: translateX(-100%); /* Firefox bug fix */
    transform: translateX(-100%);
  }
}
</style>