const auth = firebase.auth();
// const whenSignedIn = document.getElementById('whenSignedIn');
// const whenSignedOut = document.getElementById('whenSignedOut');

// const signInBtn = document.getElementById('signInBtn');
// const signOutBtn = document.getElementById('signOutBtn');

// const userDetails = document.getElementById('userDetails');
// const Userphoto = document.getElementById("Userphoto");

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();
