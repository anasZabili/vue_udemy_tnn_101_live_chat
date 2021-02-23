import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // on ajout cette condition car on sais que firebase est
        // cree un version local de données dans les snapshot
        // sans attendre la reponsse du serveur, nous souhaitons attendrela reponse du serveur
        // or la propriete createdat est set par le serveur ainsi quand cette propriete est presente on
        // sais que cette reponse proviens du serveur et du du local storage
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );
  // onInvalidate est declanché quand le composant ce demonte
  watchEffect((onInvalidate) => {
    // on se desabonne quand la composant ce demonte
    onInvalidate(() => unsub());
  });
  return { documents, error };
};

export default getCollection;
