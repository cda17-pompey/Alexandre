// Liste des recettes
const recipes = [
    {
        id: 1,
        title: "Tarte aux pommes",
        category: "Desserts",
        difficulty: "Facile"
    },
    {
        id: 2,
        title: "Lasagnes",
        category: "Plats principaux",
        difficulty: "Moyen"
    },
    {
        id: 3,
        title: "Salade César",
        category: "Entrées",
        difficulty: "Facile"
    }
];

// Fonction pour afficher les recettes
function displayRecipes(recipesToDisplay) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        let imgSrc = 'assets/images/' + recipe.title.toLowerCase().replaceAll(' ', '-');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${imgSrc}.jpg" alt="Image de ${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>Catégorie: ${recipe.category}</p>
            <p>Difficulté: ${recipe.difficulty}</p>
            <div class="rating" aria-label="Note de la recette">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
        `;
        recipeCard.setAttribute('tabindex', '0');
        recipeCard.addEventListener('click', () => {
            openModal(recipe);
        });
        recipesContainer.appendChild(recipeCard);
    });
}

// Fonction pour ouvrir la modal avec les détails de la recette
function openModal(recipe) {
    const modal = document.getElementById('recipe-modal');
    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>Catégorie: ${recipe.category}</p>
        <p>Difficulté: ${recipe.difficulty}</p>
        <img class="recette-img" src="assets/images/${recipe.title.toLowerCase().replaceAll(' ', '-')}.jpg" alt="Image de ${recipe.title}">
    `;
    displayComments(recipe.id);
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Gestion des commentaires avec localStorage
function getComments(recipeId) {
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    return comments[recipeId] || [];
}

function saveComment(recipeId, comment) {
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    if (!comments[recipeId]) {
        comments[recipeId] = [];
    }
    comments[recipeId].push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function displayComments(recipeId) {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';
    const comments = getComments(recipeId);
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const recipeId = document.querySelector('#modal-details h2').textContent;
    const recipe = recipes.find(r => r.title === recipeId);
    if (commentInput.value.trim() !== '') {
        saveComment(recipe.id, commentInput.value.trim());
        commentInput.value = '';
        displayComments(recipe.id);
    }
});

// Fonction pour filtrer les recettes par catégorie
function filterRecipesByCategory(category) {
    if (category === "") {
        displayRecipes(recipes);
    } else {
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    }
}

// Fonction de recherche en temps réel
function searchRecipes(query) {
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    displayRecipes(filteredRecipes);
}

// Fonction pour le mode sombre
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
}

// Fonction pour afficher la recette du jour
function displayRecipeOfTheDay() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipeOfTheDay = recipes[randomIndex];
    const recipeOfTheDayContainer = document.getElementById('recipe-of-the-day');
    recipeOfTheDayContainer.innerHTML = `
        <h3>${recipeOfTheDay.title}</h3>
        <p>Catégorie: ${recipeOfTheDay.category}</p>
        <p>Difficulté: ${recipeOfTheDay.difficulty}</p>
    `;
}

// Événements pour les filtres et la recherche
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
    displayRecipeOfTheDay();

    const categoryFilter = document.getElementById('categories');
    const searchInput = document.getElementById('search-bar');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const closeModalButton = document.getElementById('close-modal');

    // Remplir les catégories dynamiquement
    const categories = [...new Set(recipes.map(recipe => recipe.category))];
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        li.addEventListener('click', () => filterRecipesByCategory(category));
        categoryFilter.appendChild(li);
    });

    // Ajouter l'événement de recherche
    searchInput.addEventListener('input', (e) => {
        searchRecipes(e.target.value);
    });

    // Ajouter l'événement pour le mode sombre
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Ajouter l'événement pour fermer la modal
    closeModalButton.addEventListener('click', closeModal);
});


window.addEventListener('click', (event) => {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) {
        closeModal();
        document.body.style.overflow = 'auto';
    }
});