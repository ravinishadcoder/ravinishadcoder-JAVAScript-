// Marriage Problem

// Gender is male and age >= 21  can get marry
// Gender is female and age >= 18 can get marry
// can't get marry

var gender = "female";
var age = 2;
if(gender=="male"&&age>=21){
  console.log(gender,"can get marry");
} 
else if(gender=="female"&&age>=18){
  console.log(gender,"can get marry");
}
else{
  console.log(gender,`can't get marry`);
}