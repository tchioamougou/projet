<template>
  <div class="container columns">
    <div class="column is-3">
      <b-loading is-full-page :active.sync="isloading" :can-cancel="true"></b-loading>
    </div>
    <div class="column is-8">
      <div class="container">
        <div v-if="steps[0].isStep">
          <div class="columns is-multiline">
            <div class="diva column is-10">
              step one
              <hr />
            </div>
            <div class="column is-10">
              <div class="level-item has-text-centered">
                <div class="heading">
                  Adresse
                  <b-field>
                    <b-autocomplete
                      v-model="form.address"
                      placeholder="address"
                      :data="filteredDataObj"
                      field="name"
                      @select="option => selected = option"
                      icon="account"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </b-field>
                  <p>Hello. How are you today?</p>
                </div>
              </div>
            </div>
            <div class="column is-10">
              <div class="level-item has-text-centered">
                <div class="heading">
                  commune
                  <b-field>
                    <b-input type="text" placeholder="Commune" v-model="form.city" icon="account" />
                  </b-field>
                  <p>Hello. How are you today?</p>
                </div>
              </div>
            </div>
            <div class="column is-10">
              <div class="columns">
                <div class="buttons column">
                  <b-button
                    type="is-primary"
                    :disabled="hidePreviouse"
                    @click="previouse()"
                    expanded
                  >previouse</b-button>
                </div>
                <div class="buttons column">
                  <b-button type="is-primary" expanded @click="next()">next</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="steps[1].isStep">
          <div class="diva">
            step 2: que voulez-vous mettre en location ???
            <hr />
          </div>
          <div class="container">
            <div class="columns is-multiline is-mobile">
              <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
                <div class="level-item has-text-centered">
                  <div class="header">
                    <div @click="chose(item)" :class="item.chose?' hover01 is':'hover01 none'">
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
            <hr />

            <div class="columns" v-if="showroom">
              <div class="column is-6">
                <div class="diva">Nombre de pieces</div>
                <div class="columns">
                  <div class="column">
                    <b-field>
                      <b-input type="number" v-model="form.numberOfPiece"></b-input>
                    </b-field>
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
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="diva">Autres prieces</div>
            <div v-if="showroom">
              <section>
                <div class="block">
                  <b-checkbox v-model="form.otherRooms" native-value="Cuisine">Cuisine séparée</b-checkbox>
                  <b-checkbox v-model="form.otherRooms" native-value="Toilette">Toilette séparée</b-checkbox>
                  <b-checkbox v-model="form.otherRooms" native-value="Eau">Sale d'eau(douche)</b-checkbox>
                </div>
              </section>
            </div>
            <hr />
            <div class="diva">Description</div>
            <div>
              <b-field>
                <b-input type="textarea" v-model="form.description"></b-input>
              </b-field>
            </div>
            <div class="column is-10">
              <div class="columns">
                <div class="buttons column">
                  <b-button type="is-primary" expanded @click="previouse()">previouse</b-button>
                </div>
                <div class="buttons column">
                  <b-button type="is-primary" expanded @click="next()">next</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="steps[2].isStep">
          <div class="diva">step 4 prix of house</div>
          <hr />
          <div class="diva">prix de location</div>
          <div class="columns">
            <div class="column is-10">
              <b-field>
                <b-input icon="account" placeholder="prix" type="number" v-model="form.price" />
              </b-field>
            </div>
          </div>
          <hr />
          <div class="diva">importer des photos</div>

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
              <span class="tag is-primary">
                <button type="button" class="insert is-small">+</button>
              </span>
            </div>
          </section>
          <div class="column is-10">
            <div class="columns">
              <div class="buttons column">
                <b-button type="is-primary" expanded @click="previouse()">previouse</b-button>
              </div>
              <div class="buttons column">
                <b-button type="is-primary" expanded @click="next()">next</b-button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="steps[3].isStep">
          <div>detail sur le postedata</div>
          <button class="is-primary" @click="previouse()">previouse</button>
          <button class="is-primary" @click="final()">final</button>
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
            .indexOf(this.form.address.toLowerCase()) >= 0
        );
      });
    }
  },
  data() {
    return {
      showStep1: false,
      showStep2: false,
      steps: [
        { name: "setp1", level: 0, isStep: false },
        { name: "step2", level: 1, isStep: false },
        { name: "step3", level: 2, isStep: false },
        { name: "final", level: 3, isStep: false }
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
      form: {
        address: "",
        city: "",
        type: "",
        numberOfRoom: "",
        numberofPiece: "",
        description: "",
        otherRooms: [],
        price: "",
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
        address: "",
        city: "",
        type: "",
        numberOfRoom: "",
        numberofPiece: "",
        description: "",
        otherRooms: [],
        price: "",
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
    },
    previouse() {
      if (this.steplevel == 1) {
        this.hidePreviouse = true;
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
.image {
  width: 75px;
  height: 75px;
  cursor: pointer;
  border-radius: 50%;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
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
  background-color: black;
  border-block-color: initial;
  border-color: aqua;
  border-radius: 50%;
}
</style>