import Vue from "vue";
import App from "Components/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  //@TODO use local declarations rather than declaring this in the main.js
  faTerminal,
  faEnvelope,
  faTasks,
  faGlobeEurope,
  faMapMarkerAlt,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faTerminal,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTasks,
  faGlobeEurope,
  faMapMarkerAlt,
  faCheckCircle,
  faExclamationCircle,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
