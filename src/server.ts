import { app } from "./app";

// Criando o servidor na porta 15000, para iniciar: yarn dev
// Yarn dev configurado no package.json pelo Ts-node-dev
app.listen(15000, () => console.log("Server start"));