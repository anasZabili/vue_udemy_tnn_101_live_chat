import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { projectAuth } from "./firebase/config";

// on retarde le montage du composant
// en attendant que la connexion avec firebase soit établie
let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
