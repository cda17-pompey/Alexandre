// Sélection de la barre de recherche
const searchBar = document.getElementById('search-bar');

// Sélectionne la modale et ses éléments internes
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close-modal');

// Gérer les likes dynamiques
const likeButtons = document.querySelectorAll('.post-likes i');

// Sélection de tous les posts
const posts = document.querySelectorAll('.post');

// Fonction de recherche dynamique
searchBar.addEventListener('keyup', function() {
    const filter = searchBar.value.toLowerCase(); // Récupère la valeur saisie
    const posts = document.querySelectorAll('.post'); // Tous les posts

    // Filtre les posts en fonction du texte saisi
    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const description = post.querySelector('.post-description').textContent.toLowerCase();

        // Vérifie si le texte saisi correspond au titre ou à la description
        if (title.includes(filter) || description.includes(filter)) {
            post.style.display = 'flex'; // Affiche le post si correspondance
        } else {
            post.style.display = 'none'; // Cache sinon
        }
    });
});

// Pour chaque bouton de like
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        let likesCount = this.nextElementSibling; // Sélectionne l'élément du nombre de likes
        let currentLikes = parseInt(likesCount.textContent); // Convertit en nombre
        likesCount.textContent = currentLikes + 1; // Incrémente de 1
    });
});

window.addEventListener('scroll', function() {
    posts.forEach(post => {
        const postPosition = post.getBoundingClientRect().top; // Position du post
        const screenPosition = window.innerHeight / 1.3; // Position du bas de l'écran

        // Si le post entre dans la zone visible, applique l'animation
        if (postPosition < screenPosition) {
            post.classList.add('visible'); // Ajoute la classe "visible"
        }
    });
});

// Animation pour le titre
window.addEventListener('load', function() {
    const title = document.querySelector('h1');
    title.classList.add('show'); // Ajoute la classe "show" au titre après le chargement
});

// Gestion de la fenêtre modale

// Fonction pour ouvrir la modale avec les détails du post
posts.forEach(post => {
    post.addEventListener('click', function() {
        // Récupère les informations du post cliqué
        const title = post.querySelector('.post-title').textContent;
        const description = post.querySelector('.post-description').textContent;
        const details = post.querySelector('.post-details').textContent;

        // Met à jour la fenêtre modale avec les infos du post
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalDetails.textContent = details;

        // Affiche la modale
        modal.style.display = 'flex';
    });
});


// Fermer la modale quand on clique sur la croix
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Cache la fenêtre modale
});

// Fermer la modale quand on clique à l'extérieur du contenu
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none'; // Cache la fenêtre modale
    }
});
