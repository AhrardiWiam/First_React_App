# Système de Gestion de Comptes Bancaires

Application web complète pour la gestion de comptes bancaires, développée avec un backend **Spring Boot** et un frontend **React**. Elle permet aux utilisateurs de consulter, ajouter, supprimer et modifier des comptes bancaires. Une base de données en mémoire **H2** est utilisée pour le développement et les tests. L'interface utilisateur propose le choix entre les formats **JSON** et **XML** pour les requêtes HTTP.

## Fonctionnalités

- **Consultation de la liste des comptes** : Affiche tous les comptes bancaires enregistrés.
- **Ajout d'un compte** : Permet de créer un nouveau compte bancaire en fournissant les informations nécessaires.
- **Suppression d'un compte** : Supprime un compte bancaire existant.
- **Modification d'un compte** : Permet de mettre à jour les informations d'un compte bancaire existant.
- **Sélection du format de requête** : Choisissez entre **JSON** et **XML** pour les requêtes HTTP.

## Technologies utilisées

- **Backend** : Spring Boot (Java) avec Spring Data REST, Spring Data JPA et Spring Web.
- **Frontend** : React.js.
- **Base de données** : H2 (en mémoire).
- **Format de données** : JSON et XML.

## Installation et exécution

### Prérequis

- **JDK** 17 ou supérieur installé.
- **Maven** .
- **Node.js** et **npm**.


## Backend

- Cloner le dépôt : `git clone <URL_du_dépôt>`
- Naviguer vers le répertoire **backend**.
- Exécuter la commande `mvn clean install` (ou la commande Gradle équivalente).
- Lancer l'application Spring Boot avec `mvn spring-boot:run` .

## Frontend

- Naviguer vers le répertoire **frontend**.
- Installer les dépendances avec `npm install`.
- Lancer l'application avec `npm start`.

- L'application **backend** sera accessible à l'adresse : [http://localhost:8082/](http://localhost:8080/) .
- L'application **frontend** sera accessible via l'adresse fournie par `npm start`.

## Architecture

L'application utilise une architecture **client-serveur** :

- **Frontend** : Développé avec React.js, il communique avec le backend via des appels RESTful.
- **Backend** : Développé avec Spring Boot, il gère la persistance des données dans une base de données H2 en mémoire.
- **API REST** : Gérée et simplifiée par Spring Data REST.

## Utilisation de l'interface

- L'interface utilisateur permet de gérer les comptes bancaires : consultation, ajout, modification et suppression.
- Un menu déroulant permet de sélectionner le format des requêtes entre **JSON** et **XML**.


![Image 2024-11-26 at 01 10 30](https://github.com/user-attachments/assets/42f2e1ae-5286-443b-a6c9-686ad81a8372)

![Image 2024-11-26 at 01 10 44](https://github.com/user-attachments/assets/f61da0d1-d2e3-4826-9120-64f07335cd95)

  
