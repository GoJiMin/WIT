import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function getLibrary(userId) {
  return get(ref(database, `libraries/${userId}`)) //
    .then((snapshot) => {
      const books = snapshot.val() || {};
      return Object.values(books);
    });
}

export async function addUpdateToLibrary(userId, book) {
  return set(ref(database, `libraries/${userId}/${book.isbn13}`), book);
}

export async function removeFromLibrary(userId, isbn13) {
  return remove(ref(database, `libraries/${userId}/${isbn13}`));
}
