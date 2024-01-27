let isNavVisible = false;

document.querySelector(".phonenav").addEventListener("click", () => {
  console.log("hi");
  document.querySelector(".right ul").style.display = "block";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".hamburger").style.display = "none";
  document.querySelector("nav").style.height = "201px";
});

document.querySelector(".phonenav1").addEventListener("click", () => {
  document.querySelector(".right ul").style.display = "none";
  document.querySelector("nav").style.height = "80px";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".hamburger").style.display = "block";
});
