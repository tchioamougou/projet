<template>
  <div class="columns">
    <div class="column is-6">
      <section class="hero is-fullheight widht">
        <div class="hero-body">
          <div class="container">
            <div>
              <img src="../../src\assets\logo.png" />
            </div>
            <div class="card">
              <div class="card-content">
                <b-field label="Email">
                  <b-input type="email" v-model="email" icon="email"></b-input>
                </b-field>
                <b-field label="Password">
                  <b-input type="password" v-model="password" password-reveal icon="password"></b-input>
                </b-field>
                <div class="buttons">
                  <b-button type="is-danger" expanded @click="submit()">Login</b-button>
                </div>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <div id="firebaseui-auth-container"></div>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Sign in white
                    <a href="#">Facebook</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <span>
        C 2019 Dreamcity.com in, All right reserved|
        <a href="##">privacy</a>
      </span>
    </div>
    <div class="column is-6">
      <section class="hero is-fullheight is-primary widht">
        <div class="hero-body">
          <div class="container">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
          </div>
          <div class="subtitle">
            <span>{{message}}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.push("/chambre");
          this.data = data;
          (this.message = "success"), (this.snackbar = true);
        })
        .catch(error => {
          this.message = error.message;
          this.snackbar = true;
        });
    }
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/chambre",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ///  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
<style>
.widht {
  height: fit-content;
}
</style>