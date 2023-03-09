/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */
articles = fetch("http://localhost:4000/api/article").then(response=> response.json()).then((data) => console.log(data));



class ArticleManager{
    constructor(articles){
        this.articles = articles;
        console.log(this.articles);
        this.articles.sort()
        console.log(this.articles.sort())
    }
    
     
}

  