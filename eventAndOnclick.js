function fun() {
  document.getElementById("btn");
  console.log("hello ");
}

document.getElementById("add").addEventListener("click", () => {
  //! document.getElementById("add").addEventListener("click",function ()  {

  console.log("about was click");
});

function ok() {
  console.log("my btn was click");
}

document.getElementById("my").addEventListener("click", ok);
