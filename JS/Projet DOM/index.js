document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const filters = document.querySelectorAll('.filter');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filter = 'all';

    // Ajouter une nouvelle tâche
    addTaskBtn.addEventListener('click', () => {
        // Si l'input n'est pas vide
        if (taskInput.value.trim() !== '') {
            // Crée une nouvelle tâche avec un ID, texte, et statut "non complété"
            const newTask = {
                id: Date.now(),
                text: taskInput.value,
                completed: false
            };
            tasks.push(newTask); // Ajoute la tâche au tableau
            saveTasks(); // Sauvegarde dans localStorage
            renderTasks(); // Rafraîchit l'affichage
            taskInput.value = ''; // Vide l'input
        }
    });

    // Sauvegarder les tâches dans le localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Afficher les tâches en fonction du filtre
    function renderTasks() {
        taskList.innerHTML = ''; // Vide la liste
        let filteredTasks = tasks.filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true; // Toutes les tâches
        });

        // Parcourt les tâches filtrées et crée les éléments visuels
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.setAttribute('data-id', task.id);

            const taskText = document.createElement('span');
            taskText.textContent = task.text;
            taskText.classList.add('completed');
            taskText.addEventListener('click', toggleTaskCompletion); // Toggle complet

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Supprimer'; // Bouton suppression
            deleteBtn.classList.add('delete-task');
            deleteBtn.addEventListener('click', deleteTask); // Supprime la tâche

            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            taskList.appendChild(li); // Ajoute l'élément à la liste
        });
    }

    // Marquer comme complétée ou non
    function toggleTaskCompletion(event) {
        const id = event.target.parentElement.getAttribute('data-id');
        tasks = tasks.map(task => {
            if (task.id == id) task.completed = !task.completed;
            return task;
        });
        saveTasks(); // Sauvegarde les changements
        renderTasks(); // Rafraîchit l'affichage
    }

    // Supprimer une tâche
    function deleteTask(event) {
        const id = event.target.parentElement.getAttribute('data-id');
        tasks = tasks.filter(task => task.id != id); // Filtre les tâches sans celle supprimée
        saveTasks(); // Sauvegarde
        renderTasks(); // Rafraîchit
    }

    // Filtrer les tâches (toutes, actives, terminées)
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active')); // Retire l'état actif
            btn.classList.add('active'); // Active le filtre choisi
            filter = btn.getAttribute('data-filter'); // Définit le filtre
            renderTasks(); // Rafraîchit
        });
    });
})

// Charger les tâches au démarrage
renderTasks();