document.addEventListener('DOMContentLoaded', function() {
    
    var gameCard = document.getElementById('gameCard');
    var gameImage = document.getElementById('gameImage');
    var gameTitle = document.getElementById('gameTitle');
    var gameDescription = document.getElementById('gameDescription');
    var likeButton = document.getElementById('likeButton');
    var dislikeButton = document.getElementById('dislikeButton');
    var likedGamesList = document.getElementById('likedGamesList');
    var likedGamesSection = document.getElementById('likedGames');

    // Array of game objects
    var games = [
        { title: 'fifa', description: 'Jeu de simulation de football réaliste publié par EA Sports.', image: 'images/fifa.jpeg' },
        { title: 'gta', description: 'Jeu d action-aventure en monde ouvert avec missions et liberté de mouvement.', image: 'images/gta.jpeg' },
        { title: 'pubg', description: 'Jeu de bataille royale où les joueurs se battent pour être le dernier survivant.', image: 'images/pubg.jpeg' },
        { title: 'valorant', description: 'Jeu de tir tactique en équipe développé par Riot Games.', image: 'images/valorant.jpeg' },
        { title: 'witcher', description: 'Jeu de rôle d action basé sur les livres d Andrzej Sapkowski, suivant le sorceleur Geralt de Riv.', image: 'images/witcher.jpeg' },
        { title: 'call-of-duty', description: 'érie de jeux de tir à la première personne se déroulant dans divers contextes militaires.', image: 'images/call-of-duty.jpeg' },
        { title: 'minecraft', description: 'Jeu de construction en monde ouvert où les joueurs peuvent créer et explorer des mondes infinis.', image: 'images/minecraft.jpeg' }
    ];

    var currentGameIndex = 0;
    var likedGames = [];

    // Function to display a game
    function displayGame(index) {
        var game = games[index];
        gameImage.src = game.image;
        gameTitle.textContent = game.title;
        gameDescription.textContent = game.description;
    }

    // Function to show the next game
    function showNextGame() {
        currentGameIndex++;
        if (currentGameIndex < games.length) {
            displayGame(currentGameIndex);
        } else {
            gameCard.style.display = 'none';
            likedGamesSection.style.display = 'block';
        }
    }

    // Event listener for the Like button
    likeButton.addEventListener('click', function() {
        likedGames.push(games[currentGameIndex]);
        var likedGameItem = document.createElement('li');
        likedGameItem.textContent = games[currentGameIndex].title;
        likedGamesList.appendChild(likedGameItem);
        showNextGame();
    });

    // Event listener for the Dislike button
    dislikeButton.addEventListener('click', function() {
        showNextGame();
    });

    // Display the first game
    displayGame(currentGameIndex);
});
