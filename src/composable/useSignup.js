import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Couldnot complete de signup");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
