import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/styles/index.scss";
import VeeValidatePlugin from "@/includes/validation";
import { auth } from "@/includes/firebase";
import App from "@/App.vue";

// createApp(App).mount('#app')

let app;

auth.onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App);
		app.use(createPinia());
		app.use(VeeValidatePlugin);
		app.mount("#app");
	}
});

// // TODO: CSS: Arrange
// TODO: CSS: Media queries for modals
// TODO: CSS: Top padding for mobile

// // TODO: DATABASE
// // TODO: Import data from database
//       // TODO Game info into game store
//       // TODO Team info into team store

// TODO: close menu when modal closes
// right now it's closing when one option is clicked

// TODO: Add button to calendar + Selected Day: add event on day
// prefill the date on the add new game form

// TODO: Options for times?

// TODO: Full week events?

/* 
PuckTime
hockeyview
teamtime
on the ice

rinkio
slapshot

chillout


Faster One Regular.
Advent Pro Medium


*/
