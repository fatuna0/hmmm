let lock=document.getElementById("lock")
let idnb=document.getElementsByClassName("nbInput")
let submit=document.getElementById("submit")
function onlyonenumberisallowed(input) {
  if (input.value.length > 1) {
    input.value = input.value.charAt(0);
  }
}
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function checkifcorrect(){
  if(idnb[0].value=='2' && idnb[1].value==='2' && idnb[2].value==='1' && idnb[3].value==='b' ){
   window.location="surprise.html";
  }
  else{
    for (var i = 0; i <idnb.length; i++){
      idnb[i].value=''
    }
  }
}
for (var i = 0; i <idnb.length; i++) {
  idnb[i].oninput=function(){
    onlyonenumberisallowed(this)
  } 
}
submit.addEventListener("click", function () { 
  checkifcorrect()
  submit.style.backgroundColor='red';
  wait(300).then(() => {
    submit.style.backgroundColor='yellow';
  });
});