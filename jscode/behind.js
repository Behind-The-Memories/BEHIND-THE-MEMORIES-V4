import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBcIT0QUDG_zgom7Gbx9Yf7P-BfLhm0iy0",
    authDomain: "behind-the-memories.firebaseapp.com",
    projectId: "behind-the-memories",
    storageBucket: "behind-the-memories.firebasestorage.app",
    messagingSenderId: "1035799003939",
    appId: "1:1035799003939:web:7cc41770c357dbc96b0296"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Στέλνει email επαλήθευσης
            sendEmailVerification(userCredential.user)
                .then(() => {
                    alert("Ένα email επαλήθευσης στάλθηκε στο " + email + "! Παρακαλώ επαλήθευσε το email σου πριν συνδεθείς.");
                    window.location.href = "index.html";
                });
        })
        .catch((error) => alert(error.message));
}

function logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if (userCredential.user.emailVerified) {
                alert("Logged in successfully!");
                window.location.href = "index.html";
            } else {
                alert("Παρακαλώ επαλήθευσε το email σου πρώτα! Έλεγξε τα εισερχόμενά σου.");
            }
        })
        .catch((error) => alert(error.message));
}

window.signUp = signUp;
window.logIn = logIn;