import { IStoreConfig } from "@interface/store-config-interface";
import { addProduct, getPriceProduct } from "../../utils/storeTask";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
Chart.register(...registerables);

const store: IStoreConfig = {
  id: "falabella-co",
  name: "Falabella Colombia",
  url: "https://www.falabella.com.co/",
};
console.log(`Pika init on ${store.name}`);

const productID = /^.*\/product\/(\w+)\//.exec(document.location.pathname)[1];
const contents = document.getElementsByClassName("productContainer");


if (contents[0]) {
  const content = contents[0];
  const pikaRoot = document.createElement("div");
  pikaRoot.setAttribute("id", "pika");
  pikaRoot.classList.add("pika-root");
  content.parentElement.insertBefore(pikaRoot, content.nextElementSibling);

  getPriceProduct(store, productID).then((dataProduct) => {
    if (dataProduct) {
      const labels = [];
      const data = [];
      const canvas = document.createElement("canvas");

      canvas.setAttribute("width", "200");
      canvas.setAttribute("height", "200");
      pikaRoot.appendChild(canvas);
      Object.values(dataProduct.date).forEach((dataProduct) => {
        labels.push(new Date(dataProduct.date * 1000));
        data.push(dataProduct.actualPrice);
      });

      const dataset = {
        label: name,
        data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      };
      displayData(canvas, labels, dataset);
    } else {
      addProduct(store, productID);
      pikaRoot.innerHTML= `<h1 class="pika-root__title">EL producto fue agregado</h1>`
    }
  });
}

function displayData(canvas: HTMLCanvasElement, labels: any[], dataset: any) {
  const ctx = canvas.getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [dataset],
    },
    options: {
      maintainAspectRatio: true,
      aspectRatio: 3,
      scales: {
        x: {
          type: "time",
          time: {
            unit: "month",
          },
        },
      },
    },
  });
  myChart.draw();
}
