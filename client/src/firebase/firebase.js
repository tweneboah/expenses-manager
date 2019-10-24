import * as firebase from "firebase"; //Rename firebase that will suit us. This means we can pull methods on firebase

//CONNECT TO DATABASE

const firebaseConfig = {
  apiKey: "AIzaSyDDC7umIft417JmilbhlfwJkbCD-3Cape4",
  authDomain: "expensify-79aa0.firebaseapp.com",
  databaseURL: "https://expensify-79aa0.firebaseio.com",
  projectId: "expensify-79aa0",
  storageBucket: "expensify-79aa0.appspot.com",
  messagingSenderId: "314358861921",
  appId: "1:314358861921:web:446fecc08e03d63862da20",
  measurementId: "G-4V0D8HLLQB"
};

firebase.initializeApp(firebaseConfig);
//=================
//Grabing the database with database features
//=================

//Getting reference to our database example expenses, users

const database = firebase.database();

//CREATING ARRAY OF DATA IN FIREBASE

// Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref("expenses").push({
//   description: "Phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 976123498763
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 1200,
//   createdAt: 976123498763
// });

//FETCHING DATA
database
  .ref("expenses")
  .once("value")
  .then(snapShot => {
    //snapShot has another property which help us to return array

    const expenses = [];
    snapShot.forEach(childSnapShot => {
      expenses.push({
        id: childSnapShot.key,
        ...childSnapShot.val()
      });
    });
    console.log(expenses);
  })
  .catch(err => {
    console.log(err);
  });

//CREATING DATA

// database
//   .ref()
//   .set({
//     // ref() referencing another collections/database
//     //The name of our database
//     name: "Emmanuel",
//     age: 30,
//     isSingle: true,
//     location: {
//       city: "Xifeng",
//       country: "China"
//     }
//   })
//   .then(() => {
//     console.log("Data was saved");
//   })
//   .catch(err => {
//     console.log("Failed", err);
//   });

//REMOVE DATA

//Removing a single propperty
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(err => {
//     console.log(err);
//   });

//Removing the whole data

//If you don't specify anything to ref it refers to the root of your datan=base

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(err => {
//     console.log(err);
//   });

//UPDATING
//Update calls with an object thus the things to update
//You can also add new property to it
//We can also delete by passing null to the attribute

// database.ref().update({
//   name: "Hicotek",
//   age: 31,
//   job: "Programmer",
//   "location/city": "Kumasi",
//   single: null
// });

//FETCHING DATA

//METHOD 1:

//This fetches only once and doesn't fetch upon changes unless we make another request to
//We can fetch data by subscribing or a signle time
//What you pass to ref is what it will return

// database
//   .ref()
//   .once("value")
//   .then(snapShot => {
//     //We pass an argument to .then which is a snapShot which represnt the actual data
//     //The snapShot contains a lot of functions so to pull out our data we use .val()

//     const data = snapShot.val();
//     console.log(data);
//   })
//   .catch(err => {
//     console.log("Fetching data failed", err);
//   });

//METHOD 2
//Since this will keep runing overtime we don't chain with a promise. Remember that promise alo returns data and error at one time

// database.ref().on("value", snapShot => {
//   console.log(snapShot.val());
// });

//Changing data

// setTimeout(() => {
//   database.ref("age").set(80);
// }, 6000);

// setTimeout(() => {
//   database.ref("age").set(70);
// }, 8000);

//Unsubcribe

//The code below will never run
//the code below will run but it will be visible to the client
// setTimeout(() => {
//   database.ref().off();
// }, 10000);

// setTimeout(() => {
//   database.ref("age").set(60);
// }, 12000);
