const newsContainer = document.getElementById("news-container");

let fetchUriTechCrunch = "http://newsapi.org/v2/top-headlines?category=business&apiKey=";
let apiKey = "18d8c403272e46099d86fa39edcb3e75";


fetch(fetchUriTechCrunch + apiKey)
  .then(response => response.json())
  .then((data) => {
    data.articles.forEach(element => {
      newsContainer.innerHTML +=
      `
      <!-- card -->
      <div class="card item">
        <p class ="categorie">Similar post</p>
        <h2>${element.title}</h2>
        <p class="description">${element.description}</p>
        <p class="description">${element.publishedAt}</p>
        <a class="button" href="${element.url}" target="_blank">
          <div>
            Hello world
          </div>
        </a>
      </div>
      <!-- end card -->
      `
    });   
  });

