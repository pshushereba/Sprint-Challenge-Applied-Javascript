// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then((axiosData) => {
    createCard(axiosData.data.articles);
  })
  .catch((err) => {
    console.log("There was an error", err);
  });

function createCard(articleData) {    
    
    for (let category in articleData) {
        const categoryArr = articleData[category];

        categoryArr.forEach((article) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
    
            const headlineDiv = document.createElement('div');
            headlineDiv.classList.add('headline');
            headlineDiv.textContent = article.headline;
            cardDiv.appendChild(headlineDiv);
    
            const authorDiv = document.createElement('div');
            authorDiv.classList.add('author');
            cardDiv.appendChild(authorDiv);

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-container');
            authorDiv.appendChild(imgDiv);

            const authorImg = document.createElement('img');
            authorImg.src = article.authorPhoto;
            imgDiv.appendChild(authorImg);

            const authorSpan = document.createElement('span');
            authorSpan.textContent = article.authorName;
            authorDiv.appendChild(authorSpan);
        
            articleContainer.appendChild(cardDiv);    
        });
    }
}


const articleContainer = document.querySelector(".cards-container");
