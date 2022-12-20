<template>
  <!-- Login Form -->
  <vee-form @submit="login" :validation-schema="loginSchema" autocomplete="off">
    <input autocomplete="off" name="hidden" type="text" style="display: none" />
    <!-- Alert popup -->
    <div v-if="login_show_alert" :class="login_alert_variant">
      {{ login_alert_msg }}
    </div>

    <!-- Email -->
    <div class="input">
      <ErrorMessage name="email" class="error" />
      <vee-field
        type="email"
        name="email"
        class="input-field"
        v-on:input="check"
        autocomplete="off"
        value=" "
      />
      <label class="input-label">Email </label>
    </div>
    <!-- Password -->
    <div class="input">
      <ErrorMessage name="password" class="error" />
      <vee-field
        type="password"
        name="password"
        class="input-field"
        v-on:input="check"
      />
      <i class="fas fa-solid fa-eye eye-icon" @click="revealPassword"></i>
      <label class="input-label">Password</label>
    </div>
    <button type="submit" :disabled="login_in_submission">
      <span v-if="!login_in_submission">Login</span>
      <span v-else
        ><i class="fas fa-duotone fa-spinner animate-spin-slow mr-2"></i>
        Logging in ...</span
      >
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "LoginForm",
  data() {
    return {
      hidePassword: true,
      loginSchema: {
        email: "required|min:3|max:100|email",
        password: "required|min:9|max:100|excluded:password",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait! We are logging you in.",
    };
  },
  methods: {
    check($event) {
      if ($event.target.value) {
        $event.target.classList.add("notEmptyInput");
      } else {
        $event.target.classList.remove("notEmptyInput");
      }
    },
    ...mapActions(useUserStore, ["authenticate"]),
    async login(values) {
      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = "bg-blue-500 dark:bg-blue-700";
      this.login_alert_msg = "Please wait! We are logging you in.";

      try {
        await this.authenticate(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = "bg-red-500 dark:bg-red-700";
        this.login_alert_msg = "Invalid login details.";
        return;
      }

      this.login_alert_variant = "bg-green-500 dark:bg-green-700";
      this.login_alert_msg = "Success! You are now logged in.";

      this.login_in_submission = true;

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    revealPassword(event) {
      if (this.hidePassword) {
        event.target.classList.remove("fa-eye-slash");
        event.target.classList.add("fa-eye");
        event.target.previousElementSibling.type = "password";
        this.hidePassword = false;
      } else {
        event.target.classList.add("fa-eye-slash");
        event.target.classList.remove("fa-eye");
        event.target.previousElementSibling.type = "text";
        this.hidePassword = true;
      }
    },
  },
};
</script>
