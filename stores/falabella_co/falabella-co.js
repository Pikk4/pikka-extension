console.log("Pika run on falabella Colombia");

const contents = document.getElementsByClassName("productContainer");

if (contents[0]) {
  const content = contents[0];
  const pikaRoot = document.createElement("div");
  pikaRoot.setAttribute("id", "pika");
  pikaRoot.classList.add("pika-root");
  content.parentElement.insertBefore(pikaRoot, content.nextElementSibling);
  console.log("pika", content);
}

chrome.runtime.sendMessage("product:123", (response) => {
  console.log('pika', response);
});
