# DayZ Armada Forum

Bienvenue dans le projet **DayZ Armada Forum**, une page d'accueil de forum pour un serveur **DayZ**. Cette page est entièrement responsive, dotée de plusieurs sections de discussion, d'une barre de recherche dynamique, et d'une interface utilisateur simple et intuitive.

## Table des matières
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Installation](#installation)
4. [Structure des fichiers](#structure-des-fichiers)
5. [Technologies utilisées](#technologies-utilisées)
6. [Utilisation](#utilisation)
7. [Crédits](#crédits)

---

## Description

Ce projet a été développé pour fournir une interface web simple mais élégante pour un forum dédié à un serveur **DayZ**. La page inclut des sections pour **discussions générales**, **astuces et guides**, et **survie et événements**. Les utilisateurs peuvent interagir avec le contenu en "likant" les posts et en recherchant des discussions grâce à une barre de recherche dynamique.

---

## Fonctionnalités

- **Responsive Design** : Le site s'adapte à toutes les tailles d'écran (ordinateurs, tablettes, et smartphones).
- **Barre de recherche dynamique** : Permet de rechercher des posts par titre ou description en temps réel.
- **Likes dynamiques** : Les utilisateurs peuvent liker les posts et voir le compteur de likes s'incrémenter.
- **Fenêtres modales** : En cliquant sur un post, une fenêtre modale s'ouvre avec plus de détails sur le post.
- **Animation d'apparition des posts** : Les posts apparaissent de manière fluide lorsqu'ils entrent dans la zone visible de l'écran.
- **Animation du titre** : Le titre du forum apparaît avec une animation fluide lors du chargement de la page.

---

## Installation

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/votre-repo/dayz-armada-forum.git
   ```
2. **Ouvrir le projet** :
- Une fois le projet cloné, ouvrez le dossier dans votre IDE préféré.
3. **Lancer le projet** :
- Il s'agit d'un projet statique, donc vous pouvez l'ouvrir directement dans un navigateur en ouvrant le fichier ```index.html``` avec l'extension "Live Server"

---

## Structure des fichiers
Voici la structure du projet :
```bash
    .
├── assets
│   ├── css
│   │   └── index.css          # Fichier de style principal
│   ├── img
│   │   └── b.jpg              # Image de fond du site
│   └── js
│       └── index.js           # Fichier JavaScript principal
├── index.html                  # Page principale du forum
└── README.md                   # Fichier d'information sur le projet
```

---

## Technologies utilisées

- **HTML** : Utilisé pour la structure du contenu
- **CSS** : Utilisé pour le style et la mise en page, avec des media queries pour rendre le site responsive.
- **JavaScript** : Pour gérer l'interactivité de la page (barre de recherche, likes dynamiques, modales, etc...).

---

## Utilisation

1. **Barre de recherche** :
    - Tapez dans la barre de recherche pour filtrer les posts en temps réel.
    - Les posts qui correspondent à votre recherche seront affichés automatiquement.
2. **Likes dynamiques (ne fonctionne pas)** :
    - Cliquez sur l'icône de pouce en l'air sous chaque post pour liker.
    - Le compteur de likes s'incrémente dynamiquement.
3. **Ouvrir un post dans une fenêtre modale** :
    - Cliquez sur un post pour afficher une fenêtre modale avec plus de détails.
    - Fermez la modale en cliquant sur la croix ou en dehors de la fenêtre.
4. **Responsive Design** :
    - Testez le site sur différentes tailles d'écran pour voir comment le contenu s'ajuste automatiquement.

---

## Crédits

- **Développeur** : Djinn (Alexandre)
- **Exercice inspiré par** : L'univers du jeu **DayZ**