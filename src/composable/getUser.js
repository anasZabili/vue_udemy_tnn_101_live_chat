import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log(
    "🚀 ~ file: getUser.js ~ line 7 ~ projectAuth.onAuthStateChanged ~ _user",
    _user
  );

  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
