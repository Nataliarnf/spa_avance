

import { createApp } from 'vue';
import App from './App.vue'
import router from "@/router";
import { store } from './store'

// createApp(App).use(router).mount('#app');




const app = createApp(App);

// pass the injection key
app.use(store);
app.use(router);

app.mount('#app')



