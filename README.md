# OAMK Data Storage and Data Analysis - NoSQL

- Task in Moodle: https://moodle.oulu.fi/mod/assign/view.php?id=1059318
- Course from FreeCodeCamp: https://www.freecodecamp.org/news/learn-nosql-in-3-hours/

## Prerequisites

- [Node](https://nodejs.org/en/download) and npm installed. Recommend to use [asdf](https://asdf-vm.com/) if using Node & npm in different projects and require different versions.

## Backend

```
cd backend
npm install
npm run seed
npm run start
```

This will start backend at address `http://localhost:3000`. Example requests are in `REQUESTS.http` and you can use [vscode rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to run them.

## Frontend

Used [Vite](https://vitejs.dev/guide/) and `npm create vite@latest` to scaffold React project.

```
cd frontend
npm install
npm run dev
```
