
document.querySelector("form").addEventListener("submit",signFun)

var data=JSON.parse(localStorage.getItem("userDeatails")) || [] ;
 
function signFun(){
    event.preventDefault();

    var obj={
          fname:document.querySelector("#fname").value,
          lname:document.querySelector("#lname").value,
          email:document.querySelector("#email").value,
          password:document.querySelector("#oldpass").value,
          new:document.querySelector("#newpass").value,



    };

    data.push(obj);
    console.log(data);

    if(document.querySelector("#email").value == "")
    {
        alert("please enter valid inputs")
       
    }
    else
    {
        alert("siginup succesfull")
        window.location.href="login.html"
        localStorage.setItem("userDetails", JSON.stringify(data))
    }
   
}