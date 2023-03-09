/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */
class Article{
    constructor(id, title, publicationDate, image,content){
        this.id = id;
        this.title = title;
        this.publicationDate = publicationDate;
        this.image = image;
        this.content = content;
    }
    formatedDate(){
        return new Date(this.publicationDate).toLocaleDateString("fr-FR")
        }
             
}

