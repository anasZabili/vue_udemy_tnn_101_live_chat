import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

// ici on place l'erreur dans le use collection car
// on a besoin d'une varable erreur par message
const useCollection = (collectionName) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collectionName).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
