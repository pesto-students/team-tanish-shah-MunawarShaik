const displayWindowProperties = () => {
  sessionStorage.setItem("name", "Munawar");
  localStorage.setItem("place", "India");
  console.log(navigator.userAgent);
  console.log(
    `Screeen width: ${screen.width}  and  Screen Height:  ${screen.height}`
  );
  console.log(
    `Current Url : ${location.href}  and  Current Path :${location.pathname}`
  );
  console.log(`Local Storage Item : ${localStorage.getItem("place")}`);
  console.log(`Session Storage item : ${sessionStorage.getItem("name")}`);
};
displayWindowProperties();
