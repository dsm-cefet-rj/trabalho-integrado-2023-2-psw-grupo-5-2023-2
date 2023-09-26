# EasyCook

## Estrutura do projeto

O projeto é dividido em duas pastas:

* Prototipagem -> Protótipos de HTML/JS/CSS
* react-easycook/project. -> Projeto desenvolvido com o framework React

Para iniciar o projeto, navegue pelo seu terminal até a pasta:

    ./react-easycook/project

Nesta páginas, caso não tenha instalado, instale as dependências com o comando:

    npm install

Note que é necessário ter o node instalado no computador.

Após instalar as dependências, rode o programa, com o terminal na mesma pasta:

    npm start

E, por fim, execute o database de testes com o comando:

    json-server --watch db.json --port 3002

Por padrão, o frontend do projeto está sendo executado na porta localhost:3000 enquanto o backend do banco de dados de teste na porta localhost:3000.

## Executando o DB de mockup

Execute o seguinte comando com o terminal na pasta do projeto (`./react-easycook/project/`)

    json-server --watch db.json --port 3002

Caso apresente um erro, instale o json-server:
    npm install -g json-server


## Fluxo de trabalho do github

[Pequeno guia sobre como colaborar usando git e github](https://docs.github.com/pt/get-started/quickstart/github-flow)