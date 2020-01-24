<template>
  <div class="container columns">
    <div class="column is-3">
      <b-loading isFullPage :active.sync="isloading" :can-cancel="true"></b-loading>
      {{uploadValue}}
    </div>
    <div class="column is-8">
      <div class="columns">
        <div class="column is-3 container1">
          <ul class="progressbar">
            <li :class="(steplevel)>0?'active':'none'"></li>
            <li :class="(steplevel)>1?'active':'none'"></li>
            <li :class="(steplevel)>2?'active':'none'"></li>
            <li :class="(steplevel)>3?'active':'none'"></li>
            <li :class="(steplevel)>4?'active':'none'"></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <transition name="steps">
          <div v-if="steps[0].isStep">
            <div class="columns is-multiline">
              <div class="diva column is-12">
                <h2 class="header-step">Où est situé votre bien ?</h2>
              </div>
              <div class="column is-12">
                <div class>
                  <div class="diva">
                    Adresse de votre bien
                    <b-field>
                      <b-autocomplete
                        v-model="form.address.name"
                        placeholder="address"
                        :data="filteredDataObj"
                        field="name"
                        @select="option => form.address = option"
                        icon="account"
                      >
                        <template slot="empty">No results found</template>
                        <template slot-scope="props">
                          <div class="diva media">
                            <b>{{props.option.name}}</b>
                            - {{props.option.arrondissement}}-{{props.option.region}}
                          </div>
                        </template>
                      </b-autocomplete>
                    </b-field>
                    <div class="div-info">
                      <p>Hello. How are you today?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-12">
                <div class>
                  <div class="diva">
                    commune ou code postal
                    <b-field>
                      <b-input
                        type="text"
                        placeholder="Commune"
                        v-model="form.postalCode"
                        icon="account"
                      />
                    </b-field>
                    <div class="div-info">
                      <p>Hello. How are you today?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="steps">
          <div v-if="steps[1].isStep">
            <div class="diva column is-12">
              <h2 class="header-step">Décrivez-nous votre bien</h2>
            </div>
            <div class="diva">Que voulez-vous mettre en location ???</div>
            <div class="container">
              <div class="columns is-multiline is-mobile">
                <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
                  <div class>
                    <div class>
                      <div
                        @click="chose(item)"
                        :class="item.chose?' image-check hover01 is':'hover01 none'"
                      >
                        <img :src="getImgUrl(item.icon)" class="image" />
                      </div>
                      <p class="diva">{{item.text}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns is-multiline" v-if="showSurface">
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

              <div class="columns" v-if="showroom">
                <div class="column is-6">
                  <div class="diva">Nombre de pieces</div>
                  <div class="columns">
                    <div class="column">
                      <b-field>
                        <b-input type="number" v-model="form.numberOfPiece"></b-input>
                      </b-field>
                      <div class="div-info">
                        <p>information</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="diva">Nombre de chambre</div>
                  <div class="columns">
                    <div class="column">
                      <b-field>
                        <b-input placeholder type="number" v-model="form.numberOfRoom"></b-input>
                      </b-field>
                      <div class="div-info">
                        <p>Hello. How are you today?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="showroom">
                <div class="diva">Autres prieces</div>
                <section>
                  <div class="block">
                    <div class="diva">
                      <b-checkbox v-model="form.otherRooms" native-value="Cuisine">Cuisine séparée</b-checkbox>
                    </div>
                    <div class="diva">
                      <b-checkbox v-model="form.otherRooms" native-value="Toilette">Toilette séparée</b-checkbox>
                    </div>
                    <div class="diva">
                      <b-checkbox v-model="form.otherRooms" native-value="Eau">Sale d'eau(douche)</b-checkbox>
                    </div>
                  </div>
                </section>
              </div>
              <div class="column is-12">
                <div class="diva">Description</div>
                <div>
                  <b-field>
                    <b-input type="textarea" v-model="form.description"></b-input>
                  </b-field>
                </div>
                <div class="div-info">information sur la description du bien</div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="steps">
          <div v-if="steps[2].isStep">
            <div class="column is-12">
              <div class="diva">
                <h2 class="header-step">Quel est le montant de votre bien ?</h2>
              </div>
            </div>
            <div class="column diva is-12">
              Loyer mensuel charges comprises
              <b-field>
                <b-input icon="account" placeholder="prix" type="number" v-model="form.price" />
              </b-field>
              <div class="div-info">
                <p>information sur le loyer</p>
              </div>
            </div>
            <div class="column diva is-12">
              grarantie demander
              <b-field>
                <b-input icon="account" placeholder="prix" type="number" v-model="form.garantie" />
              </b-field>
              <div class="div-info">
                <p>information sur la grarantie</p>
              </div>
            </div>
            <div class="column diva is-12">
              mode payement
              <b-field>
                <b-input
                  icon="account"
                  placeholder="prix"
                  type="number"
                  v-model="form.paymentMode"
                />
              </b-field>
              <div class="div-info">
                <p>le payement du loyer est</p>
                <ul>
                  <li>annuel</li>
                  <li>trimestriel</li>
                  <li>semestriel</li>
                  <li>mensuel</li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
        <transition name="steps">
          <div v-if="steps[3].isStep">
            <div class="column is-12">
              <div class="diva">
                <h2 class="header-step">photos et video de votre bien</h2>
              </div>
            </div>
            <div class="column is-12">
              <section>
                <b-field>
                  <b-upload v-model="dropFiles" multiple drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon icon="upload" size="is-large"></b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>

                <div class="tags">
                  <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
                    {{file.name}}
                    <button
                      class="delete is-small"
                      type="button"
                      @click="deleteDropFile(index)"
                    ></button>
                  </span>
                </div>
              </section>
              <div class="diva div-info">
                <p>sur les photos</p>
              </div>
            </div>

            <div class="column diva is-12">
              Video de votre bien
              <b-field>
                <b-input placeholder="lien vers la video du bien" />
              </b-field>
              <div class="div-info">
                <p>information sur la video de votre bien</p>
              </div>
            </div>
          </div>
        </transition>
        <transition name="steps">
          <div v-if="steps[4].isStep">
            <div>detail sur le postedata</div>
            <div class="column is 11">
              <div class="buttons column">
                <b-button type="is-danger" rounded expanded @click="poste(form)">final</b-button>
              </div>
            </div>
          </div>
        </transition>

        <div class="column is-11" v-if="!steps[4].isStep">
          <div class="columns">
            <div class="buttons column is-3">
              <b-button
                type="is-danger"
                :disabled="hidePreviouse"
                @click="previouse()"
                expanded
                rounded
              >previouse</b-button>
            </div>
            <div class="column is-7"></div>
            <div class="buttons column is-3">
              <b-button type="is-danger" rounded expanded @click="next()">next</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../plugins/firebase.js";
import firebase from "firebase";
const data = require("@/data/address.json");
const typeAlouer = require("@/data/house.json");
const EventEmitter = require("events");
class DreamEvent extends EventEmitter {}
const posteEvent = new DreamEvent();
export default {
  mounted() {
    this.start();
  },
  computed: {
    filteredDataObj() {
      return this.data.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(this.form.address.name.toLowerCase()) >= 0
        );
      });
    }
  },
  data() {
    return {
      showStep1: false,
      showStep2: false,
      steps: [
        {
          name: "setp1",
          level: 0,
          isStep: false
        },
        {
          name: "step2",
          level: 1,
          isStep: false
        },
        {
          name: "step3",
          level: 2,
          isStep: false
        },
        {
          name: "step4",
          level: 3,
          isStep: false
        },
        {
          name: "final",
          level: 4,
          isStep: false
        }
      ],
      steplevel: 0,
      hidePreviouse: true,
      data,
      ishover: false,
      dropFiles: [],
      photos: [],
      message: "",
      showSurface: false,
      showroom: false,
      isloading: false,
      uploadValue: 0,
      form: {
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
        price: 0,
        paymentMode: "",
        garantie: 0,
        photos: []
      },
      typeAlouer
    };
  },
  methods: {
    chose(item) {
      this.typeAlouer.forEach(item => {
        item.chose = false;
      });
      if (item.text == "Terrain" || item.text == "villa") {
        item.chose = !item.chose;
        this.showSurface = true;
        this.showroom = false;
      } else {
        item.chose = !item.chose;
        this.showSurface = false;
        this.showroom = true;
      }
      if (item.chose) {
        this.form.type = item.text;
      }
    },
    setToNull() {
      this.form = {
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
        price: 0,
        paymentMode: "",
        garantie: 0,
        photos: []
      };
      this.dropFiles = [];
      this.photos = [];
    },
    async poste(house) {
      this.onUpload();
      posteEvent.on("postedata", () => {
        house.photos = this.photos;
        db.collection("house").add(house);
        this.setToNull();
        this.final();
      });
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    onUpload() {
      let i = this.dropFiles.length;
      this.dropFiles.forEach(file => {
        const storageRef = firebase
          .storage()
          .ref(`${file.name}`)
          .put(file);
        storageRef.on(
          `state_changed`,
          snapshot => {
            this.isloading = true;
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          error => {
            this.message = error.message;
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then(url => {
              this.photos.push(url);
              this.isloading = false;
              i = i - 1;
              if (i == 0) posteEvent.emit("postedata");
            });
          }
        );
      });
    },
    start() {
      this.steps.forEach(step => {
        if (step.level == this.steplevel) {
          step.isStep = true;
        } else {
          step.isStep = false;
        }
      });
    },
    next() {
      this.steplevel += 1;
      this.start();
      this.hidePreviouse = false;
    },
    previouse() {
      if (this.steplevel == 1) {
        this.hidePreviouse = true;
      } else {
        this.hidePreviouse = false;
      }
      this.steplevel -= 1;
      this.start();
    },
    final() {
      this.steplevel = 0;
      this.start();
    },
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.*$/);
      return images("./" + pet);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: list-item;
  margin-left: 10px;
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

.header-step {
  text-align: center;
}

.div-info {
  background-color: lightblue;
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

.fixed {
  position: fixed;
}

.is {
  border-color: aqua;
  border-radius: 50%;
}

.container1 {
  width: 100%;
  position: relative;
  z-index: 1;
}

.progressbar li {
  float: left;
  width: 18%;
  position: relative;
  text-align: center;
}

.progressbar {
  counter-reset: step;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:before {
  background: #f15454;
  border-color: #e75656;
  background: #e04949;
  color: white;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active + li:after {
  background: #f54444;
}

.progressbar li.active + li:before {
  border-color: #ee4c4c;
  background: #f14949;
  color: white;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.steps-enter-active {
  transition: all 5s ease;
}

.steps-enter,
.steps-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
 {
  transform: translateX(10px);
  opacity: 0;
}
</style>
