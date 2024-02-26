//change keys according to your project
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjZaao-RzoVFiIfdraMDk0cuecfAJoCTM",
    authDomain: "learning-firebase-with-zubair.firebaseapp.com",  
    projectId: "learning-firebase-with-zubair",
    storageBucket: "learning-firebase-with-zubair.appspot.com",
    messagingSenderId: "390051158100",
    appId: "1:390051158100:web:822a885dcde21a732f75c1",
    measurementId: "G-ZP2L83C9D3"
  });

  // Initialize Firebase;
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
// window.addEventListener("load", (event) => {
//    console.log("page is fully loaded");
//    if(!localStorage.getItem('token')){
//       location.replace('./dashboard.html')
//    }
//  });
 

  function signupCall(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log('email' , email)
    console.log('password' , password)

    auth.createUserWithEmailAndPassword(email , password)
    .then((res) => {
      //   alert("singup succes")
       console.log(res)

       createData()
       if(res){
         setTimeout(() => {
            location.href = "./dashboard.html"
        },2000)
       }
    
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })

  }



  function signInCall(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log('email' , email)
    console.log('password' , password)

    auth.signInWithEmailAndPassword(email , password)
    .then((res) => {
        alert('sigin success')
        let token = res.user.multiFactor.user.accessToken;
        if(token){
         localStorage.setItem("token" , token)

        }
       console.log(localStorage.getItem("token"))
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })

  }



  function createData(){
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    console.log('email' , email)
    console.log('password' , password)

     db.collection('users')
     .add({
        name:name,
        email:email,
        password:password
     })
     .then((res) => {
        console.log(res.id)
     })
     .catch((error) => {
        console.log(error)
     })

  }
  
  function readData(){
     db.collection('users')
     .get()
     .then((res) => {
        console.log(res.docs)
      //   console.log(res.docs.map((item) => {
      //       return { ...item.data() , id: item.id}
      //   }))
        let data = res.docs.map((item) => {
         return { ...item.data() , id: item.id}
     })
     console.log(data)

     let list = document.getElementById('list');

     data.forEach((item) => {
         let listItem = document.createElement('li')
         listItem.innerHTML = `${item.name} <button class='delete' data-index="${item.id}" onClick="deleteData(this)">delete</button>`
         list.appendChild(listItem)
     })
 
     })
     .catch((error) => {
        console.log(error)
     })

  }

  function deleteData(event){
     console.log("event" , event)
   let id = event.getAttribute("data-index")
   console.log('id' , id)
    db.collection('users')
    .doc(id)
    .delete()
    .then((res) => {
        alert("Data Deleted")
       console.log(res)
       
    })
    .catch((error) => {
       console.log(error)
    })

 }

 function updateData(){

    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    db.collection('users')
    .doc('zTxZQhaujzBdJOtdmh4i')
    .update({
        name:name,
        email:email,
        password:password
    })
    .then((res) => {
        alert("Data Updated")
       console.log(res)
       
    })
    .catch((error) => {
       console.log(error)
    })

 }