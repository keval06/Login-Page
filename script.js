const title = document.getElementById('title')
const nameField = document.getElementById('nameField')
const loginBtn = document.getElementById('loginBtn')
// const toggleBtn = document.getElementById('toggleBtn')
const member = document.getElementById("signup")

let isSignUp = false;

function toggleForm(){

    if (!isSignUp) {
        title.innerHTML = "Sign Up";
        nameField.style.display = "block";
        loginBtn.value = "Sign Up"; 
        member.innerHTML = 'Already a member? <a href="#" id="toggleBtn">Login</a>';
        isSignUp = true;
    } 
    else {
        title.innerHTML = "Login";
        nameField.style.display = "none";
        loginBtn.value = "Login";
        member.innerHTML = 'Not a member? <a href="#" id="toggleBtn">Sign Up</a>';
        isSignUp = false;
    }
    // clearInputs();
    attachEvent();
};

function attachEvent(){
   document.getElementById('toggleBtn').addEventListener('click',function(e){
       e.preventDefault();
        toggleForm();
        });
}

// function clearInputs(){
//     const inputs = document.getElementsByTagName("input");
//     for(let i=0; i<inputs.length ; i++ ){
//         inputs[i].value = ""            //empty Html collection, array like
//     }
// }

attachEvent();