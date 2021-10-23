console.log("Pika run on falabella Colombia");
import "./falabella-co.css";

const contents = document.getElementsByClassName("productContainer");

if (contents[0]) {
  const content = contents[0];
  const pikaRoot = document.createElement("div");
  pikaRoot.setAttribute("id", "pika");
  pikaRoot.classList.add("pika-root");
  content.parentElement.insertBefore(pikaRoot, content.nextElementSibling);
  console.log("pika", content);
  chrome.runtime.sendMessage("product:5555555", (response) => {
    console.log("pika", response);
    pikaRoot.innerHTML = response;
  });
}
