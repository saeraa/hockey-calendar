<template>
  <!-- Auth Modal -->
  <div :class="hiddenClass" class="modal">
    <div class="login-top">
      <h2>Your Account</h2>
      <!-- Modal Close Button -->
      <div @click="modalVisibility = false">
        <i class="fas fa-times"></i>
      </div>
    </div>

    <!-- Tabs -->
    <div class="login-top">
      <ul>
        <li>
          <a
            @click.prevent="tab = 'login'"
            :class="{
              'hover:text-white text-white bg-blue-600 dark:bg-orange-700':
                tab === 'login',
              'hover:text-blue-600 dark:hover:text-orange-600':
                tab === 'register',
            }"
            href="#"
            >Login</a
          >
        </li>

        <li>
          <a
            @click.prevent="tab = 'register'"
            :class="{
              'hover:text-white text-white bg-blue-600 dark:bg-orange-700':
                tab === 'register',
              'hover:text-blue-600 dark:hover:text-orange-600': tab === 'login',
            }"
            href="#"
            >Register</a
          >
        </li>
      </ul>
    </div>

    <LoginForm v-if="tab === 'login'" />
    <RegisterForm v-else />
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  name: "AppAuth",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  methods: {},
  computed: {
    ...mapState(useModalStore, ["hiddenClass"]),
    ...mapWritableState(useModalStore, {
      modalVisibility: "isOpen",
    }),
  },
};
</script>
