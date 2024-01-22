# ClickSoft teste técnico
Projeto criado para a seleção do cargo Desenvolvedor, da ClickSoft. O projeto utiliza Adonijs O banco de dados utilizado foi o PostgreSQL, o qual foi integrado ao backend utilizando a orm do próprio Adonisjs

### Objetivo
Elaborar uma aplicação para ajudar a controloar a alocação de alunos e professores de uma escola

### Pré-requisitos
* Node.js 16.14.2: https://nodejs.org/en
* Adonijs: https://adonisjs.com
* Docker: https://docs.docker.com/get-docker/
* Yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

### Executando a aplicação
##### Backend
1. Entre na pasta api utilizando o comando  $ cd api
2. Na raiz da API, crie um arquivo .env segundo o exemplo contido no arquivo .env.example.
3. Execute os seguintes comando
```bash
$ yarn install //irá instalar as dependências necessárias

$ docker-compose up -d //irá iniciar o postgress

$ yarn db:setup //irá criar as tableas e configurar o banco de dados

$ yarn dev //
```

4. Um arquivo insomnia com as rotas e sua documentação pode ser encontrado dentro do arquio docs 

