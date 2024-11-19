# Documentation des Issues

Ce fichier documente les tâches principales à réaliser dans le projet, classées par ordre de priorité. Les dépendances et les étapes détaillées pour chaque issue sont spécifiées pour garantir une progression fluide.

---

## **Table des matières**

1. [Landing Page](#issue-1-landing-page)
2. [Authentification (Login)](#issue-2-authentification-login)
3. [Déconnexion (Logout)](#issue-3-déconnexion-logout)
4. [Confidentialité des Profils](#issue-4-confidentialité-des-profils)
5. [Redux](#issue-6-redux)
6. [Mise à jour du Profil](#issue-5-mise-à-jour-du-profil)

---

### **Priorités et Dépendances**

-   **Phase 1 : Priorité élevée**
    -   [Issue #1 : Landing Page](#issue-1-landing-page)
    -   [Issue #2 : Authentification (Login)](#issue-2-authentification-login)
    -   [Issue #3 : Déconnexion (Logout)](#issue-3-déconnexion-logout)
-   **Phase 2 : Priorité moyenne**
    -   [Issue #4 : Confidentialité des Profils](#issue-4-confidentialité-des-profils)
    -   [Issue #6 : Redux](#issue-6-redux)
-   **Phase 3 : Priorité basse**
    -   [Issue #5 : Mise à jour du Profil](#issue-5-mise-à-jour-du-profil)

---

## **Détail des Issues**

### **Issue #1 : Landing Page**

-   **Priorité** : Élevée
-   **Route associée** : `/`
-   **Dépendance** : Aucune
-   **Description** : Implémentez une page d'accueil en respectant les maquettes fournies.
-   **Étapes** :
    1. Créez la route `/`.
    2. Intégrez les assets graphiques et textuels.
    3. Testez l'affichage sur différentes tailles d'écran.
-   **Critères d'acceptation** :
    -   La page est responsive.
    -   Respect des guidelines de design.

---

### **Issue #2 : Authentification (Login)**

-   **Priorité** : Élevée
-   **Route associée** : `/login`
-   **Dépendance** : Aucune
-   **Description** : Créer une interface pour permettre aux utilisateurs de s’authentifier.
-   **Étapes** :
    1. Ajoutez un formulaire avec champs `email` et `password`.
    2. Envoyez les données à l’API avec un appel `POST /auth/login`.
    3. Sauvegardez le token JWT retourné (localStorage).
    4. Gérez les erreurs.

---

### **Issue #3 : Déconnexion (Logout)**

-   **Priorité** : Élevée
-   **Accessible depuis** : Toutes les pages après connexion
-   **Dépendance** : [Issue #2 : Authentification (Login)](#issue-2-authentification-login)
-   **Description** : Implémentez la fonctionnalité de déconnexion des utilisateurs.
-   **Étapes** :
    1. Ajouter un bouton de déconnexion visible uniquement si un utilisateur est connecté.
    2. Supprimer le token JWT de `localStorage`.
    3. Rediriger l’utilisateur vers `/` après déconnexion.

---

### **Issue #4 : Confidentialité des Profils**

-   **Priorité** : Moyenne
-   **Route associée** : /profile
-   **Dépendance** : Issues #2, #3
-   **Description** : Restreindre l’accès aux profils aux utilisateurs authentifiés.
-   **Étapes** :
    Ajoutez une logique de protection des routes avec React Router.
    Utilisez le token JWT pour récupérer les données utilisateur.
    Redirigez les utilisateurs non authentifiés vers /login.
    Code suggéré :

    const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
    };

-   **Critères d'acceptation** :
    Accès refusé sans authentification.

---

### **Issue #6 : Redux**

-   **Priorité** : Moyenne
-   **Dépendance** : Aucune
-   **Description** : Configurez Redux pour gérer l’état global.
-   **Étapes** :
    Installez Redux et Redux Toolkit.
    Configurez le store pour gérer les données utilisateur.
    Implémentez les actions et reducers pour l’authentification.
-   **Critères d'acceptation** :
    Les données utilisateur sont gérées globalement via Redux.

---

### **Issue #5 : Mise à jour du Profil**

-   **Priorité** : Basse
-   **Route associée** : /profile
-   **Dépendance** : Issues #4, #6
-   **Description** : Permettre à l’utilisateur de modifier son username.
-   **Étapes** :
    Créez un formulaire pour éditer le champ username.
    Envoyez les données avec un appel PUT /user/profile.
    Mettez à jour l’état global avec Redux.
-   **Critères d'acceptation** :
    Les changements sont persistants et visibles immédiatement.

---

## **Suivi des Issues**

| Issue                       | Priorité | État     | Responsable | Dépendance   |
| --------------------------- | -------- | -------- | ----------- | ------------ |
| Landing Page                | Élevée   | À faire  | Mila        | Aucune       |
| Authentification (Login)    | Élevée   | En cours | Avery       | Aucune       |
| Déconnexion (Logout)        | Élevée   | À faire  | Avery       | Issue #2     |
| Confidentialité des Profils | Moyenne  | À faire  | Mila        | Issue #2, #3 |
| Redux                       | Moyenne  | À faire  | Avery       | Aucune       |
| Mise à jour du Profil       | Basse    | À faire  | Mila        | Issue #4, #6 |

! INFO Notes

    Maintenir ce fichier à jour pendant les phases de développement.
    Consulter la documentation Swagger pour les spécifications API : Swagger Docs.

---

### **Ressources générales**

-   **Swagger API Documentation** : [Swagger Docs](http://localhost:3001/api-docs)
