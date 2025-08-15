# Dockerized Fullstack Project

## Project Overview

This project demonstrates a **fullstack application** deployed using **Docker Compose**, with separate containers for the **frontend** (React + Vite + Nginx) and **backend** (Node.js + Express). The setup enables rapid local development, multi-container orchestration, and easy deployment to other environments.

---

## Features

* Multi-container Docker setup:

  * **Frontend**: React app built with Vite, served via Nginx.
  * **Backend**: Node.js Express API serving JSON data.
* Communication between frontend and backend via internal Docker network.
* Exposed ports for external access:

  * Frontend: `http://localhost:80`
  * Backend API: `http://localhost:8090/api`
* Easy scaling of services with Docker Compose.

---

## Prerequisites

* Docker ≥ 20.10
* Docker Compose ≥ 2.0
* Node.js & npm (for local development if needed)

---

## Project Structure

```
fullstack-app/
├── backend/
│   ├── src/main/node/server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   └── App.jsx
│   ├── package.json
│   ├── Dockerfile
│   └── index.html
├── deploy/
│   └── docker-compose.yml
└── README.md
```

---

## Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/kanamandarajesh/dockerized-fullstack-project.git
cd dockerized-fullstack-project
```

2. **Start the application using Docker Compose**:

```bash
docker compose up --build
```

3. **Access the application**:

* Frontend: [http://localhost](http://localhost)
* Backend API: [http://localhost:8090/api](http://localhost:8090/api)

---

## Docker Compose Details

* Uses a **custom bridge network** to enable communication between containers.
* Frontend container depends on backend container.

---

## Notes

* The frontend fetches data from the backend API.
* Modify `App.jsx` to point to the correct backend IP or service name for production deployment.

---

## Author

* **Rajesh Kanamanda**
* GitHub: [https://github.com/Rajesh-Kanamanda](https://github.com/Rajesh-Kanamanda)

---
