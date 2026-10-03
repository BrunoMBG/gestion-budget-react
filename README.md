# Mon Budget (React)

Application de gestion de budget personnel développée en **React, TypeScript et SCSS** avec Vite (migration d'une version Vanilla TS).

## Fonctionnalités

- **CRUD complet** : Ajout, affichage et suppression de transactions (revenus/dépenses).
- **Formulaire dynamique** : Adaptation intelligente du champ catégorie selon le type de transaction.
- **Calculs en temps réel** : Mise à jour automatique du solde, des revenus et des dépenses via le state React.
- **Filtrage et tri** : Filtrage multicritère (type/catégorie) et tri dynamique.
- **Persistance des données** : Sauvegarde et chargement automatique via le `localStorage`.

## Technologies

- React 18+
- TypeScript (Mode strict)
- SCSS / Sass
- Vite

## Architecture du projet

```text
src/
├── components/     # Composants React modulaires
├── scss/           # Styles SCSS et variables globales
├── types/          # Définitions des interfaces et types TypeScript
├── App.tsx         # Composant racine et gestion du state
└── main.tsx        # Point d'entrée React et import SCSS global
```

## Installation et lancement

1. Cloner le projet :
```bash
git clone https://github.com/BrunoMBG/gestion-budget-react.git
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Compiler le projet pour la production :
```bash
npm run build
```