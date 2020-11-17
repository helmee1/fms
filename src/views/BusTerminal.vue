<template>
  <v-sheet color="#212938" height="100%">
    <v-container>
      <v-row class="clock-top white--text">
        <v-col md="6">
          <h3>LTCP Bus Terminal</h3>
        </v-col>
        <v-col md="6 text-end">
          <h3>
            Current Time
            <span class="ml-2 grey px-2 py-1 yellow--text">10</span>
            <span class="ml-2 grey px-2 py-1 yellow--text">10</span>
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex justify-space-around white--text">
            <div class="text-center">
              KLIA 1
              <v-img src="@/assets/pin0.svg"></v-img>
              <div class="bullet mt-2"></div>
            </div>
            <div class="text-center">
              KLIA 2
              <v-img src="@/assets/pin0.svg"></v-img>
              <div class="bullet mt-2"></div>
            </div>
            <div class="text-center">
              LTCP
              <v-img src="@/assets/pin2.svg"></v-img>
              <div class="bullet mt-2"></div>
            </div>
          </div>
          <div class="white-line mt-n14"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            width="100%"
            color="#283040"
            class="white--text"
            elevation="4"
            tile
            outlined
          >
            <v-card-title>Bus Fleet Management Information</v-card-title>
            <v-card-text>
              <v-simple-table dark>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Bus ID</th>
                      <th class="text-left">Next Stop</th>
                      <th class="text-left">Arrival</th>
                      <th class="text-left">Arrival</th>
                      <th class="text-left">Departure</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in 8" :key="item.name">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-footer absolute color="#981d1d" class="white--text example1">
        <h3 class="display-1 mt-2 pa-1">Please made available 2 hours earlier for Covid-19 screening</h3>
      </v-footer>
    </v-container>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style>
.clock-top {
  background: #424b5f;
}
.route {
  display: flex;
  justify-content: center;
}

.white-line {
  border-bottom: 8px solid #fff;
  margin-top: 0.2rem;
  position: relative;
  width: 100%;
  height: 47px;
}

.bullet {
  width: 1.8rem;
  height: 1.8rem;
  background: #fff;
  border-radius: 50%;
  border: 0.3rem solid red;
  margin: auto;
}
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