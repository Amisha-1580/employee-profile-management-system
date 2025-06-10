let eyeButton = document.querySelector("#eye");
let inputPassword = document.querySelector("#password");
let eyeIcon = document.querySelector("i");

function passwordFieldControl(){
    eyeButton.addEventListener("click",()=>{

        if(inputPassword.type === "password"){
            inputPassword.type = "text";
            eyeIcon.setAttribute("class","fa-sharp fa-solid fa-eye") ;
        }
        else{
            inputPassword.type = "password";
            eyeIcon.setAttribute("class","fa-sharp fa-solid fa-eye-slash");
        }
       
    })
}
passwordFieldControl();



// let eyeButton = document.querySelector("#eye");
// let inputPassword = document.querySelector("#password");
// let eyeIcon = document.querySelector("#eye i");

// eyeButton.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     if (inputPassword.type === "password") {
//         inputPassword.type = "text";
//         eyeIcon.classList.remove("fa-eye");
//         eyeIcon.classList.add("fa-eye-slash");
//     } else {
//         inputPassword.type = "password";
//         eyeIcon.classList.remove("fa-eye-slash");
//         eyeIcon.classList.add("fa-eye");
//     }
// });