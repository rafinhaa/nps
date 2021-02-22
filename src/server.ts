import express, { response } from 'express';

const app = express();

/**
 * GET    => Buscas
 * POST   => Salvar
 * PUT    => Alterar
 * DELETE => Deletar
 * PATCH  => Alteracao especifica
 */

 //Routes
 //http://localhost:PORT/users
app.get("/", (request, response) =>{
    //return response.send("Hello World");
    return response.json(
        {
            message: "Hello World"
        }
    );
});

// 1 Parametro => Rota (Recurso API)
// 1 Parametro => request,response
app.post("/", (request, response) =>{
   //recebeu dados para salvar
   return response.json(
        {
            message: "Dados foram salvos com sucesso"
        }
    );
});

app.listen(15000, () => console.log("Server start"));