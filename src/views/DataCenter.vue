<template>
  <v-container fluid class="fill-height data-center">
    <v-row justify="space-around">
      <v-col class="card-color white--text" cols="12" md="5">
        <div class="d-flex justify-space-between">
          <div class="display-1">Data Center</div>
          <div class="display-1">
            <v-btn class="grey--text" icon small
              ><v-icon>mdi-refresh-circle</v-icon></v-btn
            >
            <v-btn class="grey--text" icon small
              ><v-icon>mdi-information-outline</v-icon></v-btn
            >
          </div>
        </div>
        <div class="map d-flex align-center justify-center">
          /map will insert here
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex flex-wrap fill-height align-content-space-between">
          <v-card
            width="100%"
            height="50%"
            class="ma-n2"
            color="#283040"
            outlined
            tile
            ><v-card-title class="white--text"
              >Bus Fleet Management information</v-card-title
            >
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
                      <td>{{ item.status }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          <v-card
            width="100%"
            height="50%"
            class="ma-n2"
            color="#283040"
            outlined
            tile
            ><v-card-title class="white--text">Notification Panel</v-card-title>
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
                      <td>{{ item.status }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </div>

        <!-- <div class="d-flex fill-height flex-column align-content-center">
          <v-card
            width="100%"
            height="100%"
            class="pa-2"
            color="#283040"
            tile
            outlined
          >
            <v-card-title class="white--text">Bus Fleet Management information</v-card-title>
          </v-card>
          <v-card
            width="100%"
            height="100%"
            class="pa-2 card-color"
            color="#283040"
            tile
            outlined
          >
            <v-card-title >Notification Panel</v-card-title> </v-card
          >
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    initMap() {
      // The location of Uluru
      const uluru = { lat: -25.344, lng: 131.036 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
      });
    },
  },
  beforeMount() {
    // this.initMap();
  },
};
</script>

<style  scoped>
.data-center {
  background: #212938;
}

.card-color {
  background: #283040;
}
.map {
  height: 70vh;
}
</style>