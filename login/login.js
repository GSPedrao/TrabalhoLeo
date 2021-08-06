 function Login() {
   var emailUser = document.getElementById("emailUser").value;
   var senhaUser = document.getElementById("senhaUser").value;

   if (!emailUser || !senhaUser) {
     alert("Coloque sua Email e Senha")
   } else {
     window.location.href = "index.html"
   }
 }

 