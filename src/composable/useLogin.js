import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(res);
  } catch (err) {
    console.log(err.value);
    error.value = "Nom de compte ou mot de passe incrorrect ";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
