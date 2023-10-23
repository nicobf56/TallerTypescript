import { Serie } from "./serie.js";
import { hash, series } from "./data.js";

let coursesTBody: HTMLElement = document.getElementById("series")!;
let arraySeasons: number[] = [];

series.forEach((serie) => {
    showSeries(serie);
    arraySeasons.push(serie.seasons);
  });

  function showSeries(serie: Serie): void {
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr">
      <th scope="row">${serie.numS}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td></tr>`;
    coursesTBody.appendChild(tbodySerie);
  }

  let seasonsAvg: HTMLElement = document.getElementById("avg")!;

  seasonsAvg.innerHTML = `Seasons average: ${average(arraySeasons)}`;

  function average(arraySeasons: number[]): number {
    let sum = 0;
    arraySeasons.forEach((seasons) => {
      sum += seasons;
    });
    return sum / arraySeasons.length;
  }
  

  coursesTBody.click();

  function initPage() {
    let serieTable: HTMLTableElement = <HTMLTableElement>(
      document.getElementById("series")!
    );
    let rows = serieTable.getElementsByTagName("tr");
    for (let i = 0; i < serieTable.rows.length; i++) {
      rows[i].addEventListener("click", function () {
        let clickedRow = this.rowIndex;
        let serie = hash.get(clickedRow);
        buildCard(serie);
      });
    }
  }
  
  initPage();

  function buildCard(serie: any) {
    let card = document.getElementById("card")!;
    card.innerHTML = `<img src="${serie.image}" class="card-img-top"> 
    <div class="card-body">
    <p class="card-text"><h1>${serie.name}</h1></p>
    <p class="card-text">${serie.description}</p>
    <a href="url">${serie.link}</a>`;
  }
  
  