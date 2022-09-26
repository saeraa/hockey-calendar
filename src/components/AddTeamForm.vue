<template>
  <div class="modal">
    <!-- Add Team -->
    <div class="login-top">
      <h2>Add New Team</h2>
      <div>
        <i class="fas fa-times" @click.prevent="$emit('closeTeam', $event)"></i>
      </div>
    </div>

    <vee-form @submit="submitAddTeam" :validation-schema="addTeamSchema">
      <!-- Alert popup -->
      <div v-if="addTeam_show_alert" :class="addTeam_alert_variant">
        {{ addTeam_alert_msg }}
      </div>
      <!-- Name -->
      <div class="input">

        <ErrorMessage name="name" class="error" />
        <vee-field type="name" name="name" class="input-field" v-on:input="check" />
        <label class="input-label">Name, abbreviated</label>
      </div>

      <!-- Name, long -->
      <div class="input">
        <ErrorMessage name="nameLong" class="error" />
        <vee-field type="nameLong" name="nameLong" class="input-field" v-on:input="check" />
        <label class="input-label">Name, long</label>
      </div>

      <!-- League -->
      <div class="input">

        <ErrorMessage name="league" class="error" />
        <vee-field name="league" class="input-field" v-on:input="check" as="select">
          <option value="" disabled></option>
          <option value="SHL">SHL</option>
          <option value="CHL">CHL</option>
          <option value="other">Other</option>
          <option value="HA">HA</option>
        </vee-field>
        <!-- <vee-field type="league" name="league" class="input-field" v-on:input="check" /> -->
        <label class="input-label">League</label>
      </div>

      <!-- City -->
      <div class="input">

        <ErrorMessage name="city" class="error" />
        <vee-field type="city" name="city" class="input-field" v-on:input="check" />
        <label class="input-label">City</label>
      </div>


      <button type="submit" :disabled="addTeam_in_submission">
        <span v-if="!addTeam_in_submission">Add New Team</span>
        <span v-else><i class="fas fa-duotone fa-spinner animate-spin-slow mr-2"></i> Submitting team ...</span>
      </button>
    </vee-form>
  </div>
</template>

<style lang="scss">

</style>

<script>
import { mapActions } from "pinia";
import useTeamStore from "@/stores/team";

export default {
  setup() {
    const teamStore = useTeamStore()
    return { teamStore }
  },
  name: "AddTeamForm",
  data() {
    return {
      addTeamSchema: {
        'name': "required|min:3|max:4",
        'nameLong': "required|min:3|max:100",
        'league': "required|min:2|max:5|alpha_spaces",
        'city': "required|min:3|max:100|alpha_spaces"
      },
      addTeam_in_submission: false,
      addTeam_show_alert: false,
      addTeam_alert_variant: "bg-blue-500",
      addTeam_alert_msg: "Please wait! We are logging you in.",
    }
  },
  methods: {
    check($event) {
      if ($event.target.value) {
        $event.target.classList.add("notEmptyInput")
      } else {
        $event.target.classList.remove("notEmptyInput")
      }
    },
    ...mapActions(useTeamStore, ["addTeam"]),
    async submitAddTeam(values, { resetForm }) {
      this.addTeam_show_alert = true;
      this.addTeam_in_submission = true;
      this.addTeam_alert_variant = "bg-blue-500 dark:bg-blue-700";
      this.addTeam_alert_msg = "Please wait! Submitting team information ..";

      try {
        await this.teamStore.addTeam(values)
      } catch (error) {
        console.log(error)
        this.addTeam_in_submission = false
        this.addTeam_alert_variant = "bg-red-500 dark:bg-red-700"
        this.addTeam_alert_msg = "Something went wrong."
        return
      }

      this.addTeam_alert_variant = "bg-green-500 dark:bg-green-700";
      this.addTeam_alert_msg = "Success! Team added to database.";

      this.addTeam_in_submission = true
      resetForm();
      this.addTeam_in_submission = false

    }
  }
}
</script>