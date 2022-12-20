<template>
  <div class="container">
    <div
      class="menu-toggle"
      v-on:click="toggleMenu"
      :class="{ open: openMenu }"
    >
      <span
        class="fa fas"
        :class="{ 'fa-xmark fa-solid': openMenu, 'fa-bars': !openMenu }"
      ></span>
    </div>
    <div class="menu-line" :class="{ open: openMenu }">
      <div class="btn-app" @click.prevent="toggleMenu">
        <div class="" @click.prevent="$emit('toggleAuth', $event)">
          Login / Register
        </div>
      </div>
      <div class="btn-app" @click.prevent="toggleMenu">
        <div class="" @click.prevent="$emit('addNewTeam', $event)">
          Add New Team
        </div>
      </div>
      <div class="btn-app" @click.prevent="toggleMenu">
        <div class="" @click.prevent="$emit('addNewGame', $event)">
          Add New Game
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useUserStore from "@/stores/user";
import useModalStore from "@/stores/modal";
import { mapWritableState, mapStores } from "pinia";

export default {
  data() {
    return {
      openMenu: false,
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
    ...mapStores(useModalStore, useUserStore),
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
  },
};
</script>
