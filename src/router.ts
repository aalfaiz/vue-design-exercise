
import HelloWorld from "./components/HelloWorld.vue";
import Qrcode from "./views/QrCode.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Summary from "./views/Summary.vue";

const routes = [
   {path: '/', component: HelloWorld},
   {path: '/qrcode', component: Qrcode},
   {path: '/summary', component: Summary}
]


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;