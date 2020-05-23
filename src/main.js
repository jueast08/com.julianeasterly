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
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

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
  faHamburger,
  faExclamationCircle,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
