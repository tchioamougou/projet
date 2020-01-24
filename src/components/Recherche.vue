<template>
  <div class="container columns">
    <div class="column is-2">
      <b-loading :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
    <div class="column is-8">
      <div class="container">
        <div>
          <h1>Recherche avancée</h1>
        </div>
        <hr />
        <div class="diva">{{ $t("veut-louer") }}</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
            <div class>
              <div
                @click="chose(item)"
                :class="item.chose ? ' image-check hover01' : 'hover01 none'"
              >
                <img :src="getImgUrl(item.icon)" class="image" />
              </div>
              <p class="diva">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{ $t("louer-ou") }}</div>
        <div class="columns">
          <div class="column is-10">
            <b-field>
              <b-autocomplete
                v-model="search.address.name"
                icon="account"
                placeholder="adresse"
                :data="filteredDataObj"
                field="name"
                @select="option => (search.address = option)"
              ></b-autocomplete>
            </b-field>
            <div class="div-info">
              <p>Hello. How are you today?</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{ $t("budget") }}</div>
        <div class="columns">
          <div class="column is-5">
            <b-field>
              <p class="control">
                <button class="button">Min</button>
              </p>
              <b-input v-model="search.minPrice" type="number" rounded></b-input>
              <p class="control">
                <button class="button">£</button>
              </p>
            </b-field>
            <div class="div-info">
              <p>Hello. How are you today?</p>
            </div>
          </div>
          <div class="column is-5">
            <b-field>
              <p class="control">
                <button class="button">Max</button>
              </p>
              <b-input v-model="search.maxPrice" type="number" rounded></b-input>
              <p class="control">
                <button class="button">£</button>
              </p>
            </b-field>
            <div class="div-info">
              <p>Hello. How are you today?</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{ $t("envies") }}</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in need" :key="item.text">
            <div>
              <div
                @click="chose(item)"
                :class="item.chose ? ' image-check hover01' : 'hover01 none'"
              >
                <img :src="getImgUrl(item.icon)" class="image" />
              </div>
              <p class="diva">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{ $t("autre") }}</div>
        <div>
          <section>
            <div class="block">
              <div class="diva">
                <b-checkbox v-model="search.otherRooms" native-value="Cuisine">Cuisine séparée</b-checkbox>
              </div>
              <div class="diva">
                <b-checkbox v-model="search.otherRooms" native-value="Toilette">Toilette séparée</b-checkbox>
              </div>
              <div class="diva">
                <b-checkbox v-model="search.otherRooms" native-value="Eau">Sale d'eau(douche)</b-checkbox>
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card fixed">
        <div class="card-content">
          <div class="content">
            <div class="diva">
              <p></p>
              <h1>{{ rechercheLength }} annonces {{ search.type }}</h1>
              <h2>{{ search.otherRooms }}</h2>
              <b-button type="is-danger" rounded @click="translate()">
                {{
                $t("buttons-search")
                }}
              </b-button>
            </div>
          </div>
        </div>
        <footer class="card-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../plugins/firebase.js";
const data = require("@/data/address.json");
const typeAlouer = require("@/data/house.json");
const need = require("@/data/need.json");
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    rechercheHouse: function() {
      return this.house.filter(item => {
        if (
          item.address.name.match(this.search.address.name) &&
          (this.search.type.includes(item.type) ||
            this.search.type.length === 0) &&
          (item.otherRooms.includes(this.search.otherRooms) ||
            this.search.otherRooms.length === 0) &&
          (parseInt(item.price) <= this.search.maxPrice ||
            this.search.maxPrice === 0) &&
          (parseInt(item.price) >= this.search.minPrice ||
            this.search.minPrice === 0)
        ) {
          return item;
        }
        //.price.match(criter.price);
      });
    },
    rechercheLength: function() {
      return this.rechercheHouse.length;
    },
    filteredDataObj() {
      return this.data.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(this.search.address.name.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    openLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10 * 100);
    },
    chose(item) {
      item.chose = !item.chose;
      this.search.type = [];
      this.typeAlouer.filter(item => {
        if (item.chose == true) {
          this.search.type.push(item.text);
          return item;
        }
      });
    },
    translate() {
      this.$i18n.locale = "fr";
    },
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.*$/);
      return images("./" + pet);
    }
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
    this.openLoading();
  },
  data() {
    return {
      data,
      isLoading: false,
      house: [],
      search: {
        address: {
          name: "",
          arrondissement: "",
          departement: "",
          region: ""
        },
        postalCode: "",
        type: "",
        numberOfRoom: 0,
        numberofPiece: 0,
        description: "",
        otherRooms: [],
        minPrice: 0,
        maxPrice: 0,
        paymentMode: "",
        garantie: 0
      },
      typeAlouer,
      need,
      checkboxGroup: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}
.image {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
}
.image-check {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.diva {
  text-align: left;
  margin: 1em;
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
}
.fixed {
  position: fixed;
}
.is {
  background-color: black;
  border-block-color: initial;
  border-color: aqua;
  border-radius: 50%;
}
.hover01 img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover01:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.div-info {
  background-color: lightblue;
}
</style>
