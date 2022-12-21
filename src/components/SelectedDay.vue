<template>
	<h2 @click.prevent="getGamesByDate(date)">{{ date }}</h2>

	<div v-if="this.games.length > 0">
		<div v-for="(value, name, index) in games" :key="index" class="game">
			<h3 class="time">{{ value.time }}</h3>
			<span class="league">
				<img
					class="league-logo"
					:src="logos[value.league.toLowerCase()]"
					alt=""
			/></span>
			<img
				class="team-logo"
				:src="logos[value.nameHome.toLowerCase()]"
				alt=""
			/>
			<span class="team">{{ teams[value.nameHome.toLowerCase()] }}</span>
			<span class="vs">vs</span>
			<span class="team"> {{ teams[value.nameAway.toLowerCase()] }}</span>
			<img
				class="team-logo"
				:src="logos[value.nameAway.toLowerCase()]"
				alt=""
			/>
		</div>
	</div>

	<div v-else class="game">Sorry, no games on this date. 😢</div>
</template>

<script>
import { logos } from "@/includes/logos.js";
import { teams } from "@/includes/teams.js";
import useGameStore from "@/stores/game";
import useTeamStore from "@/stores/team";
import { mapState } from "pinia";

export default {
	setup() {
		const gameStore = useGameStore();
		const teamStore = useTeamStore();
		const games = [];
		return {
			teams,
			logos,
			gameStore,
			getGameByDate: gameStore.getGameByDate,
			games,
			teamStore
		};
	},
	name: "SelectedDay",
	data() {
		return {};
	},
	props: {
		day: Date
	},
	methods: {
		async getGamesByDate() {
			console.log(this.teamStore.teams);
		}
	},
	created() {
		const today = this.formattedDate;
		const games = this.gameStore.getGameByDate(today);
		games.forEach((game) =>
			this.games.push({
				nameHome: game.nameHome.trim(),
				nameAway: game.nameAway.trim(),
				league: game.league,
				time: game.time,
				date: game.date
			})
		);
		const gamesArray = [...this.games].sort((a, b) =>
			a.time.localeCompare(b.time)
		);
		this.games = gamesArray;
		console.log(gamesArray);
	},
	beforeUpdate() {
		this.games = [];
		const today = this.formattedDate;
		const games = this.gameStore.getGameByDate(today);
		games.forEach((game) =>
			this.games.push({
				nameHome: game.nameHome.trim(),
				nameAway: game.nameAway.trim(),
				league: game.league,
				time: game.time,
				date: game.date
			})
		);
	},
	computed: {
		...mapState(useGameStore, ["games"]),
		date() {
			const options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			return this.day.toLocaleDateString("en-GB", options);
		},
		formattedDate() {
			let day = this.day.getDate();
			let month = this.day.getMonth() + 1; // because month is zero-indexed
			let year = this.day.getFullYear();
			if (month < 10) month = "0" + month;
			if (day < 10) day = "0" + day;

			let format = year + "-" + month + "-" + day;
			return format;
		}
	}
};
</script>
