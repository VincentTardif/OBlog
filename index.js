const express = require('express');
const app = express();

const PORT = 3000;

// définition du dossier contenant les views
app.set('views', './views');

// définition du moteur de rendu
app.set('view engine', 'ejs')

// mise en place des fichiers statiques
app.use(express.static('static'));

// importation des données de articles.json
const articles = require('./data/articles.json');
// console.log(articles);

// définition de la constante articles disponibles pour toutes les routes 
app.locals.articles = articles;

// définition de la page d'accueil
app.get('/', (request, response) => {
    response.render('indexBis.ejs')
});

app.get('/article/:id', (request, response) => {
    const id = request.params.id;
    const foundArticle = articles.find((article) => `${article.id}` === id)
    // console.log(id);
    // console.log(foundArticle);
    response.render('article.ejs')
});

// définition de l'écoute du serveur
app.listen(PORT, () => {
    console.log(`Serveur OK sur http://localhost:${PORT}`);
  });