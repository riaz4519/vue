//getting data



//on auth status change
auth.onAuthStateChanged(user =>{

   // console.log(user)

    if (user){

        db.collection('guides').get().then(snapshot =>{
            setupGuides(snapshot.docs);
        });
    } else{
       setupGuides([]);
    }

});
//sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //sign up user

    auth.createUserWithEmailAndPassword(email,password).then(cread =>{


        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })



});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click',function (e) {


    e.preventDefault();

    auth.signOut().then(() =>{
        console.log('user signed out');
    })

});

//login
const loginForm =  document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    //getting user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then((cred)=>{

        console.log(cred.user);

        //close the login modal
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();

    }).catch(err =>{
        console.log(err.message);
    });


});