let button=document.getElementById("btn")
button.addEventListener("click",myFunction)
function myFunction(){
  let bill=document.getElementById("bill").value;
  let tip=document.getElementById("tip").value;
  let tips1=(bill*tip)/100;
  document.getElementById("tips").value=tips1;
  let total=parseInt(bill)+parseInt(tips1);
  document.getElementById("total").value=total;
  console.log(total);
}