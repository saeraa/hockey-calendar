import { defineStore } from "pinia";
import { db, teamsCollection } from "@/includes/firebase"
import { collection, setDoc, addDoc, getDocs, doc } from "firebase/firestore";

export default defineStore("team", {
  state: () => ({
    teams: []
  }),
  actions: {

    async getTeams() {
      // console.log("get teams")
      const querySnapshot = await getDocs(collection(db, "teams"));
      // console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // console.log(doc.data().name)
        const teamAlreadyExists = this.teams.find(team => team.name === doc.data().name)
        if (teamAlreadyExists) return
        else this.teams.push({ ...doc.data(), abbr: doc.id })

      });
      return this.teams


      // const docRef = doc(db, "teams");
      // const docSnap = await getDocs(docRef);

      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    },

    async addTeam(values) {
      // test this instead
      db.collection("teams").doc(values.name).set({
        name: values.nameLong,
        city: values.city,
        league: values.league
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      // await addDoc(collection(teamsCollection, "teams", values.name), {
      //   name: values.nameLong,
      //   city: values.city,
      //   league: values.league

      // });

      // await teamsCollection.doc(userCred.user.uid).set({
      //   // await usersCollection.add({
      //   name: values.name,
      //   email: values.email,
      //   age: values.age,
      //   country: values.country
      // })
    },



  },
})