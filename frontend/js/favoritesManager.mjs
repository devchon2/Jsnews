// Définit une classe FavoritesManager pour gérer les favoris
export class FavoritesManager {

  // Le constructeur initialise la liste de favoris en récupérant les données stockées dans localStorage
  constructor() {
    this.favorites = this.getFavoritesFromStorage();
  }
  
  // Ajoute un identifiant de favori à la liste si celui-ci n'y est pas déjà présent
  addFavorite(id) {
    if (!this.favorites.includes(id)) {
      this.favorites.push(id); // Ajoute l'identifiant à la liste
      this.saveFavoritesToStorage(); // Enregistre les modifications dans localStorage
    }
  }
  
  // Supprime un identifiant de favori de la liste s'il est présent
  removeFavorite(id) {
    const index = this.favorites.indexOf(id); // Trouve l'index de l'identifiant dans la liste
    if (index !== -1) {
      this.favorites.splice(index, 1); // Supprime l'identifiant de la liste
      this.saveFavoritesToStorage(); // Enregistre les modifications dans localStorage
    }
  }
  
  // Renvoie la liste actuelle de favoris
  getFavorites() {
    return this.favorites;
  }
  
  // Enregistre la liste de favoris dans localStorage
  saveFavoritesToStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  
  // Récupère la liste de favoris depuis localStorage ou renvoie une liste vide si elle n'existe pas
  getFavoritesFromStorage() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
  
  // Renvoie une liste d'identifiants de favoris extraits de la liste de favoris actuelle
  getFavoritesIds() {
    return this.favorites.map(article => article.id);
  }
}
