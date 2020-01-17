<template>
  <div class="container columns">
    <div class="column is-3">
      <b-loading is-full-page :active.sync="isloading" :can-cancel="true"></b-loading>
    </div>
    <div class="column is-8">
      <div class="container">
        <div class="diva">step one</div>
        <hr />
        <div class="columns is-multiline">
          <div class="column is-10">
            <div class="level-item has-text-centered">
              <div class="heading">
                Adresse
                <b-field>
                  <b-autocomplete
                    rounded
                    v-model="form.address"
                    placeholder="address"
                    :data="filteredDataObj"
                    field="name"
                    @select="option => selected = option"
                  >
                    <template slot="empty">No results found</template>
                  </b-autocomplete>
                </b-field>
                <p class="subtitle">votre message</p>
              </div>
            </div>
          </div>

          <div class="column is-10">
            <div class="level-item has-text-centered">
              <div class="heading">
                commune
                <b-field>
                  <b-input
                    type="text"
                    placeholder="Email input"
                    v-model="form.city"
                    rounded
                    icon="account"
                  />
                </b-field>
                <p class="subtitle">de votre bien</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">step 2: que voulez-vous mettre en location ???</div>
        <div class="container">
          <div class="columns is-multiline is-mobile">
            <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
              <div class="level-item has-text-centered">
                <div class="header" @mouseover="mouseOver">
                  <b-button
                    :icon-left="item.icon"
                    rounded
                    @click="chose(item)"
                    :type="item.chose ? 'is-primary':'none'"
                    v-model="item.chose"
                    :class="ishover ? 'hover':'header'"
                  ></b-button>
                  <p class="sub-title">{{item.text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns" v-if="showSurface">
          <hr />
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
      </div>
      <hr />
      <div class="diva">step 4 prix of house</div>
      <div class="diva">prix de location</div>
      <div class="columns">
        <div class="column is-10">
          <b-field>
            <b-input icon="account" placeholder="prix" type="number" v-model="form.price" />
          </b-field>
        </div>
      </div>
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
        </div>
      </section>

      <b-button type="is-danger" @click="poste(form)">poste</b-button>
    </div>

    <div class="column is-3">
      <div class="card fixed">
        <div class="card-content">
          <div class="content">
            <div class="diva">
              <p></p>
              <h1>{{dropFiles[0]}}{{form.photos}}</h1>
              <b-button type="is-danger" rounded>Rechercher</b-button>
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
import firebase from "firebase";
const data = require("@/data/address.json");
const typeAlouer = require("@/data/house.json");
const EventEmitter = require("events");
class DreamEvent extends EventEmitter {}
const posteEvent = new DreamEvent();
//import { reject } from 'q';
//import { resolve } from "dns";
//import { reject } from "q";
export default {
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
    mouseOver() {
      this.ishover = true;
    }
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
  }
};
</script>
<style>
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
.fixed {
  position: fixed;
}
.hover {
  width: 1ex;
  background-color: blue;
  vertical-align: -webkit-baseline-middle;
  border: #42b983;
}
</style>