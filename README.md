# EasyCook

## Estrutura do projeto

O projeto é dividido em duas pastas:

- Prototipagem -> Protótipos de HTML/JS/CSS
- react-easycook/project -> Projeto desenvolvido com o framework React e NodeJS

Para ter uma melhor visualização do projeto, recomenda-se baixar a fonte de texto utilizada:

    https://freefontsfamily.com/helvetica-font-family/

Você pode instalar e iniciar o projeto usando os scripts "project-install" e "project-run" na pasta raíz do projeto:

    project-install

    project-run

Ou, alternativamente, navegue pelo seu terminal até a pasta:

    ./react-easycook/project

Nesta páginas, caso não tenha instalado, instale as dependências com o comando:

    npm install

ou, tente um clean install:

    npm ci

Note que é necessário ter o node instalado no computador.

Após instalar as dependências, rode o frontend, com o terminal na mesma pasta:

    npm start

Para o backend, navegue até a pasta:

    ./react-easycook/backend

Instale as dependências:

    npm install

Rode o backend:

    npm run dev

Caso encontre problemas, verifique seu acesso ao mongodb Atlas ou as dependências do nodemon. Tente instalar globalmente:

    npm install -g nodemon

Por padrão, o frontend do projeto está sendo executado na porta localhost:3000 enquanto o backend do banco de dados de teste na porta localhost:3001.

## Executando o DB de mockup

Execute o seguinte comando com o terminal na pasta do projeto (`./react-easycook/project/`)

    json-server --watch db.json --port 3002

Caso apresente um erro, instale o json-server:
npm install -g json-server

## Fluxo de trabalho do github

[Pequeno guia sobre como colaborar usando git e github](https://docs.github.com/pt/get-started/quickstart/github-flow)
