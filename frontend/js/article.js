/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */
class Article{
    constructor(id, title, publicationDate, image,content){
        this.id = id;
        this.title = title;
        this.publicationDate = new Date(publicationDate);
        this.image = image;
        this.content = content;
    
        const formatedPubDate = this.publicationDate.toLocaleDateString("fr-FR");
        this.publicationDate = formatedPubDate;
        
    }
    
}

