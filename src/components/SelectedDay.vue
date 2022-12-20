<template>
	<h2 @click.prevent="getGamesByDate(date)">{{ date }}</h2>

	<div v-if="this.games.length > 0">
		<div v-for="(value, name, index) in games" :key="index" class="game">
			<h3 class="time">{{ value.time }}</h3>
			<span class="league">{{ value.league }}</span>
			<span class="team">{{ value.nameHome }}</span>
			<span class="vs">vs</span>
			<span class="team">{{ value.nameAway }}</span>
		</div>
	</div>

	<div v-else class="game">Sorry, no games on this date. 😢</div>
</template>

<script>
import useGameStore from "@/stores/game";
import useTeamStore from "@/stores/team";
import { mapState } from "pinia";

export default {
	setup() {
		const gameStore = useGameStore();
		const teamStore = useTeamStore();
		const games = [];
		return {
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
				nameHome: game.nameHome,
				nameAway: game.nameAway,
				league: game.league,
				time: game.time,
				date: game.date
			})
		);
		const gamesArray = [...this.games].sort((a, b) =>
			a.time.localeCompare(b.time)
		);
		this.games = gamesArray;
	},
	beforeUpdate() {
		this.games = [];
		const today = this.formattedDate;
		const games = this.gameStore.getGameByDate(today);
		games.forEach((game) =>
			this.games.push({
				nameHome: game.nameHome,
				nameAway: game.nameAway,
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
