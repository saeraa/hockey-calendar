<template>

  <Logo />

  <Menu @addNewTeam="addNewTeam" @addNewGame="addNewGame" @toggleAuth="toggleAuthModal" />

  <!-- <li>
    <a href="#" @click.prevent="toggleAuthModal">Login / Register</a>
  </li> -->


  <AppAuth />

  <div>
    <AddEventForm class="modal" v-if="addNewGameToggle" @closeGame="addNewGame" />
  </div>

  <div>
    <AddTeamForm class="modal" v-if="addNewTeamToggle" @closeTeam="addNewTeam" />
  </div>

  <main>

    <div>
      <Calendar @date-selected="dateSelected" />
    </div>

    <div class="day">
      <SelectedDay :day=selectedDay />
    </div>

  </main>

  <div class="legend">
    HA - HockeyAllsvenskan, SHL - Swedish Hockey League, CHL - Champions Hockey League
  </div>
</template>

<script>
import Logo from "./components/Logo.vue"
import Menu from "./components/Menu.vue"
import AddTeamForm from "./components/AddTeamForm.vue"
import SelectedDay from "./components/SelectedDay.vue"
import AddEventForm from "./components/AddEventForm.vue"
import Calendar from './components/Calendar.vue'
import AppAuth from "./components/AppAuth.vue";
import useUserStore from "@/stores/user"
import useModalStore from "@/stores/modal";
import { auth } from "./includes/firebase"
import { mapWritableState, mapStores } from "pinia"

export default {
  name: "App",
  data() {
    return {
      addNewTeamToggle: false,
      addNewGameToggle: false,
      selectedDay: new Date(),
    }
  },
  components: {
    Logo,
    Menu,
    Calendar,
    AppAuth,
    AddTeamForm,
    AddEventForm,
    SelectedDay
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
    ...mapStores(useModalStore, useUserStore),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  },
  methods: {
    addNewTeam($event) {
      console.log("addNewTeam")
      console.log(this.addNewTeamToggle)
      this.addNewTeamToggle = !this.addNewTeamToggle

      if (this.addNewTeamToggle && this.addNewGameToggle) {
        this.addNewGameToggle = !this.addNewGameToggle
      }

      if (this.modalStore.isOpen) this.modalStore.isOpen = false

    },
    addNewGame($event) {
      console.log("addNewGame")
      console.log(this.addNewGameToggle)
      this.addNewGameToggle = !this.addNewGameToggle

      if (this.addNewTeamToggle && this.addNewGameToggle) {
        this.addNewTeamToggle = !this.addNewTeamToggle
      }

      if (this.modalStore.isOpen) this.modalStore.isOpen = false

    },
    dateSelected($event) {
      console.log($event)
      this.selectedDay = $event
    },
    toggleAuthModal() {
      console.log("hi")
      if (this.addNewTeamToggle || this.addNewGameToggle) {
        this.addNewTeamToggle = false
        this.addNewGameToggle = false
      }
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
    signOut() {
      this.userStore.signOut()
      // console.log(this.$route)
      // // if (this.$route.name === "manage") { 
      // if (this.$route.meta.requiresAuth) { // better way when multiple routes requiring authentication
      //   this.$router.push({ name: "home" }) // redirecting user to homepage when logged out
    }
  }
}

</script>