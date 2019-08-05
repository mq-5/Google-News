async function getNews(q) {
  let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=b092ae90ed984bbfa434086627f1a08d`;
  const response = await fetch(url);
  const jsonDataObject = await response.json();
  const newsHTML = jsonDataObject.articles;
  document.getElementById("articles").innerHTML = `<p class="p-3"> Showing ${
    newsHTML.length
  } of ${jsonDataObject.totalResults} results </p>`;
  console.log(jsonDataObject);
  newsHTML.map(renderArticles);
}

function renderArticles(article) {
  let ul = document.getElementById("articles");
  let articleBody = document.createElement("li");
  articleBody.setAttribute("class", "container");
  articleBody.innerHTML = ` 
    <i class="fa fa-newspaper-o" aria-hidden="true"></i>
    <a href="${article.url}"> <h5>${article.title}</h5> </a> 
    <p class="source">${article.source.name} - ${moment(
    article.publishedAt
  ).format("MMMM Do YYYY, h:mm:ss a")}</p>
    <div class="article-body">
        <img src="${article.urlToImage}" alt="Image"/>
        <p>${article.content} </p>
    </div>`;
  ul.appendChild(articleBody);
}

function search() {
  let q = document.getElementById("input").value;
  console.log(q);
  getNews(q);
}

/*function renderDropdowns(arr) {
  let countries = document.getElementById("country")
  let languages = document.getElementById("language")
  let categories = document.getElementById("category")

  const countries = arr.reduce(function (acc, el) {
    let key = el.country;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  
  // <a class="dropdown-item" href="#">Action</a>
  // <a class="dropdown-item" href="#">Another action</a>
  // <a class="dropdown-item" href="#">Something else here</a>
}
getNews("us"); */
