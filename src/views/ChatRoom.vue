<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { ref, onUpdate, watch } from "vue";
import NavBar from "../components/NavBar";
import { firebaseAuth } from "../firebase/config";
import getUser from "../composable/getUser";
import { useRouter } from "vue-router";
import NewChatForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
  components: {
    NavBar,
    NewChatForm,
    ChatWindow,
  },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 14px;
  color: #999;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>