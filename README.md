# Argent Bank - Application bancaire

Bienvenue sur le dépôt de **Argent Bank**, une application bancaire permettant aux utilisateurs de gérer leurs comptes en ligne. Ce projet a été développé avec **React**, **Redux**, et consomme une API REST documentée via **Swagger**.

---

## Table des matières

1. [Aperçu](#aperçu)
2. [Fonctionnalités](#fonctionnalités)
3. [Prérequis](#prérequis)
4. [Installation](#installation)
5. [Documentation API "Swagger Docs"](http://localhost:3001/api-docs)

---

## Aperçu

Argent Bank est une application web permettant aux utilisateurs de :

-   Se connecter à leur compte de manière sécurisée via **JWT Authentication**.
-   Accéder à leur profil utilisateur et consulter des informations bancaires.
-   Mettre à jour certaines informations personnelles.
-   Naviguer sur une interface utilisateur responsive et performante.

### Stack technique

-   **React** : Développement de l'interface utilisateur.
-   **Redux** : Gestion de l'état global de l'application.
-   **Node.js** : Back-end supportant l'API.
-   **Axios.js** : Bibliothèque pour gérer les appels HTTP vers l'API REST.
-   **Swagger** : Documentation des endpoints de l'API.
-   **CSS/HTML statique** : Pour certaines pages initiales.

---

## Fonctionnalités

### Phase 1 : Authentification des utilisateurs

1. [x] **Page d'accueil** : Présentation de l'application et navigation vers les fonctionnalités clés.
2. [x] **Connexion** : Système sécurisé basé sur des tokens JWT.
3. [x] **Déconnexion** : Redirection vers la page d'accueil.
4. [x] **Page Profil** : Consultation des informations personnelles et bancaires.
5. [x] **Mise à jour des informations du profil** : Modification des informations utilisateur avec persistance en base de données.

### Phase 2 : Gestion des transactions (en cours de conception)

-   Visualisation des transactions mensuelles par compte.
-   Détails de chaque transaction.
-   Ajout, modification et suppression d'une transaction.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

-   [Node.js](https://nodejs.org/) (version 16 ou supérieure)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Installation

1. Clonez ce dépôt :
    ```
    git clone "homepage": "https://Jerem16.github.io/argent_bank",
    ```

-   [NodeJS (**version 18.17.1**)](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/)
    > [!NOTE]
    > If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

-Front

1. nvm install 18.17.1
2. nvm use 18.17.1
3. node -v
4. npm install / yarn install

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To learn more about how the API works, once you have started your local environment, you can visit: (http://localhost:3001/api-docs).
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# argent_bank_deploy

# argent_bank
