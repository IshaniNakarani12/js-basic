dom.js;
// document.getElementById(id)
// document.getElementsByClassName(name)
// document.getElementsByTagName(name)
// document.querySelector

// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("info")[0];
// console.log(elm.innerText);

// const elm = document.querySelector("#first");
// const elm = document.querySelector(".first > p");
// const value = elm.innerText;
// console.log(value);

// elm.innerText = "Prem Acharya";
// elm.style.fontSize = "2rem";
// elm.style.color = "red";
// elm.style.textDecoration = "underline";

// elm.setAttribute("style", "color: red; font-size: 2rem");
// elm.style.display = "none";

// const elm = document.querySelector(".display");

// const sayhey = () => {
//   elm.innerText = "Heloow";
//   elm.style.color = "red";
//   elm.style.fontSize = "2rem";
// };

// elm.addEventListener("click", sayhey);
// elm.addEventListener("click", sayhey)
// elm.addEventListener("click", () => {
//   elm.innerText = "Heloow";
//   elm.style.color = "red";
//   elm.style.fontSize = "2rem";
// });

// const elm = document.querySelector("[href='google.com']");
// elm.innerText = "Facebook";
// elm.setAttribute("style", "font-size:2rem; color:red; text-decoration: none");
// elm.setAttribute("href", "www.facebook.com");
// elm.setAttribute("target", "_blank");

const elm = document.querySelector(".message");
elm.classList.add("success");
elm.append("lkjhgfgjhkllkjhgf");
const newELm = document.createElement("p");
newELm.textContent = "someting aweseom";
// elm.innerHTML = "<h1>Messages</h1>";
elm.appendChild(newELm);

elm.addEventListener("click", () => {
  elm.classList.toggle("success");
});

// document.write("<h1>sdafgdshfgfhh</h1>");
