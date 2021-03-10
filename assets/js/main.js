const newsContainer = document.getElementById("news-container");

let fetchUriTechCrunch = "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=";
let apiKey = "18d8c403272e46099d86fa39edcb3e75";


fetch(fetchUriTechCrunch + apiKey)
  .then(response => response.json())
  .then((data) => {
    data.articles.forEach(element => {
      newsContainer.innerHTML +=
      `
      <div>${element.title}</div>
      `
    });   
  });

