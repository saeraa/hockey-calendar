<template>
  <div class="modal">

    <!-- Add Team -->
    <div class="login-top">
      <h2 @click.prevent="getTeams">Add New Game</h2>
      <div>
        <i class="fas fa-times" @click.prevent="$emit('closeGame', $event)"></i>
      </div>
    </div>

    <vee-form @submit="submitAddEvent" :validation-schema="addEventSchema">

      <!-- Alert popup -->
      <div v-if="addEvent_show_alert" :class="addEvent_alert_variant">
        {{ addEvent_alert_msg }}
      </div>
      <!-- Home Team -->
      <div class="input">
        <ErrorMessage name="nameHome" class="error" />
        <!-- <vee-field type="nameHome" name="nameHome" class="input-field" v-on:input="check" > -->
        <vee-field name="nameHome" class="input-field" v-on:input="check" as="select">
          <option value="" disabled></option>
          <option v-for="team in this.teams" :key="team.abbr" :value="team.abbr">{{team.abbr}}</option>
        </vee-field>
        <label class="input-label">Home Team</label>
      </div>

      <!-- Away Team -->
      <div class="input">
        <ErrorMessage name="nameAway" class="error" />
        <!-- <vee-field type="nameAway" name="nameAway" class="input-field" v-on:input="check" /> -->

        <vee-field name="nameAway" class="input-field" v-on:input="check" as="select">
          <option value="" disabled></option>
          <option v-for="team in this.teams" :key="team.abbr" :value="team.abbr">{{team.abbr}}</option>
        </vee-field>
        <label class="input-label">Away Team
        </label>
      </div>

      <!-- League -->
      <div class="input">
        <ErrorMessage name="league" class="error" />
        <!-- <vee-field type="league" name="league" class="input-field" v-on:input="check" /> -->

        <vee-field name="league" class="input-field" v-on:input="check" as="select">
          <option value="" disabled></option>
          <option value="SHL">SHL</option>
          <option value="CHL">CHL</option>
          <option value="other">Other</option>
          <option value="HA">HA</option>
        </vee-field>


        <label class="input-label">League
        </label>
      </div>

      <div class="input">
        <!-- Time -->
        <div class="dateTime">
          <ErrorMessage name="time" class="error" />
          <label class="input-label">Time
          </label>
          <vee-field type="time" name="time" class="input-field" v-on:input="check" />
        </div>
        <!-- Date -->
        <div class="dateTime">
          <ErrorMessage name="date" class="error" />
          <label class="input-label">Date
          </label>
          <vee-field type="date" name="date" class="input-field" v-on:input="check" />
        </div>
      </div>

      <button type="submit" :disabled="addEvent_in_submission">
        <span v-if="!addEvent_in_submission">Add New Game</span>
        <span v-else><i class="fas fa-duotone fa-spinner animate-spin-slow mr-2"></i> Submitting team ...</span>
      </button>
    </vee-form>
  </div>
</template>

<script>
import useGameStore from "@/stores/game";
import useTeamStore from "@/stores/team";

export default {
  setup() {
    const gameStore = useGameStore()
    const teamStore = useTeamStore()
    return { gameStore, teamStore }
  },
  name: "AddEventForm",
  data() {
    return {
      teams: [],
      addEventSchema: {
        'nameHome': "required",
        'nameAway': "required",
        'league': "required|min:2|max:5|alpha_spaces",
        'time': "required",
        'date': "required"
      },
      addEvent_in_submission: false,
      addEvent_show_alert: false,
      addEvent_alert_variant: "bg-blue-500",
      addEvent_alert_msg: "Please wait! We are logging you in.",
    }
  },
  beforeCreate: async function () {
    // const teams = await this.teamStore.getTeams()
    // teams.forEach(team => {
    //   this.teams.push(team)
    // })
  },
  created: async function () {
    const teams = await this.teamStore.getTeams()
    teams.forEach(team => {
      this.teams.push(team)
    })
  },
  methods: {
    async getTeams() {
      this.teamStore.getTeams()
      console.log(this.teamStore.teams)
    },
    check($event) {
      if ($event.target.value) {
        $event.target.classList.add("notEmptyInput")
      } else {
        $event.target.classList.remove("notEmptyInput")
      }
    },
    async submitAddEvent(values, { resetForm }) {

      console.log(values)
      // this.gameStore.addGame(values)

      // date:"2022-09-24"
      // league:"eer"
      // nameAway:"dgh"
      // nameHome:"gdf"
      // time:"00:49"

      this.addEvent_show_alert = true;
      this.addEvent_in_submission = true;
      this.addEvent_alert_variant = "bg-blue-500 dark:bg-blue-700";
      this.addEvent_alert_msg = "Please wait! Submitting game information ..";

      try {
        await this.gameStore.addGame(values)
        // this.gameStore.addEvent(values)
      } catch (error) {
        console.log(error)
        this.addEvent_in_submission = false
        this.addEvent_alert_variant = "bg-red-500 dark:bg-red-700"
        this.addEvent_alert_msg = "Something went wrong."
        return
      }

      this.addEvent_alert_variant = "bg-green-500 dark:bg-green-700";
      this.addEvent_alert_msg = "Success! Game added to database.";

      this.addEvent_in_submission = true
      resetForm();
      this.addEvent_in_submission = false

    }
  }
}
</script>