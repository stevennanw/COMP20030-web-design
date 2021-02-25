window.onload=function() {
  login_submit.addEventListener("click", function () {
    let Username = 1*document.getElementById("Username").value;
    let Password = 1*document.getElementById("Password").value;

    if(Username=="" || Password==""){
      alert('Invalid input.');
    }
    else{
      alert('Login success.');
    }
  });
}
