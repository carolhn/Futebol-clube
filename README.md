## Projeto Futebol Clube! ⚽

## Contexto do projeto:
Este é um projeto da Trybe que foi desenvolvido no módulo de Back-end. O TFC é um site informativo sobre partidas e classificações de futebol. Nele foi desenvolvida uma API utilizando o método TDD (Test Driven Development) e feita a sua integração com um front-end (já estruturado) e com um banco de dados MySQL. Neste projeto buscou-se seguir todas as diretrizes dos princípios SOLID e do paradigma de programação POO (Programação orientada a objetos).O back-end implementa as regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

## Tecnologias utilizadas:
Em seu desenvolvimento foi utilizada linguagem TypeScript e JavaScript para escrever os códigos e Node.js juntamente com o framework Express para fornecer toda a estrutura que possibilitou a construção dos endpoints da aplicação.

Foi utilizado o ORM Sequelize, que é o responsável por toda a abstração de consultas e manipulações do banco de dados MySQL.

Para a geração e verificação de tokens foi utilizado o JWT (JSON Web Token), com ele é possível verificar se o usuário está devidamente autenticado e se ele tem permissões de administrador para realizar determinadas ações, como cadastrar, atualizar ou finalizar partidas, deixando assim a aplicação mais segura.

Os testes de integração foi utilizado Mocha e Chai para estruturar os testes e fazer as asserções e o Sinon para mockar as funções, não permitindo que os testes tivessem acesso ao banco de dados.


## Instalação Local:
Para rodar a aplicação em sua maquina.

1. Clone o repositorio. Use o comando:</br>
  <code>git clone git@github.com:carolhn/Futebol-clube.git</code></br>

2. Entre na pasta do repositório que você acabou de clonar:</br>
    `cd Futebol-clube`

3. Instale as dependências:</br>
<code>npm install</code>

4. Comando para executar o app:</br>
<code>npm pretest</code>


## Instalação com Docker:
1. Rode o serviço `node` com o comando `npm run compose:up` na principal.
  - Esse serviço irá inicializar um container chamado `app_backend`, `app-frontend-1` e `db`.

- 🚨 Ao subir a aplicação, o serviço de Front-end estará rodando na port 3000 da sua máquina, o Back-end estará rodando na porta 3001 e o banco de dados MySQL estará rodando na porta 3002.

2. Para rodar os testes de integração e verificar a sua cobertura são utilizados os seguintes comandos:
`cd app`
`cd backend`
`npm run test:coverage`


## Contato:
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caroline-nunes-devfullstack/)
[![Instagran](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/caarolhn/)
[![Whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/48988037114)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nunescaroline905@gmail.com)



