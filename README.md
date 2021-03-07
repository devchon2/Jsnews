# Javanews
## Téléchargement
Copier l'url du repository et faire un : 
* git clone https://github.com/mostuf/Javanews.git

## Instalation
Vous devez avoir installé nodejs et npm sur votre machine : https://www.npmjs.com/get-npm
Positionnez vous sur le dossier backend à partir du projet
```
> cd ./backend/
```
Vous devrez probablement redémarrer l'ordinateur après installation.
Ensuite, installez les composants du projet.
```
> npm install
```
Vous pouvez maintenant lancer le projet en local pour l'utiliser
```
> node server
```
Le serveur sera accéssible sur http://localhost:4000 par défaut.

## API
Il y a actuellement 3 api sur le serveur :

Elles traitent toutes des articles. Un article est au format suivant : 

> {  
> &nbsp;&nbsp;&nbsp;"id" : int,  
> &nbsp;&nbsp;&nbsp;"title": string,  
> &nbsp;&nbsp;&nbsp;"publicationDate" : string,  
> &nbsp;&nbsp;&nbsp;"image" : string,  
> &nbsp;&nbsp;&nbsp;"content" : string  
> }  

### GetAll
```
GET /api/article
```
> Récupération des articles
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ] 

### GetById
```
GET /api/article/:id
```
> Récupération d'un article par son id
> Format de retour :  
> {article}

### GetFavorites
```
POST /api/article/
@body 
{
    "favorites": [id]
}
```
> Récupération des articles favoris (non triés)  
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ]  