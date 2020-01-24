import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import i18n from "./i18n";

Vue.use(Buefy);
//import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.use(BootstrapVue);
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDLr1mfqNzZyVReAgRr1ea8LGigxxkOnCE",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
