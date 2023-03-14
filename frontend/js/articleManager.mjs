/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */
articles = fetch("http://localhost:4000/api/article").then(response=> response.json()).then((data) => console.log(data));



export class ArticleManager {
    constructor() {
      this.articles = articles;
    }
  
    addArticle(article) {
      this.articles.push(article);
    }
  
    sortArticlesByDate() {
      this.articles.sort((a, b) => b.publicationDate - a.publicationDate);
    }
  }