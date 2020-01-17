<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="type.types" />
    <button @click="add(type)">add</button>
    <h2 v-for="item in house" :key="item.types">{{item.type}}</h2>
  </div>
</template>
<script>
import { db } from "../plugins/firebase.js";
export default {
  data() {
    return {
      doc: "",
      house: [],
      type: { types: "" }
    };
  },
  mounted() {
    db.collection("house")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.house.push(doc.data());
        });
      })
      .catch(function(error) {
        this.doc = error;
      });
  },
  methods: {
    add: function(house) {
      db.collection("house").add(house);
      this.type.types = "";
    }
  }
};
</script>
