<template>
  <div class="container columns">
    <div class="column is-3"></div>
    <div class="column is-8">
      <div class="container">
        <div>
          <h1>Recherche avancée</h1>
        </div>
        <hr />
        <div class="diva">Que voulez-vous louer??</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in typeAlouer" :key="item.text">
            <div class="level-item has-text-centered">
              <div class="header">
                <b-button
                  :icon-left="item.icon"
                  rounded
                  @click="chose(item)"
                  :type="item.chose ? 'is-primary':'none'"
                  v-model="item.chose"
                ></b-button>
                <p class="sub-title">{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">Ou voulez-vous louer??</div>
        <div class="columns">
          <div class="column is-10">
            <b-field>
              <b-input icon="account" placeholder="adresse" />
            </b-field>
          </div>
        </div>
        <hr />
        <div class="diva">Quel est notre budget?</div>
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
        <div class="diva">quelle envies avez-vous?</div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-2" v-for="item in need" :key="item.text">
            <div class="level-item has-text-centered">
              <div class="header">
                <b-button
                  :icon-left="item.icon"
                  rounded
                  @click="chose(item)"
                  :type="item.chose ? 'is-primary':'none'"
                  v-model="item.chose"
                ></b-button>
                <p class="sub-title">{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="diva">Autres prieces</div>
        <div>
          <section>
            <div class="block">
              <b-checkbox v-model="checkboxGroup" native-value="Cuisine">Cuisine séparée</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Toilette">Toilette séparée</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Eau">Sale d'eau(douche)</b-checkbox>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="diva">
              <p></p>
              <h1>2018 annonces</h1>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    chose(item) {
      item.chose = !item.chose;
    }
  },

  data() {
    return {
      typeAlouer: [
        {
          text: "Appartement",
          icon: "home",
          chose: false
        },
        {
          text: "Studios",
          icon: "home",
          chose: true
        },
        {
          text: "Chambre",
          icon: "account",
          chose: false
        },
        {
          text: "villa",
          icon: "apps",
          chose: false
        },
        {
          text: "Studios Moderne",
          icon: "apps",
          chose: false
        },
        {
          text: "chambre Moderne",
          icon: "apps",
          chose: false
        },
        {
          text: "Appartement moderne",
          icon: "apps",
          chose: false
        },
        {
          text: "Bureau",
          icon: "apps",
          chose: false
        },
        {
          text: "Boutique",
          icon: "apps",
          chose: false
        },
        {
          text: "Magasin",
          icon: "apps",
          chose: false
        },
        {
          text: "Terrain",
          icon: "apps",
          chose: false
        },
        {
          text: "Loft/athelier",
          icon: "apps",
          chose: false
        }
      ],
      need: [
        {
          text: "jardin",
          icon: "home",
          chose: false
        },
        {
          text: "sous-sol",
          icon: "home",
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
</style>
