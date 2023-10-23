import { hash, series } from "./data.js";
var coursesTBody = document.getElementById("series");
var arraySeasons = [];
series.forEach(function (serie) {
    showSeries(serie);
    arraySeasons.push(serie.seasons);
});
function showSeries(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr\">\n      <th scope=\"row\">".concat(serie.numS, "</th>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td></tr>");
    coursesTBody.appendChild(tbodySerie);
}
var seasonsAvg = document.getElementById("avg");
seasonsAvg.innerHTML = "Seasons average: ".concat(average(arraySeasons));
function average(arraySeasons) {
    var sum = 0;
    arraySeasons.forEach(function (seasons) {
        sum += seasons;
    });
    return sum / arraySeasons.length;
}
coursesTBody.click();
function initPage() {
    var serieTable = (document.getElementById("series"));
    var rows = serieTable.getElementsByTagName("tr");
    for (var i = 0; i < serieTable.rows.length; i++) {
        rows[i].addEventListener("click", function () {
            var clickedRow = this.rowIndex;
            var serie = hash.get(clickedRow);
            buildCard(serie);
        });
    }
}
initPage();
function buildCard(serie) {
    var card = document.getElementById("card");
    card.innerHTML = "<img src=\"".concat(serie.image, "\" class=\"card-img-top\"> \n    <div class=\"card-body\">\n    <p class=\"card-text\"><h1>").concat(serie.name, "</h1></p>\n    <p class=\"card-text\">").concat(serie.description, "</p>\n    <a href=\"url\">").concat(serie.link, "</a>");
}
