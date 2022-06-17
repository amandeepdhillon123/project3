document.querySelector("form").addEventListener("submit",logFun)

var regUser=JSON.parse(localStorage.getItem("userDetails")) ||[]

function logFun(){
  event.preventDefault();

  var enteremail=document.querySelector("#email").value;
  var enterpass=document.querySelector("#password").value;

  
  for( var i=0; i<regUser.length; i++)
  {
    console.log(regUser[i]);

    if(regUser[i].email ==  enteremail  && regUser[i].password ==  enterpass)
    {
        alert("loginm succesful")
       
        window.location.href="ssense.html"
    }
    else{
        alert("please check your inputs")
        window.location.reload();

    }
  }

}
