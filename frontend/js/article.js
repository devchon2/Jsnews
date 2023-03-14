export class Article {
    constructor(id, title, publicationDate, image, content) {
      this.id = id;
      this.title = title;
      this.publicationDate = new Date(publicationDate);
      this.image = image;
      this.content = content;
    }
  
    formattedDate() {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return this.publicationDate.toLocaleDateString('fr-FR', options);
    }
  }