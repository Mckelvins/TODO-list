function getdata() {
  let nodeList = document.querySelectorAll(".blin");
  //console.log(nodeList);

  document
    .querySelectorAll(".text")
    .forEach((elem) => console.log(elem.getAttribute("value")));
}
