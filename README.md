# ClickSoft teste técnico
Projeto criado para a seleção do cargo Desenvolvedor, da ClickSoft. O projeto utiliza Adonijs O banco de dados utilizado foi o PostgreSQL, o qual foi integrado ao backend utilizando a orm do próprio Adonisjs

### Objetivo
Elaborar uma aplicação para ajudar a controloar a alocação de alunos e professores de uma escola

### Pré-requisitos
* Node.js 15>: https://nodejs.org/en
* Docker: https://docs.docker.com/get-docker/
* Yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

### Executando a aplicação
##### Backend
1. Entre na pasta school-api utilizando o comando  $ cd school-api
2. Na raiz da API, crie um arquivo .env segundo o exemplo contido no arquivo .env.example.
3. As credencias de banco de dados do arquivo .env devem ser as mesmas contidas no arquivo docker-compose.yml
4. Caso você já tenha postgres rodando você definir as porta no arquivo docker-compose.yml da seguinte manteira
```bash
    ports:
      - '1234:5432'
```
* Caso tenha feito a alteração anterior lembre de também alterar no arquivo .env
5. Execute os seguintes comando
```bash
$ yarn install //irá instalar as dependências necessárias

$ docker-compose up -d //irá iniciar o postgress

$ yarn db:setup //irá criar as tableas e configurar o banco de dados

$ yarn dev //
```

* Caso não possua o yarn pode ser utilizado o npm da seguinte forma
```bash
$ npm install //irá instalar as dependências necessárias

$ docker-compose up -d //irá iniciar o postgress

$ npm run db:setup //irá criar as tableas e configurar o banco de dados

$ npm run dev // para rodar a aplicação
```


### Documentação
* Um arquivo insomnia com as rotas e sua documentação pode ser encontrado dentro do arquivo docs. Na aba docs de cada requisição é encontrado uma descrição do funcionamento daquela rota.
* Defina o base enverionment do insomina da seguinte maneira
```bash
{
	"baseUrl": "http://localhost:3000/api"
}
```
  

