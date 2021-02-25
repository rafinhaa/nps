# NLW - Projeto NPS

<h4 align="center">
    <img width="300px" src="https://i.postimg.cc/QMFZDQ5c/Screenshot-1.png">
    <br><br>
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;      
      <a href="#-test">Test</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;      
      <a href="#-contribute">Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;      
      <a href="#-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://i.imgur.com/1o7urkT.png">
  </a>
</p>

## 🔖 About
Net Promoter Score (NPS), aplicativo para pesquisa de satisfação.
- Cadastro de usuário 
- Cadastro de perguntas
- Envio de e-mail
- Calculo de NPS

## 🛠 Technologies
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [YARN](https://yarnpkg.com/)
- [Typescript](https://www.typescriptlang.org/)

## ℹ️ Info
- [Ambiente](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)
- [Day 1](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-a0040fa51a764bdaaf5648fedbf6fb4d)
- [Day 2](https://www.notion.so/danileao/Dia-2-Iniciando-com-o-Banco-de-Dados-ffa8a141872641b7b13338f339d7a69b)
- [Day 3](https://www.notion.so/Dia-3-Testando-a-nossa-aplica-o-6b517e6d081241258009c640f7032cde)
- [Day 4](https://www.notion.so/danileao/Dia-4-Envio-de-e-mail-1b85cb36f0a84e5e90a43e3acbce5674)

## 🏁 How to run the project
#### Clone the repository
```bash
git clone https://github.com/rafinhaa/nps.git
cd projeto-nps
```

#### Install dependencies
```bash
yarn install
```

#### Run the application
```bash
yarn dev
```

#### Generation database.sqlite and tables
```bash
yarn typeorm migration:run
```

## 🔧 Test
To test whether you installed the application correctly and pass all integration tests, use the command:
```bash
yarn test
```

## 🤝 How to contribute with
Every kind of contribution is welcome, we admire it!
Is there any problem? Found a bug? Do you have any tips? Open an [issue](https://github.com/rafinhaa/nps/issues) describing it.
Want to contribute code? We ask that you first read [this contribution guide](https://github.com/firstcontributions/first-contributions)
Don't forget to leave your ⭐, it is also a way to contribute to the project;)

## 📄 Changelog
##### v0.0.4b
- Criado migration de surveysUsers
- Criado model surveysUsers
- Criado repository surveysUsers
- Criado controller surveysUsers
- Criado serviço de e-mail
- Teste de envio de e-mail

##### v0.0.3b
- Refatorado o controller
- Criado migration de pesquisa
- Criado repository de pesquisa
- Criado controller de pesquisa
- Teste automatizado

##### v0.0.2b
- Configurado TypeORM
- Criado migration de usuário
- Criado model de usuário
- Criado controller do usuário
- Criado rota do usuário

##### v0.0.1b 
- Criar primeira rota
- Tipos de métodos
- Rota POST
- Rota GET

## 📝 License
[MIT](LICENSE)
**Free Software, Hell Yeah!**
