<template>
  <div>
    <b-navbar class="is-dark">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item class="is-dark" href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <step-three></step-three>
  </div>
</template>
<script>
import { db } from "../plugins/firebase.js";
import StepThree from "../components/StepThree.vue";
//import step from "../components/step.vue";
export default {
  components: {
    StepThree
    //  step
  },
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
