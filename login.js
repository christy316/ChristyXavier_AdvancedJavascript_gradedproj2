var storedCredential = {'username':'username','password':btoa('123')};
function preventBack(){
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload=function(){null};

localStorage.setItem('user',JSON.stringify(storedCredential));

function validate(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var validate = JSON.parse(localStorage.getItem('user'))
    if (username == validate["username"] && password == atob(validate["password"])) {
      window.location.href = "/resumeSearch.html";
    } else {
      var error_msg = document.getElementById("error")
      error_msg.style.display = "inline"
      username.style.border
    }
  }

document.querySelector('form').addEventListener('submit', validate);