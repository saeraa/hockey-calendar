<template>
  <vue-cal
    :disable-views="['years', 'year', 'week', 'day']"
    class=""
    locale="en"
    active-view="month"
    hide-view-selector
    :on-event-click="onEventClick"
    today-button
    @cell-click="
      logEvents('cell-click', $event), $emit('date-selected', $event)
    "
    :events="events"
  >
    <template #today-button>
      <i class="fa fa-crosshairs"></i>
    </template>

    <template #events-count="{ events }">
      <span
        class="vuecal__cell-events-count shl"
        v-if="customEventsCount(events, 'SHL')"
      >
        {{ customEventsCount(events, "SHL") }}
      </span>
      <span
        class="vuecal__cell-events-count chl"
        v-if="customEventsCount(events, 'CHL')"
      >
        {{ customEventsCount(events, "CHL") }}
      </span>
      <span
        class="vuecal__cell-events-count other"
        v-if="customEventsCount(events, 'other')"
      >
        {{ customEventsCount(events, "other") }}
      </span>
      <span
        class="vuecal__cell-events-count ha"
        v-if="customEventsCount(events, 'HA')"
      >
        {{ customEventsCount(events, "HA") }}
      </span>
    </template>
  </vue-cal>
</template>

<script>
// Documentation: https://antoniandre.github.io/vue-cal

import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import useGameStore from "@/stores/game";
import useTeamStore from "@/stores/team";

export default {
  data() {
    return {
      teams: [],
      events: [
        // {
        //   // You can also define event dates with Javascript Date objects:
        //   // start: new Date(2018, 11 - 1, 16, 10, 30),
        //   // end: new Date(2018, 11 - 1, 16, 11, 30),
        //   start: '2022-09-04',
        //   end: '2022-09-04',
        //   title: 'Need to go shopping',
        //   content: '<i class="icon material-icons">shopping_cart</i>',
        //   class: 'shl'
        // },
        // {
        //   // You can also define event dates with Javascript Date objects:
        //   // start: new Date(2018, 11 - 1, 16, 10, 30),
        //   // end: new Date(2018, 11 - 1, 16, 11, 30),
        //   start: '2022-09-04',
        //   end: '2022-09-04',
        //   title: 'Need to go shopping',
        //   content: '<i class="icon material-icons">shopping_cart</i>',
        //   class: 'chl'
        // },
        // {
        //   // You can also define event dates with Javascript Date objects:
        //   // start: new Date(2018, 11 - 1, 16, 10, 30),
        //   // end: new Date(2018, 11 - 1, 16, 11, 30),
        //   start: '2022-09-04',
        //   end: '2022-09-04',
        //   title: 'Need to go shopping',
        //   content: '<i class="icon material-icons">shopping_cart</i>',
        //   class: 'other'
        // },
        // {
        //   // You can also define event dates with Javascript Date objects:
        //   // start: new Date(2018, 11 - 1, 16, 10, 30),
        //   // end: new Date(2018, 11 - 1, 16, 11, 30),
        //   start: '2022-09-04',
        //   end: '2022-09-04',
        //   title: 'Need to go shopping',
        //   content: '<i class="icon material-icons">shopping_cart</i>',
        //   class: 'shl'
        // },
        // {
        //   // You can also define event dates with Javascript Date objects:
        //   // start: new Date(2018, 11 - 1, 16, 10, 30),
        //   // end: new Date(2018, 11 - 1, 16, 11, 30),
        //   start: '2022-09-04',
        //   end: '2022-09-04',
        //   title: 'Need to go shopping',
        //   content: '<i class="icon material-icons">shopping_cart</i>',
        //   class: 'ha'
        // }
      ],
    };
  },
  setup() {
    const gameStore = useGameStore();
    const teamStore = useTeamStore();
    return { gameStore, teamStore };
  },
  name: "Calendar",
  components: { VueCal },
  methods: {
    customEventsCount: (events, team) => {
      return events ? events.filter((e) => e.class === team).length : 0;
    },
    onEventClick(event) {
      // console.log("event selected ", event)
    },
    logEvents(click, $event) {
      // console.log($event)
    },
  },
  created: async function () {
    const teams = await this.teamStore.getTeams();
    teams.forEach((team) => {
      this.teams.push(team);
    });
  },
  async beforeMount() {
    // console.log(this.gameStore.games)

    const games = await this.gameStore.getAllGames();
    // console.log("events ", this.events)

    games.forEach((game) => {
      this.events.push({
        start: game.date,
        end: game.date,
        nameHome: game.nameHome,
        league: game.league,
        nameAway: game.nameAway,
        class: game.league.toUpperCase(),
      });
    });
  },
};
</script>

<!-- 
// :on-event-create="onEventCreate", in template.

/**
* @param event {Object} The newly created event that you can override.
* @param deleteEventFunction {Function} Allows you to delete this event programmatically.
* @return {Object | false} The event to be passed back to Vue Cal, or false to reject creation.
*/
onEventCreate (event, deleteEventFunction) {
    // You can modify event here and return it.
    // You can also return false to reject the event creation.
    return event
} -->
