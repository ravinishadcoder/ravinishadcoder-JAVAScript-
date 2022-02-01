//stored username and password and input username and password, Print if the user can login or not.
var stored_user = "ravicoder264@gmail.com";
var stored_password = 123456789;
var input_user = "ravicoder264@gmail.com";
var input_password = 123456789;


if(stored_user==input_user){
  if(stored_password==input_password){
    console.log("valid login");
  }
  else{
    console.log("password is wrong");
  }

}
else{
  console.log("user is not found");
}