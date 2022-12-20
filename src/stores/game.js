import { defineStore } from "pinia";
import { auth, gamesCollection, db } from "@/includes/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default defineStore("game", {
  state: () => ({
    games: null,
  }),
  getters: {
    getGameByDate: (state) => {
      return (date) => state.games.filter((game) => game.date === date);
    },
  },
  actions: {
    async addGame(values) {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "games"), {
        date: values.date,
        league: values.league,
        nameAway: values.nameAway,
        nameHome: values.nameHome,
        time: values.time,
      });
      console.log("Document written with ID: ", docRef.id);

      // date:"2022-09-24"
      // league:"eer"
      // nameAway:"dgh"
      // nameHome:"gdf"
      // time:"00:49"

      // do something
      // TODO Game Schema: String Name, String Short name, String League, String City
    },

    async updateGame() {
      // TODO Game update
    },
    async getAllGames() {
      this.$reset();
      this.games = new Array();
      this.games.pop();
      const querySnapshot = await getDocs(collection(db, "games"));
      querySnapshot.forEach((doc) => {
        this.games.push(doc.data());
      });

      return this.games;
    },

    async getGamesByDate(date) {
      const q = query(collection(db, "games"), where("date", "==", date));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    },
  },
});
