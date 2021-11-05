import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact";
import NewContact from "./components/NewFriend";

require("@/assets/main.scss");

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("new-contact", NewContact);

app.mount("#app");
