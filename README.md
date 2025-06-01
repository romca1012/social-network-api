# 🧠 Social Network API — Architecture Microservices (Node.js + MongoDB)

Ce projet est une API backend complète pour un réseau social, conçue pour être **modulaire**, **scalable** et **sécurisée**, en suivant une architecture **microservices**.  
Il repose sur **Node.js**, **Express**, **MongoDB**, et respecte les bonnes pratiques de séparation de services et sécurisation des données.

---

## 📦 Microservices disponibles

| Service         | Port  | Description                                      |
|-----------------|-------|--------------------------------------------------|
| `auth_service`  | 3001  | Inscription, connexion, récupération mot de passe |
| `post_service`  | 3002  | Création, mise à jour, suppression de posts     |
| `like_service`  | 3003  | Likes sur les posts, un seul like par user/post |

---

## 🛠️ Pré-requis

- Node.js v18+
- MongoDB en local (par défaut sur `mongodb://localhost:27017`)
- Postman ou curl pour tester les routes

---

## 🚀 Lancer les services

Chaque service est indépendant. Voici les étapes à suivre pour chacun :

```bash
# Exemple avec auth_service
cd auth_service
npm install
npm run dev
