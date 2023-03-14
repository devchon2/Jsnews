// Importe les modules nécessaires pour le script, notamment les classes ArticleManager, Article et favoritesManager
import { ArticleManager } from '../../js/articleManager.js';
import { Article } from '../../js/article.js';
import { favoritesManager } from '../../js/favoritesManager.js';

// Crée une instance de ArticleManager pour stocker la liste des articles
const articleManager = new ArticleManager();

// Utilise la méthode fetch pour récupérer les données de l'API REST qui contient les articles
fetch('http://localhost:4000/api/article')
  .then(response => response.json()) // Transforme les données de la réponse en format JSON
  .then(data => { // Traite les données une fois qu'elles sont disponibles
    data.forEach(articleData => { // Pour chaque objet article dans les données
      const article = new Article( // Crée une instance de la classe Article en utilisant les données de l'objet
        articleData.id,
        articleData.title,
        articleData.publicationDate,
        articleData.image,
        articleData.content
      );
      articleManager.addArticle(article); // Ajoute l'article à la liste de articleManager
    })});

    articleManager.sortArticlesByDate(); // Trie la liste des articles par date de publication

    const articleList = document.getElementById('.container'); // Récupère l'élément DOM avec l'id .container

    articleManager.articles.forEach(article => { // Pour chaque article dans la liste des articles
      const articleElement = document.createElement('article'); // Crée un élément DOM <article>
      articleElement.classList.add('article'); // Ajoute la classe "article" à l'élément DOM

      const titleElement = document.createElement('h2'); // Crée un élément DOM <h2> pour le titre de l'article
      titleElement.textContent = article.title; // Affecte le titre de l'article à l'élément DOM
      articleElement.appendChild(titleElement); // Ajoute l'élément DOM au parent articleElement

      const dateElement = document.createElement('p'); // Crée un élément DOM <p> pour la date de publication
      dateElement.textContent = article.formattedDate(); // Affecte la date de publication formatée à l'élément DOM
      articleElement.appendChild(dateElement); // Ajoute l'élément DOM au parent articleElement

      const imageElement = document.createElement('img'); // Crée un élément DOM <img> pour l'image de l'article
      imageElement.src = article.image; // Affecte l'URL de l'image à l'élément DOM
      articleElement.appendChild(imageElement); // Ajoute l'élément DOM au parent articleElement

      const contentElement = document.createElement('p'); // Crée un élément DOM <p> pour le contenu de l'article
      contentElement.textContent = article.content; // Affecte le contenu de l'article à l'élément DOM
      articleElement.appendChild(contentElement); // Ajoute l'élément DOM au parent articleElement

      const favoriteButton = document.createElement('button'); // Crée un bouton pour ajouter l'article aux favoris
      favoriteButton.textContent = 'Ajouter aux favoris'; // Ajoute le texte "Ajouter aux favoris" au bouton
      favoriteButton.addEventListener('click', () => { // Ajoute un écouteur d'événements pour le clic sur le bouton
        favoritesManager.addFavorite(article.id); // Appelle la méthode addFavorite() de favoritesManager pour ajouter l'identifiant de l'article aux favoris lorsque le bouton est cliqué.
        articleElement.appendChild(favoriteButton); // Ajoute le bouton aux éléments DOM de l'article
        articleList.appendChild(articleElement); // Ajoute l'élément DOM articleElement à l'élément DOM articleList
      });
    })
    .catch(error => console.error(error)); // Affiche une erreur si la récupération des données échoue