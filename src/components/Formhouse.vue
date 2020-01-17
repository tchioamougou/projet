<template>
  <div id="app">
    <!--Example dependecies-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css"
    />
    <a :href="repoUrl">
      <img
        style="position: absolute; top: 0; right: 0; border: 0;"
        src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      />
    </a>

    <!--Example Elements-->
    <section class="hero">
      <div class="hero-body" style="padding: 1rem 0">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-3" style="display: flex; align-items: center;">
              <div class="is-pulled-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: .5rem">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <horizontal-stepper
              :steps="demoSteps"
              @completed-step="completeStep"
              :top-buttons="true"
              @active-step="isStepActive"
              @stepper-finished="alert"
            ></horizontal-stepper>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Stepper Vue Component</strong> by
            <a :href="teamUrl">Pygmy Team</a>.
          </p>
          <p>
            <small>
              Used dependencies for this demo:
              <a href="http://bulma.io">bulma</a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import HorizontalStepper from "vue-stepper";

// This components will have the content for each stepper step.
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";

export default {
  components: {
    HorizontalStepper
  },
  data() {
    return {
      demoSteps: [
        {
          icon: "mail",
          name: "first",
          title: "Sample title 1",
          subtitle: "Subtitle sample",
          component: StepOne,
          completed: false
        },
        {
          icon: "report_problem",
          name: "second",
          title: "Sample title 2",
          subtitle: "Subtitle sample",
          component: StepTwo,
          completed: false
        },
        {
          icon: "person",
          name: "third",
          title: "sampletitle3",
          component: StepThree,
          completed: false
        }
      ]
    };
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach(step => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert("end" + payload);
    }
  }
};
</script>
<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}
h1,
h2 {
  font-weight: normal;
}
hr {
  background-color: transparent;
  border: none;
  display: block;
  height: inherit;
  margin: 1.5rem 0;
  border-top: dashed 1px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0b99b9;
  text-decoration: underline;
}
.text-medium-grey {
  color: #333;
}
.text-light-grey {
  color: #888;
}
.box.formated {
  position: relative;
  padding: 0;
}
.box.formated .heading {
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.8rem 1.5rem;
  background-color: #fafafa;
}
.box.formated .content {
  padding: 1rem 2rem;
}
i.top-left {
  position: absolute;
  left: 1.5rem;
  top: 0.8rem;
}
.vertical-separator {
  display: flex;
  justify-content: space-around;
}
.vertical-separator .line {
  border-right: 1px solid #cccccc;
}
</style>