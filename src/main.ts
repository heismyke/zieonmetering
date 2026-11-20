import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { reveal } from "./directives/reveal";
import { applyHead } from "./seo/head";

const app = createApp(App);

app.use(router);
app.directive("reveal", reveal);
router.afterEach((to) => applyHead(to.path));
app.mount("#app");
