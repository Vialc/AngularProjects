# Lista de Filmes - Um projeto piloto para Capitani

Projeto desenvolvido para demonstração de domínio do framework Angular.

## Funcionalidades
- Listar Filmes cadastrados em um servidor
- Filtrar por gênero e/ou palavra
- cadastrar novo filme, atualizar filme, deletar filme.

## Principais Stacks e Libs
Angular, Typescript, CSS, SASS, SCSS, HTML

- Angular Material
- RxJS
- NGX Infinite Scroll

## Simulando o Back-end

Execute `npm install -g json-server` para instalar globalmente o servidor json. Após a instalação entre na pasta do projeto e execute `json-server --watch db.json`, com isso um servidor será inicializado na url `http://localhost:3000/`, após a inicialização sera possível realizar requisições http.

## Gerando componente

Execute `ng generate component nome-do-componente` para criar um novo componente. Você também pode usuar `ng generate directive|pipe|service|class|guard|interface|enum|module`.