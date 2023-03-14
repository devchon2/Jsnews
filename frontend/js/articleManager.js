/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */



export class ArticleManager {
    constructor(articles) {
      this.articles = articles;
    }
  
    addArticle(article) {
      this.articles.push(article);
    }
  
    sortArticlesByDate() {
      this.articles.sort((a, b) => b.publicationDate - a.publicationDate);
    }
  }