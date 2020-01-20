 <template>
  <div class="container columns">
    <div class="column is-2"></div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <div class="column is-8">
      <div class="container">
        <div>
          <h1>Recherche avancée</h1>
        </div>
        <hr />
        <div class="diva">{{$t('veut-louer')}}</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
            <div class="level-item has-text-centered">
              <div class="header">
                <div @click="chose(item)" :class="item.chose?'hover01 is':'hover01 none'">
                  <img :src="getImgUrl(item.icon)" alt="pas" class="image" />
                </div>
                <p class="diva">{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{$t('louer-ou')}}</div>
        <div class="columns">
          <div class="column is-10">
            <b-field>
              <b-autocomplete
                v-model="search.city"
                icon="account"
                placeholder="adresse"
                :data="filteredDataObj"
                field="name"
                @select="option => selected = option"
              ></b-autocomplete>
            </b-field>
          </div>
        </div>
        <hr />
        <div class="diva">{{$t('budget')}}</div>
        <div class="columns">
          <div class="column is-5">
            <b-field>
              <p class="control">
                <button class="button">Min</button>
              </p>
              <b-input placeholder rounded></b-input>
              <p class="control">
                <button class="button">£</button>
              </p>
            </b-field>
          </div>
          <div class="column is-5">
            <b-field>
              <p class="control">
                <button class="button">Max</button>
              </p>
              <b-input placeholder rounded></b-input>
              <p class="control">
                <button class="button">£</button>
              </p>
            </b-field>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-6">
            <div class="diva">surface habitable</div>
            <div class="columns">
              <div class="column">
                <b-field label="min">
                  <b-input type="number"></b-input>
                  <p class="control">
                    <button class="button is-primary" disabled>m²</button>
                  </p>
                </b-field>
              </div>
              <div class="column">
                <b-field label="max">
                  <b-input placeholder type="number"></b-input>
                  <p class="control">
                    <button class="button is-primary" disabled>m²</button>
                  </p>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="diva">Surface du Terrain</div>
            <div class="columns">
              <div class="column">
                <b-field label="min">
                  <b-input placeholder type="number"></b-input>
                  <p class="control">
                    <button class="button is-primary" disabled>m²</button>
                  </p>
                </b-field>
              </div>
              <div class="column">
                <b-field label="max">
                  <b-input placeholder="00,0" type="number"></b-input>
                  <p class="control">
                    <button class="button is-primary" disabled>m²</button>
                  </p>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{$t('envies')}}</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in need" :key="item.text">
            <div class="level-item has-text-centered">
              <div class="header">
                <div @click="chose(item)" :class="item.chose?'is':'none'">
                  <img :src="item.icon" />
                </div>
                <p class="sub-title">{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">{{$t('autre')}}</div>
        <div>
          <section>
            <div class="block">
              <b-checkbox v-model="search.otherRooms" native-value="Cuisine">Cuisine séparée</b-checkbox>
              <b-checkbox v-model="search.otherRooms" native-value="Toilette">Toilette séparée</b-checkbox>
              <b-checkbox v-model="search.otherRooms" native-value="Eau">Sale d'eau(douche)</b-checkbox>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card fixed">
        <div class="card-content">
          <div class="content">
            <div class="diva">
              <p></p>
              <h1>{{rechercheLength}} annonces {{search.type}}</h1>
              <h2>{{search.otherRooms}}</h2>
              <b-button type="is-danger" rounded @click="translate()">{{$t('buttons-search')}}</b-button>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    rechercheHouse: function() {
      return this.house.filter(item => {
        if (
          item.city.match(this.search.city) &&
          (this.search.type.includes(item.type) ||
            this.search.type.length === 0) &&
          (item.otherRooms.includes(this.search.otherRooms) ||
            this.search.otherRooms.length === 0)
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
            .indexOf(this.search.city.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    openLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 10 * 1000);
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
        city: "",
        type: [],
        numberOfRoom: "",
        numberofPiece: "",
        otherRooms: [],
        price: ""
      },
      typeAlouer,
      need: [
        {
          text: "jardin",
          icon: "home",
          chose: false
        },
        {
          text: "sous-sol",
          icon: "../assets/apart.jpg",
          chose: false
        },
        {
          text: "gardien",
          icon: "account",
          chose: false
        },
        {
          text: "balcon",
          icon: "apps",
          chose: false
        },
        {
          text: "rez de chausse",
          icon: "home",
          chose: false
        },
        {
          text: "terrasse",
          icon: "home",
          chose: false
        },
        {
          text: "belle vue",
          icon: "account",
          chose: false
        },
        {
          text: "villa",
          icon: "apps",
          chose: false
        }
      ],
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
  width: 75px;
  height: 75px;
  cursor: pointer;
  border-radius: 50%;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
}
.type-house {
  border: red;
  border-radius: 50%;
  float: right;
  align-content: center;
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
</style>