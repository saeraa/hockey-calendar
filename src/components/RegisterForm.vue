<template>
  <!-- Registration Form -->
  <vee-form :validation-schema="schema" @submit="register">
    <!-- Alert popup -->
    <div v-if="reg_show_alert" :class="reg_alert_variant">
      {{ reg_alert_msg }}
    </div>

    <!-- Name -->
    <div class="input">
      <ErrorMessage class="error" name="name" />
      <vee-field
        v-on:input="check"
        class="input-field"
        type="text"
        name="name"
      ></vee-field>
      <label class="input-label">Name</label>
    </div>

    <!-- Email -->
    <div class="input">
      <ErrorMessage name="email" class="error" />
      <vee-field
        v-on:input="check"
        type="email"
        name="email"
        class="input-field"
      />
      <label class="input-label">Email</label>
    </div>

    <!-- Password -->
    <div class="input">
      <ErrorMessage name="confirm_password" class="error" />
      <vee-field
        v-on:input="check"
        name="password"
        type="password"
        class="input-field password-field"
      />
      <i class="fas fa-solid fa-eye eye-icon" @click="revealPassword"></i>
      <label class="input-label"> Password </label>
    </div>

    <!-- Confirm Password -->
    <div class="input">
      <ErrorMessage name="confirm_password" class="error" />
      <vee-field
        v-on:input="check"
        name="confirm_password"
        type="password"
        class="input-field password-field"
      />
      <i class="fas fa-solid fa-eye eye-icon" @click="revealPassword"></i>
      <label class="input-label">Confirm Password</label>
    </div>

    <button type="submit" class="submit-btn" :disabled="reg_in_submission">
      Register new account
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  name: "RegisterForm",
  data() {
    return {
      hidePassword: true,
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        password: "required|min:9|max:100|excluded:password",
        confirm_password: "passwords_mismatch:@password",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: "bg-blue-500",
      reg_alert_msg: "Please wait! Your account is being created.",
    };
  },
  computed: {},
  methods: {
    check($event) {
      if ($event.target.value) {
        $event.target.classList.add("notEmptyInput");
      } else {
        $event.target.classList.remove("notEmptyInput");
      }
    },
    ...mapActions(useUserStore, {
      createUser: "register",
    }),
    async register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = "bg-blue-500 dark:bg-blue-700";
      this.reg_alert_msg = "Please wait! Your account is being created.";

      try {
        console.log("trying to register");
        console.log(this.userStore);
        await this.userStore.register(values);
      } catch (error) {
        this.reg_in_submission = false;
        this.reg_alert_variant = "bg-red-700";
        this.reg_alert_msg =
          "An unexpected error occurred! Please try again later.";
        return;
      }

      this.reg_alert_variant = "bg-green-500 dark:bg-green-700";
      this.reg_alert_msg = "Success! Your account has been created!";

      setTimeout(() => {
        window.location.reload();
      }, 800);
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
