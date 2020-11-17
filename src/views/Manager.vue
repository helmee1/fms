<template>
  <v-sheet color="#212938" height="100%">
    <v-container class="" fluid>
      <v-row>
        <v-tabs v-model="tabs" grow background-color="transparent" dark>
          <v-tab> Busses </v-tab>
          <v-tab> Notification </v-tab>
          <v-tab> Message </v-tab>
          <v-tab> Map </v-tab>
        </v-tabs>
      </v-row>

      <v-row>
        <v-col>
          <v-tabs-items v-model="tabs">
            <!-- ITEM TAB 1 START -->

            <v-tab-item>
              <div class="d-flex manager align-content-space-between flex-wrap">
                <v-card
                  outlined
                  tile
                  min-width="100%"
                  class="white--text mb-3"
                  color="#283040"
                >
                  <v-card-title>Bus Operational</v-card-title>
                  <v-card-text>
                    <v-simple-table dark>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Bus ID</th>
                            <th class="text-left">GPS Location</th>
                            <th class="text-left">Trip ID</th>
                            <th class="text-left">Next Stop</th>
                            <th class="text-left">ETA</th>
                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in dummyData" :key="item.name">
                            <td>{{ item.bus }}</td>
                            <td>{{ item.gps }}</td>
                            <td>{{ item.trip }}</td>
                            <td>{{ item.nextStop }}</td>
                            <td>{{ item.eta }}</td>
                            <td>
                              <v-btn class="primary" small> Update</v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
                <v-divider></v-divider>
                <v-card
                  outlined
                  tile
                  min-width="100%"
                  class="white--text"
                  color="#283040"
                >
                  <v-card-title>Not Operational</v-card-title>
                  <v-card-text>
                    <v-simple-table dark>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Bus ID</th>
                            <th class="text-left">GPS Location</th>
                            <th class="text-left">Trip ID</th>
                            <th class="text-left">Next Stop</th>
                            <th class="text-left">ETA</th>
                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in dummyData" :key="item.name">
                            <td>{{ item.bus }}</td>
                            <td>{{ item.gps }}</td>
                            <td>{{ item.trip }}</td>
                            <td>{{ item.nextStop }}</td>
                            <td>{{ item.eta }}</td>
                            <td>
                              <v-btn class="primary" small> Update</v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </div>
            </v-tab-item>
            <!-- ITEM TAB 1 END -->
            <!-- ITEM TAB 2 START-->
            <v-tab-item>
              <div class="d-flex manager align-content-space-between flex-wrap">
                <v-card
                  outlined
                  tile
                  min-width="100%"
                  class="white--text mb-3"
                  color="#283040"
                >
                  <v-card-text>
                    <v-simple-table dark>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Date</th>
                            <th class="text-left">Time</th>
                            <th class="text-left">Route</th>
                            <th class="text-left">Bus</th>
                            <th class="text-left">Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in 10" :key="item.name">
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
              </div>
            </v-tab-item>
            <!-- ITEM TAB 2 END-->
            <!-- ITEM TAB 3 START -->
            <v-tab-item>
              <div class="d-flex manager align-content-space-between flex-wrap">
                <v-card
                  outlined
                  tile
                  min-width="100%"
                  class="white--text mb-3"
                  color="#283040"
                >
                  <v-card-text>
                    <v-simple-table dark>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Date</th>
                            <th class="text-left">Time</th>
                            <th class="text-left">Message</th>
                            <th class="text-left">Send To</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in 10" :key="item.name">
                            <td>date</td>
                            <td>time</td>
                            <td>message</td>
                            <td>sendTo</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </div>
            </v-tab-item>
            <!-- ITEM TAB 3 END -->
            <!-- ITEM TAB 4 START -->
            <v-tab-item>
              <div class="d-flex manager align-content-center flex-wrap justify-center">
                <v-card
                  outlined
                  tile
                  min-width="100%"
                  min-height="80%"
                  class="white--text text-center mb-3"
                  color="#283040"
                >
                  <v-card-text class="white--text">
                        Google Map Insert Here
                  </v-card-text>
                </v-card>
              </div>
            </v-tab-item>
            <!-- ITEM TAB 4 END -->
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      tabs: "",
      dummyData: [
        {
          bus: "ABC1234W",
          gps: "-",
          trip: "-",
          nextStop: "-",
          eta: "-",
          status: "Breakdown",
        },
        {
          bus: "ABC2222W",
          gps: "-",
          trip: "-",
          nextStop: "-",
          eta: "-",
          status: "Operational",
        },
        {
          bus: "ABC3333W",
          gps: "-",
          trip: "-",
          nextStop: "-",
          eta: "-",
          status: "Operational",
        },
        {
          bus: "ABC4444W",
          gps: "-",
          trip: "-",
          nextStop: "-",
          eta: "-",
          status: "Operational",
        },
        {
          bus: "WYR9588",
          gps: "-",
          trip: "-",
          nextStop: "-",
          eta: "-",
          status: "Operational",
        },
      ],
    };
  },
};
</script>

<style>
.manager {
  background: #212938;
}
.card-color {
  background: #283040;
}
</style>