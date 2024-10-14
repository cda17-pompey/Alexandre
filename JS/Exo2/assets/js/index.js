// === 1. GESTION DE LA BARRE DE RECHERCHE DYNAMIQUE === //

// Sélection de la barre de recherche
const searchBar = document.getElementById('search-bar');

// Fonction de recherche dynamique : filtre les posts en fonction du texte saisi
searchBar.addEventListener('keyup', function() {
    const filter = searchBar.value.toLowerCase(); // Convertit le texte saisi en minuscules pour la recherche
    const posts = document.querySelectorAll('.post'); // Sélectionne tous les posts

    // Pour chaque post, vérifie si le titre ou la description contient le texte recherché
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase(); // Titre du post en minuscules
        const description = post.querySelector('.post-description').textContent.toLowerCase(); // Description du post en minuscules

        // Si le texte recherché est dans le titre ou la description, affiche le post
        if (title.includes(filter) || description.includes(filter)) {
            post.style.display = 'flex'; // Affiche le post
        } else {
            post.style.display = 'none'; // Cache le post s'il ne correspond pas
        }
    });
});


// === 2. GESTION DES LIKES DYNAMIQUES === //

// Sélection de tous les boutons "like"
const likeButtons = document.querySelectorAll('.post-likes i');

// Ajoute un écouteur sur chaque bouton "like" pour incrémenter le compteur de likes
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const likesCount = this.nextElementSibling; // Sélectionne l'élément suivant (compteur de likes)
        let currentLikes = parseInt(likesCount.textContent); // Convertit le texte du compteur en nombre
        likesCount.textContent = currentLikes + 1; // Incrémente de 1 et met à jour le texte
    });
});


// === 3. ANIMATION D'APPARITION DES POSTS AU DÉFILEMENT === //

// Sélection de tous les posts
const posts = document.querySelectorAll('.post');

// Ajoute un écouteur d'événements pour surveiller le défilement de la page
window.addEventListener('scroll', function() {
    // Pour chaque post, vérifie s'il est dans la zone visible de l'écran
    posts.forEach(post => {
        const postPosition = post.getBoundingClientRect().top; // Position du post par rapport à la fenêtre
        const screenPosition = window.innerHeight / 1.3; // Position seuil pour déclencher l'animation

        // Si le post est dans la zone visible, ajoute la classe "visible" pour l'animer
        if (postPosition < screenPosition) {
            post.classList.add('visible'); // L'animation démarre en ajoutant la classe "visible"
        }
    });
});


// === 4. ANIMATION DU TITRE PRINCIPAL AU CHARGEMENT DE LA PAGE === //

// Ajoute un écouteur pour l'événement 'load' qui se déclenche après le chargement complet de la page
window.addEventListener('load', function() {
    const title = document.querySelector('h1'); // Sélection du titre principal (balise h1)
    title.classList.add('show'); // Ajoute la classe "show" pour déclencher l'animation du titre
});


// === 5. GESTION DE LA FENÊTRE MODALE === //

// Sélectionne la modale et ses éléments internes
const modal = document.getElementById('modal'); // Sélectionne la modale
const modalTitle = document.getElementById('modal-title'); // Sélectionne le titre dans la modale
const modalDescription = document.getElementById('modal-description'); // Sélectionne la description dans la modale
const modalDetails = document.getElementById('modal-details'); // Sélectionne les détails dans la modale
const closeModal = document.querySelector('.close-modal'); // Sélectionne le bouton de fermeture de la modale

// Fonction pour ouvrir la modale avec les détails du post
posts.forEach(post => {
    post.addEventListener('click', function() {
        // Récupère les informations du post cliqué
        const title = post.querySelector('.post-title').textContent; // Titre du post
        const description = post.querySelector('.post-description').textContent; // Description du post
        const details = post.querySelector('.post-details').textContent; // Détails du post (date, créateur, etc.)

        // Met à jour la fenêtre modale avec les informations du post
        modalTitle.textContent = title; // Met à jour le titre de la modale
        modalDescription.textContent = description; // Met à jour la description dans la modale
        modalDetails.textContent = details; // Met à jour les détails dans la modale

        // Affiche la modale
        modal.style.display = 'flex'; // Rend la modale visible
    });
});

// === 6. FERMETURE DE LA MODALE === //

// Fermer la modale quand on clique sur la croix
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Cache la modale
});

// Fermer la modale quand on clique à l'extérieur du contenu
window.addEventListener('click', function(e) {
    if (e.target === modal) { // Si l'élément cliqué est la modale elle-même (fond sombre)
        modal.style.display = 'none'; // Cache la modale
    }
});
