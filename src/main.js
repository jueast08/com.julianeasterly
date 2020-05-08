import Vue from "vue";
import App from "Components/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faTerminal,
  faDumbbell,
  faTools,
  faSeedling,
  faTasks,
  faGlobeEurope,
  faLaptopCode,
  faMapMarkerAlt,
  faCheckCircle,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEnvelope,
  faTerminal,
  faDumbbell,
  faTools,
  faSeedling,
  faLinkedin,
  faGithub,
  faTasks,
  faGlobeEurope,
  faLaptopCode,
  faMapMarkerAlt,
  faCheckCircle,
  faHamburger
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
