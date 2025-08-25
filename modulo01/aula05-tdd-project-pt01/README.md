# Testando com BDD: Criando Banco de Dados com Faker

Este repositório contém exemplos práticos e anotações sobre a aplicação
de **Behavior Driven Development (BDD)** em testes automatizados, com
foco na criação de um banco de dados fictício utilizando a biblioteca
**Faker**.

O objetivo é demonstrar como o uso de dados simulados pode apoiar a
escrita de testes mais realistas e como o BDD ajuda a validar
comportamentos de forma clara e próxima da linguagem de negócio.

------------------------------------------------------------------------

## Conceitos Chave

### O que é BDD?

O **Behavior Driven Development** (Desenvolvimento Guiado por
Comportamento) é uma prática que estende o TDD (Test Driven
Development), mas com foco em **comportamentos esperados do sistema** em
vez de sua implementação.

Em BDD, utilizamos descrições que podem ser lidas tanto por
desenvolvedores quanto por pessoas não técnicas, geralmente em uma
linguagem próxima ao natural (como **Gherkin**).

### Uso do Faker

Para simular cenários de teste, utilizamos o **Faker**, que gera dados
falsos (nomes, e-mails, endereços, etc.). Isso nos permite:

-   Criar bancos de dados fictícios para testes.
-   Garantir maior **realismo** nos cenários.
-   Reduzir a dependência de dados estáticos e repetitivos.

⚠️ **Observação Importante sobre o Faker**\
Como muita gente sabe, o pacote **faker** foi descontinuado pois o
desenvolvedor original encerrou o projeto.
Para os nossos exemplos, você **não precisa migrar** para a nova versão,
pois a versão **5.1.0** que estamos usando aqui no módulo continua
funcionando normalmente.

Para instalar essa versão, rode:

``` bash
npm install faker@5.1.0
```

Caso queira utilizar a alternativa que surgiu após o encerramento,
existe o pacote **faker-js**, que possui a **mesma API**.
Acesse a página do pacote para verificar:\
👉 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

------------------------------------------------------------------------

## Vantagens do BDD com Faker

-   **Cenários próximos do mundo real:** testes baseados em
    comportamentos, alimentados com dados variados.
-   **Documentação viva:** os testes funcionam como especificação do
    sistema.
-   **Flexibilidade:** fácil adaptação de novos cenários de negócio.

------------------------------------------------------------------------

## Exemplo Prático: Banco de Dados com Faker

Na **Parte 01** deste projeto, foi criado um banco de dados utilizando o
Faker, que servirá de base para testes comportamentais.

Esse banco simula informações necessárias para validar casos de uso,
permitindo cenários dinâmicos e realistas.

------------------------------------------------------------------------

## Como Executar

### Pré-requisitos

-   Node.js instalado (desenvolvido e testado com a versão 24.6.0)\
-   Recomenda-se usar um gerenciador de versões como o NVM

### Passos

1.  Clone este repositório.

2.  Navegue até a pasta do projeto.

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Execute os testes:

    ``` bash
    npm test
    ```

------------------------------------------------------------------------

## Referências

-   [Behavior Driven Development: BDD and Functional
    Testing](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)\
-   [Unit Testing, TDD and
    BDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing,implementation%20detail%20in%20unit%20tests.&text=You%20should%20not%20test%20implementation%2C%20but%20instead%20behavior)\
-   [Mocha-Cucumber](https://www.npmjs.com/package/mocha-cucumber)\
-   [BDD with JavaScript, Cucumber and
    Gherkin](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)

------------------------------------------------------------------------

## Autor

-   **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

------------------------------------------------------------------------

## Licença

Este projeto está sob a Licença
[MIT](https://opensource.org/license/MIT).
